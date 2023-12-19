import { Center, Html, Text3D, useProgress } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Bloom, EffectComposer, LUT } from "@react-three/postprocessing";
import { LUTCubeLoader } from "postprocessing";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Beam } from "./ThreeExperience/Beam";
import { Box } from "./ThreeExperience/Box";
import { Flare } from "./ThreeExperience/Flare";
import { Prism } from "./ThreeExperience/Prism";
import { Rainbow } from "./ThreeExperience/Rainbow";
import { calculateRefractionAngle, lerp, lerpV3 } from "./util";

function Loader() {
	const { progress } = useProgress();

	return <Html center>{Math.floor(progress)}%</Html>;
}

export default function ThreeExperience() {
	const texture = useLoader(LUTCubeLoader, "/lut/F-6800-STD.cube");

	return (
		<Canvas
			orthographic
			gl={{ antialias: true }}
			camera={{ position: [0, 0, 100], zoom: 70 }}
		>
			<Suspense fallback={<Loader />}>
				<color attach="background" args={["black"]} />
				<Scene />
				<EffectComposer disableNormalPass>
					<Bloom
						mipmapBlur
						levels={9}
						intensity={1.5}
						luminanceThreshold={1}
						luminanceSmoothing={1}
					/>
					<LUT lut={texture} />
				</EffectComposer>
			</Suspense>
		</Canvas>
	);
}

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

function Scene() {
	const [days, hours, minutes, seconds] = useCountdown(dateTimeAfterThreeDays);
	const d = days + " : " + hours + " : " + minutes + " : " + seconds;

	const [isPrismHit, hitPrism] = useState(false);
	const flare = useRef(null);
	const ambient = useRef(null);
	const spot = useRef(null);
	const boxreflect = useRef(null);
	const rainbow = useRef(null);

	const rayOut = useCallback(() => hitPrism(false), []);
	const rayOver = useCallback((e) => {
		// Break raycast so the ray stops when it touches the prism
		e.stopPropagation();
		hitPrism(true);
		// Set the intensity really high on first contact
		rainbow.current.material.speed = 1;
		rainbow.current.material.emissiveIntensity = 20;
	}, []);

	const vec = new THREE.Vector3();
	const rayMove = useCallback(({ api, position, direction, normal }) => {
		if (!normal) return;
		// Extend the line to the prisms center
		vec.toArray(api.positions, api.number++ * 3);
		// Set flare
		flare.current.position.set(position.x, position.y, -0.5);
		flare.current.rotation.set(0, 0, -Math.atan2(direction.x, direction.y));
		// Calculate refraction angles
		let angleScreenCenter = Math.atan2(-position.y, -position.x);
		const normalAngle = Math.atan2(normal.y, normal.x);
		// The angle between the ray and the normal
		const incidentAngle = angleScreenCenter - normalAngle;
		// Calculate the refraction for the incident angle
		const refractionAngle = calculateRefractionAngle(incidentAngle) * 6;
		// Apply the refraction
		angleScreenCenter += refractionAngle;
		rainbow.current.rotation.z = angleScreenCenter;
		// Set spot light
		lerpV3(
			spot.current.target.position,
			[Math.cos(angleScreenCenter), Math.sin(angleScreenCenter), 0],
			0.05
		);
		spot.current.target.updateMatrixWorld();
	}, []);

	useFrame((state) => {
		// Tie beam to the mouse
		boxreflect.current.setRay(
			[
				(state.pointer.x * state.viewport.width) / 2,
				(state.pointer.y * state.viewport.height) / 2,
				0,
			],
			[0, 0, 0]
		);
		// Animate rainbow intensity
		lerp(
			rainbow.current.material,
			"emissiveIntensity",
			isPrismHit ? 2.5 : 0,
			0.1
		);
		spot.current.intensity = rainbow.current.material.emissiveIntensity;
		// Animate ambience
		lerp(ambient.current, "intensity", 0, 0.025);
	});

	// function getRandomArbitrary(min, max) {
	// 	return Math.random() * (max - min) + min;
	// }

	// const [hovered, setHover] = useState(false);
	// const intPos = getRandomArbitrary(0, 3);
	// const [position, setPosition] = useState([1.25, -3.3, 0]);
	// const { size, viewport } = useThree();
	// const aspect = size.width / viewport.width;
	// const bind = useDrag(
	// 	({ offset: [x, y] }) => {
	// 		const [, , z] = position;
	// 		setPosition([x / aspect, -y / aspect, 0]);
	// 	},
	// 	{ pointerEvents: true }
	// );

	// useEffect(() => {
	// 	document.body.style.cursor = hovered ? "move" : "auto";
	// 	return () => (document.body.style.cursor = "auto");
	// }, [hovered]);

	return (
		<>
			{/* Lights */}
			<ambientLight ref={ambient} intensity={0} />
			<pointLight position={[10, -10, 0]} intensity={0.05} />
			<pointLight position={[0, 10, 0]} intensity={0.05} />
			<pointLight position={[-10, 0, 0]} intensity={0.05} />
			<spotLight
				ref={spot}
				intensity={1}
				distance={7}
				angle={1}
				penumbra={1}
				position={[0, 0, 1]}
			/>
			{/* Caption */}
			<Center top bottom position={[0, 2, 0]}>
				<Text3D
					size={0.7}
					letterSpacing={-0.05}
					height={0.05}
					// font="/fonts/Inter_Bold_full_set.json"
					font="/fonts/Inter_Bold_tsyp11.json"
				>
					TSYP 11
					{/* {d} */}
					<meshStandardMaterial color="white" />
				</Text3D>
			</Center>
			{false && (
				<Center top bottom position={[0, -3, 0]}>
					<Text3D
						size={0.7}
						letterSpacing={-0.05}
						height={0.05}
						// font="/fonts/Inter_Bold_full_set.json"
						font="/fonts/Inter_Bold_tsyp11.json"
					>
						Coming Soon
						{/* {d} */}
						<meshStandardMaterial color="white" />
					</Text3D>
				</Center>
			)}
			{/* Prism + blocks + reflect beam */}
			<Beam ref={boxreflect} bounce={10} far={20}>
				<Prism
					position={[0, -0.5, 0]}
					onRayOver={rayOver}
					onRayOut={rayOut}
					onRayMove={rayMove}
				/>
				{/* <Box position={[1.25, -3.5, 0]} rotation={[0, 0, Math.PI / 3.5]} /> */}
				<Box
					position={[1.25, -3.3, 0]}
					// position={position}
					rotation={[0, 0, Math.PI / 3.5]}
					// {...bind()}
					// onPointerOver={(e) => setHover(true)}
					// onPointerOut={(e) => setHover(false)}
				/>
				{/* <Box position={[-2.5, -2.5, 0]} rotation={[0, 0, Math.PI / 4]} /> */}
				<Box position={[-4.8, -2.5, 0]} rotation={[0, 0, Math.PI / 4]} />
				<Box position={[-5, 1, 0]} rotation={[0, 0, Math.PI / 4]} />
				{/* <Box position={[-3, 1, 0]} rotation={[0, 0, Math.PI / 4]} /> */}
			</Beam>
			{/* Rainbow and flares */}
			<Rainbow ref={rainbow} startRadius={0} endRadius={0.5} fade={0} />
			<Flare
				ref={flare}
				visible={isPrismHit}
				renderOrder={10}
				scale={1.25}
				streak={[12.5, 20, 1]}
			/>
		</>
	);
}

const useCountdown = (targetDate) => {
	const countDownDate = new Date(targetDate).getTime();

	const [countDown, setCountDown] = useState(
		countDownDate - new Date().getTime()
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDate - new Date().getTime());
		}, 1000);

		return () => clearInterval(interval);
	}, [countDownDate]);

	return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
	// calculate time left
	const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

	return [days, hours, minutes, seconds];
};

export { useCountdown };

const DateTimeDisplay = ({ value, type, isDanger }) => {
	return (
		<div className={isDanger ? "countdown danger" : "countdown"}>
			<p>{value}</p>
			<span>{type}</span>
		</div>
	);
};

const ExpiredNotice = () => {
	return (
		<div className="expired-notice">
			<span>Expired!!!</span>
			<p>Please select a future date and time.</p>
		</div>
	);
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
	return (
		<div className="show-counter">
			<a
				href="#"
				target="_blank"
				rel="noopener noreferrer"
				className="countdown-link"
			>
				<DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
				<p>:</p>
				<DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
				<p>:</p>
				<DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
				<p>:</p>
				<DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
			</a>
		</div>
	);
};

const CountdownTimer = ({ targetDate }) => {
	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	if (days + hours + minutes + seconds <= 0) {
		return <ExpiredNotice />;
	} else {
		return (
			<ShowCounter
				days={days}
				hours={hours}
				minutes={minutes}
				seconds={seconds}
			/>
		);
	}
};
