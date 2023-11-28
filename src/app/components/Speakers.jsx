import { Link } from "react-router-dom";

import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CustomImage from "./CustomImage";

export default function Speakers({ limit = 0 }) {
	return (
		<div>
			<div className="mb-8 text-4xl font-bold">Speakers</div>
			<div className="grid grid-cols-12 gap-4 md:gap-4">
				{speakersData
					?.filter((e) => e?.enabled)
					// ?.slice(0, limit)
					?.map((speaker, idx) => {
						if (idx >= limit && limit !== 0) return null;

						return (
							<Link
								key={speaker.name}
								to={`/speakers/${speaker.slug}`}
								className="col-span-6 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-3 lg:col-span-2"
							>
								<CustomImage
									src={speaker.imageSmall.url}
									alt=""
									className="mb-2 aspect-[12/16] w-full rounded-lg object-cover sm:aspect-[12/16]"
									loading="lazy"
								/>
								<div className="font-bold">{speaker.name}</div>
								{/* <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
								@{speaker.twitterUsername}
							</div> */}
								<div className="text-sm">{speaker.title}</div>
								{/* <div className="text-sm">
								{speaker.title}, {speaker.company.name}
							</div> */}
							</Link>
						);
					})}

				{limit ? (
					<Link
						to={`/speakers`}
						className="col-span-6 flex flex-col items-center justify-center rounded-xl border-2 p-6 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-4 lg:col-span-3 2xl:col-span-2"
					>
						<FontAwesomeIcon icon={faExternalLink} className="mb-2 h-6 w-6" />
						<div className="font-bold">See more</div>
					</Link>
				) : null}
			</div>
		</div>
	);
}

export const speakersData = [
	{
		enabled: true,
		name: "Khaled Letaief",
		bio: "New Bright Professor of Engineering, HKUST, Hong Kong Member, United States National Academy of Engineering (NAE) President, IEEE Communications Society (2018-19).",
		title: "Division Director III, IEEE Board of Directors",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Khaled Letaief",
		twitterUsername: "Khaled Letaief",
		company: {
			name: "Google",
		},
		image: {
			url: "/assets/people/Khaled Letaief.jpg",
		},
		imageSmall: {
			url: "/assets/people/Khaled Letaief.jpg",
		},
	},
	{
		enabled: true,
		name: "Deepak Mathur",
		bio: `Mr Deepak Mathur has served as the Director of IEEE Region 10 (Asia-Pacific) in 2021-2022. He is presently IEEE Vice President-Elect of Member Geographic Activities (MGA) and he will be serving as its Vice President in 2024. 
		IEEE (Institute of Electrical and Electronics Engineers) is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
		Mr Mathur has also served in various volunteer leadership roles within IEEE at Section, Council, Region and MGA (Member Geographic Activities). Previously, he was the IEEE India Council Chair in 2015-16.
		Mr Mathur, a former Chief General Manager of ONGC (India’s premier public sector company engaged in exploration and exploitation of hydrocarbons), has more than 37-years of professional experience in fields of electronics, telecommunication, IT infrastructure and has held various engineering and managerial positions during his career. He has successfully conducted planning and executions of several IT projects like SCADA, on-line/real-time monitoring systems, IT infrastructure creation, Wi-Max based broadband wireless access system, GPS/GSM based vehicle tracking system etc. and has led teams of IT professionals and multi-disciplinary teams. He also has the experience of managing and working on Hi-Tech (Oil) Well Logging Systems which analyzes the properties of subsurface to explore the possibility of hydrocarbons. 
		Deepak holds a Bachelor of Engineering degree in Electronics and Communications from Indian Institute of Technology (IIT), Roorkee and an MBA. He has also completed Advance Management Program from India Institute of Management (IIM), Calcutta.
		In his IEEE journey, Deepak has been the recipient of various IEEE recognitions including the prestigious IEEE Region 10 Outstanding Volunteer Award, IEEE MGA Achievement Award and IEEE India Council Life Time Achievement award.
		He is also a member of the highly acclaimed international honor society IEEE-HKN or Eta Kappa Nu (ΗΚΝ), which is known to promote excellence in profession and in education through an emphasis on scholarship, character, and attitude. Its membership is a lifelong designation for individuals who have distinguished themselves as students or as professionals in electrical engineering, computer engineering, computer science, and other fields of IEEE’s interest.
		`,
		title: "IEEE Vice President Elect - MGA",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Deepak Mathur",
		twitterUsername: "Deepak Mathur",
		company: {
			name: "Google",
		},
		image: {
			url: "/assets/people/mathur-deepak.webp",
		},
		imageSmall: {
			url: "/assets/people/mathur-deepak.webp",
		},
	},
	{
		enabled: true,
		name: "Maurizio Bozzi",
		bio: `Maurizio Bozzi received the Ph.D. degree in electronics and computer science from the University of Pavia, Pavia, Italy, in 2000. Currently, he is a full professor of electromagnetic fields at the University of Pavia. His main research interests concern the computational electromagnetics, the substrate integrated waveguide technology, and the use of novel materials and fabrication technologies for microwave circuits. 
		Prof. Bozzi is the 2023 President Elect of the IEEE Microwave Theory and Technology Society (MTT-S). He is a Fellow of IEEE.`,
		title: "President-Elect MTT-S",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Maurizio_Bozzi",
		twitterUsername: "Maurizio_Bozzi",
		company: {
			name: "Google",
		},
		image: {
			url: "/assets/people/Maurizio_Bozzi.jpg",
		},
		imageSmall: {
			url: "/assets/people/Maurizio_Bozzi.jpg",
		},
	},
	{
		enabled: true,
		name: "Mike Hinchey",
		bio: "Mike Hinchey is a Professor of Software Engineering at the University of Limerick. He previously directed the NASA Software Engineering Laboratory and continues to be a NASA Expert. Hinchey is a renowned innovator, holding degrees from prestigious universities and publishing extensively in the field. He has held esteemed positions worldwide and is recognized as a Chartered Engineer and Fellow of professional societies. Currently, he serves as President of IFIP and Vice-Chair of IEEE UK & Ireland section.",
		title: "IEEE R8 Director-Elect",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Mike Hinchey",
		twitterUsername: "Mike Hinchey",
		company: {
			name: "Vercel",
		},
		image: {
			url: "/assets/people/Mike Hinchey.webp",
		},
		imageSmall: {
			url: "/assets/people/Mike Hinchey.webp",
		},
	},
	{
		enabled: true,
		name: "Abdulateef Aliyu",
		bio: `Abdullateef is an accomplished General Manager of Projects at Phase 3 Telecom. He holds a bachelor’s degree in electrical engineering from Bayero University Kano (BUK) and a master's degree in information and communication technology (ICT) with Honors from the Northern University of Malaysia. He is also a certified business analyst and has completed certification from the United States Telecommunication Training Institute (USTTI) in Washington DC.

		Highlights of Abdullateef's career include a senior management role at Suburban West Africa before joining Phase 3 Telecom in 2013. He has played a vital role in expanding the company's optical aerial and underground infrastructure, which now spans over 6000 km. He has also led the successful implementation of the Phase 3 Telecom 100G transmission network backbone nationwide between 2019 and 2022. Abdullateef has contributed to the deployment of numerous high-profile projects for Mobile Network Operators (MNOs) across Nigeria and Sub-Saharan Africa, earning him industry recognition.
		
		He is a Senior member of the Institute of Electrical and Electronics Engineers (IEEE) the world's largest technical organization, serving as the chair of the IEEE Student Activities Committee in Europe, Middle East, and Africa (EMEA) – also known as Region 8. He founded the IEEE Smart Village Africa Working Group in 2020, which has grown to have about 1,000 members from 44 countries in Africa. He is also involved in several committees and boards related to engineering, technology, and humanitarian initiatives. He holds numerous certifications, including Certified Scrum Master (CSM), Project Manager Professional (PMP), Certified Business Analysis Professional, and Certified Quality Improvement Associate (CQIA). He is a Chartered Engineer and a member of the Nigeria Society of Engineers, a member of the Council for Regulations of Engineering in Nigeria (COREN), and a Professional Member of the Eta Chapter of the Board of Governors.
		
		Abdullateef’s contributions to his field have been widely recognized, and he is the recipient of several awards and accolades. These include the Leadership and Innovative Award, Best Creativity Award, and Excellence in Leadership Award from Phase 3 Telecom and IEEE Smart Village, as well as the Award of Excellence from IEEE Nigeria Section, NSE Maitama branch, MGA Board Young Professionals Achievement Award, and Outstanding Volunteer of IEEE R8 ASYP Congress (EMEA) in various years.`,
		title: "IEEE R8 SAC Chair",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Abdulateef Aliyu",
		twitterUsername: "Abdulateef Aliyu",
		company: {
			name: "Vercel",
		},
		image: {
			url: "/assets/people/Abdulateef Aliyu.webp",
		},
		imageSmall: {
			url: "/assets/people/Abdulateef Aliyu.webp",
		},
	},
	{
		enabled: false,
		name: "Braham Himed",
		bio: "Dr. Himed has been an active member of the IEEE Aerospace and Electronic Systems Radar Systems Panel since 2001, initially serving as vice-chair from 2014 to 2016, and later as panel chair from 2016 to 2018. Currently, he holds the position of past-chair and chair of the Warren White Award for excellence in radar engineering. Dr. Himed is a distinguished Fellow of the IEEE since 2007 and also received the prestigious IEEE Warren White Award in 2012. He is also recognized as a Fellow of AFRL (Air Force Research Laboratory) since 2013.",
		title: "IEEE AESS Vice President Conferences",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Braham Himed",
		twitterUsername: "Braham Himed",
		company: {
			name: "Vercel",
		},
		image: {
			url: "/assets/people/Braham Himed.jpg",
		},
		imageSmall: {
			url: "/assets/people/Braham Himed.jpg",
		},
	},
	{
		enabled: true,
		name: "Nita Patel",
		bio: `Nita Patel is Senior Director at Otis's lead design center in Farmington, where she is leading global engineering development and providing new capabilities in connected, smart, IoT-based platforms. Nita is 2023 President of the IEEE Computer Society. Nita has served in many IEEE volunteer roles: IEEE Foundation Director, founder of the IEEE Women in Engineering International Leadership Conference (WIE ILC), past Women in Engineering International Chair, Eta Kappa Nu Board of Governors, IEEE-USA Vice President and more. Nita received her MS Computer Engineering, BS Electrical Engineering and BS Mathematics from Southern Methodist University in Dallas.`,
		title: "President @IEEE CS",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Nita_Patel",
		twitterUsername: "Nita Patel",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/E14FaYO.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/E14FaYO.jpg",
		},
	},
	{
		enabled: true,
		name: "Antonio Luque",
		bio: `Antonio Luque (Senior Member, IEEE) is currently an Associate Professor with the Department of Electronics Engineering, University of Seville. He has been an Invited Researcher and a Teacher at the Swiss Federal Institute of Technology Lausanne (Switzerland), Auburn University (AL, USA), the Delft University of Technology (The Netherlands), Jade University (Germany), the Harbin Institute of Technology (China), and the Tecnológico de Monterrey (Mexico). He has authored 20 journal articles, 40 conference papers, three book chapters, and a textbook, in addition to supervising two Ph.D. students. He is a member of the IEEE Board of Directors.`,
		title: "Associate Professor at the University of Seville",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Antonio_Luque",
		twitterUsername: "Antonio Luque",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/PutidhY.png",
		},
		imageSmall: {
			url: "https://i.imgur.com/PutidhY.png",
		},
	},
	{
		enabled: true,
		name: "Lwanga Herbert",
		bio: `Chair @IEEE Humanitarian Technologies Board (IEEE HTB)`,
		title: "Chair @IEEE HTB",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Lwanga_Herbert",
		twitterUsername: "Lwanga Herbert",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/e8e9IWt.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/e8e9IWt.jpg",
		},
	},

	{
		enabled: true,
		name: "Laura Meyer",
		bio: `LLM Candidate, Public International Law - Law of the Sea and Environmental Law specialization | Planet Positive 2030 Initiative by IEEE`,
		title:
			"Co-chair, Ocean Decade initiative / IEEE Oceanic engineering society",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "LauraMeyer",
		twitterUsername: "Hasala_Dharmawardena",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/X1fTvTg.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/X1fTvTg.jpg",
		},
	},
	{
		enabled: false,
		name: "Thomas Coughlin",
		bio: "An experienced owner in the digital storage industry with a strong background in HDDs, SSDs, SAN, NAS, and cloud storage. He holds a Ph.D. in Electrical and Electronics Engineering from Shinshu University.",
		title: "IEEE President-Elect",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Thomas Coughlin",
		twitterUsername: "Thomas Coughlin",
		company: {
			name: "Vercel",
		},
		image: {
			url: "/assets/people/Thomas Coughlin.webp",
		},
		imageSmall: {
			url: "/assets/people/Thomas Coughlin.webp",
		},
	},

	{
		enabled: false,
		name: "Srikanth Pillai",
		bio: "Srikanth Vasudevan Pillai is a Ph.D. candidate and research assistant at McMaster University's MARC, specializing in the design and control of electric motors for EV and aerospace applications. At MARC, he is responsible for designing and testing high-speed machines for aerospace use. Srikanth's research focuses on machine control, and he has prior experience as an Assistant Professor at Amrita University. He is an active volunteer for IEEE and has organized and participated in international conferences. Srikanth's interests include playing the violin, reading, and watching TV. His programming skills include PIC microcontrollers and C, and he is proficient in MATLAB, PSIM, JMag, and ANSYS.",
		title: "IEEE IAS CMD Chair",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Srikanth Pillai",
		twitterUsername: "Srikanth Pillai",
		company: {
			name: "Vercel",
		},
		image: {
			url: "/assets/people/Srikanth Pillai.jpg",
		},
		imageSmall: {
			url: "/assets/people/Srikanth Pillai.jpg",
		},
	},

	{
		enabled: false,
		name: "Hamza Abdelhedi",
		bio: `Hamza Abdelhedi is computer science research master's student at the University of Montreal, specializing in the field of neuro-AI. He holds a telecommunications engineering diploma from the Higher School of Communication of Tunis (SUPCOM) with a background in mathematics from his pre-engineering studies. He is a Graduate Research Assistant at the Cognitive & Computational Neuroscience Lab supervised by Dr. Karim Jerbi. Hamza's primary focus is on exploring the integration of artificial and biological neural networks in face recognition, utilizing deep learning techniques and Magnetoencephalography (MEG) for analyzing internal representations with the aim of contributing to our understanding of the brain's complexities..

		Hamza's master's project has received significant support from prestigious scholarships such as the Cerebrum Neuro-AI Scholarship and the UNIQUE Excellence Scholarship (MSc level). These scholarships exemplify his commitment to excellence and his unwavering dedication to pushing the boundaries of neuro-AI research.
		
		Beyond academia, Hamza actively engages in social sector initiatives. Currently, he serves as a member of the scientific committee responsible for linking scientific research with student affairs at the UNIQUE Research Center. Notably, Hamza's leadership skills were recognized during his tenure as Chairman at the IEEE SUPCOM Student Branch. Under his guidance, the branch successfully organized the inaugural edition of the Deep Learning IndabaX in Tunisia, the largest AI event in Africa, in 2018. In 2020, Hamza's entrepreneurial spirit earned him the third prize in the SUPCOM entrepreneurship challenge and the distinction of being named the best IEEE Region 8 (EMEA) entrepreneurship initiative ambassador.
		
		`,
		title: "Neuro-AI Research",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "hamza_abdelhedi",
		twitterUsername: "hamza_abdelhedi",
		company: {
			name: "Google",
		},
		image: {
			url: "/assets/people/hamza_abdelhedi.jpg",
		},
		imageSmall: {
			url: "/assets/people/hamza_abdelhedi.jpg",
		},
	},

	{
		enabled: false,
		name: "Hasala Dharmawardena",
		bio: `I believe in the vision that it is possible to design a sustainable power grid that provides electric power to satisfy all basic needs of every human on the earth. In realizing this mission, my interests run from technical to socio-economic aspects of the power system. 

		Having lived on four continents, I am well versed in effectively working in different environments and thrive in working in inter-disciplinary, multi-cultural teams. I have a proven track record of leadership, having started and led many successful initiatives in IEEE and Toastmasters International. I lead IEEE Young Professionals (2023) and serve as liaison to the IEEE Board of Directors.
		`,
		title: "Chair of IEEE Young Professionals",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Hasala_Dharmawardena",
		twitterUsername: "Hasala_Dharmawardena",
		company: {
			name: "Google",
		},
		image: {
			url: "/assets/people/Dharmawardena_hasala.jpg",
		},
		imageSmall: {
			url: "/assets/people/Dharmawardena_hasala.jpg",
		},
	},
	{
		enabled: true,
		name: "Eric Berkowitz",
		bio: `Eric has nearly 30 years’ experience in progressively responsible positions related to global membership marketing, brand development and non-dues generation with three national and international professional membership organizations. Eric is currently the Director of Membership and Education for the IEEE Computer Society where he is responsible for the overall IEEE Computer Society membership experience.`,
		title: "Director of Membership - IEEE Computer Society",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "EricBerkowitz",
		twitterUsername: "Hasala_Dharmawardena",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/59V4bgW.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/59V4bgW.jpg",
		},
	},
	{
		enabled: true,
		name: "Zied Bouida",
		bio: `Dr. BOUIDA is an Assistant Professor at Kuwait College of Science and Technology (KCST), Kuwait. Before that, he served as the Cisco Chair Technical Manager and Senior Research Associate at the Internet of Things Lab at Carleton University, Ottawa, ON, Canada. He is a Senior Member of the IEEE, HKN Professional Member, and Professional Engineer in Ontario. He served as IEEE Qatar YPs Committee Chair in 2016, IEEE Ottawa YP Chair from 2016 to 2017, and as IEEE Canada (R7) YPs Committee Chair from 2017 to 2021.`,
		title: "Senior Research Associate, Ericsson-Carleton Mobile Wireless Lab",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "ZiedBouida",
		twitterUsername: "Zied Bouida",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/C2G2wJk.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/C2G2wJk.jpg",
		},
	},
	{
		enabled: false,
		name: "Sabine Bastisch",
		bio: `Soft skills expert for corporate & executive teams  head of coaching at samari consulting`,
		title: "Samari consulting, head of coaching",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "SabineBastisch",
		twitterUsername: "Sabine Bastisch",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/S3wPvSs.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/S3wPvSs.jpg",
		},
	},
	{
		enabled: true,
		name: "Ljiljana Trajkovic",
		bio: `Ljiljana Trajkovic received the Dipl. Ing. degree from University of Pristina, Yugoslavia,
		the M.Sc. degrees in electrical engineering and computer engineering from Syracuse
		University, Syracuse, NY, and the Ph.D. degree in electrical engineering from University
		of California at Los Angeles. She is currently a professor in the School of Engineering
		Science, Simon Fraser University, Burnaby, British Columbia, Canada. Her research
		interests include communication networks and dynamical systems. She served as IEEE
		Division X Delegate/Director and President of the IEEE Systems, Man, and Cybernetics
		Society and the IEEE Circuits and Systems Society. Dr. Trajkovic serves as Editor-in-
		Chief of the IEEE Transactions on Human-Machine Systems and Associate Editor-in-
		Chief of the IEEE Open Journal of Systems Engineering. She is a Distinguished
		Lecturer of the IEEE Circuits and System Society, a Distinguished Lecturer of the IEEE
		Systems, Man, and Cybernetics Society, and a Fellow of the IEEE.`,
		title: "Professor of Engineering Science",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "LjiljanaTrajkovic",
		twitterUsername: "Ljiljana Trajkovic",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/QSCYpYf.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/QSCYpYf.jpg",
		},
	},
	{
		enabled: true,
		name: "Aladdin Ayesh",
		bio: `Professor of Artificial Intelligence and Vice Dean for Joint Institute of Data Sciences and Artificial Intelligence`,
		title: "Professor of Artificial Intelligence",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "AladdinAyesh",
		twitterUsername: "Aladdin Ayesh",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/7Zeu7ak.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/7Zeu7ak.jpg",
		},
	},
	{
		enabled: true,
		name: "Franceso Maurelli",
		bio: `Professor in Marine Systems with focus on Marine Robotics`,
		title: "OES YP @IEEE",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Franceso_Maurelli",
		twitterUsername: "Franceso Maurelli",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/eLfRVe7.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/eLfRVe7.jpg",
		},
	},
	{
		enabled: true,
		name: "Sajith Wijesuriya",
		bio: `Postdoctoral Researcher at NREL| Clean Energy Solutions Center (CESC), NICE Future, 21 CPP Initiatives at Clean Energy Ministerial| Chair of IEEE YP Climate and Sustainability Task Force`,
		title: "Postdoctoral Researcher @NREL",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Sajith_Wijesuriya",
		twitterUsername: "Sajith Wijesuriya",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/fkJfqPu.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/fkJfqPu.jpg",
		},
	},
	{
		enabled: false,
		name: "Olfa Kanoun",
		bio: `Full Professor bei Technische Universität Chemnitz`,
		title: "Professor at Technische Universität Chemnitz",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Olfa_Kanoun",
		twitterUsername: "Olfa Kanoun",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/M30EVD9.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/M30EVD9.jpg",
		},
	},
	{
		enabled: true,
		name: "Hatem Haddad",
		bio: `Hatem Haddad received a doctorate in Computer Science and Information Systems from University Grenoble Alpes, France. He was a Postdoctoral Fellow at VTT Technical Research Center of Finland and at Norwegian University of Science and Technology. 
		He occupied assistant professor positions at Grenoble Alpes university (France), at UAEU (EAU), at Sousse university (Tunisia), at Mevlana university (Turkey) and at ULB (Belgium). He worked for industrial corporations in R&D at VTT Technical Research Centre of Finland and Institute for Infocomm Research, Image Processing and Applications Lab of Singapore. He was an invited researcher at Leibniz-Fachhochschule School of Business (Germany) and Polytechnic Institute of Coimbra (Portugal). 
		His current research interests include Natural Language Processing, Machine Learning and Deep Learning. He is a Program Chair in various global conferences and serves as a reviewer for relevant journals and conferences in the Artificial Intelligence field. He is a board member of Masakhane and WiNLP (Widening NLP).`,
		title: "Professor, ISAMM",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "HatemHaddad",
		twitterUsername: "Hatem Haddad",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/yCAIzXX.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/yCAIzXX.jpg",
		},
	},
	{
		enabled: true,
		name: "Moez ben haj hmida",
		bio: `Moez is an associate professor at National Engineering School of Tunis (or ENIT as we say) in Tunisia. Here I teach Big Data and IoT for students in Information and Communication Technologies (ICT) and other engineering fields. I am involved in projects around multilingual and dialectal natural languages processing (NLP) and Generative AI. I come from the computer sciences field, and I am focused on Digital Humanism. I have worked Big Data Mining and analytics, distributed and high performance
		computing, and software development. Before visiting UC Berkeley I held a COO position at
		iCompass, a startup specialized in Artificial Intelligence Systems.
		In 2018, Moez held an appointment of visiting scholar at University of California at Berkeley. He serves as a PC member of international conferences and serves as a reviewer for international journals. In 2022, Moez received a Fulbright Award to spend a year in California studying Deep Learning models explainability at UC Berkeley.`,
		title: "Professor | Artificial Intelligence",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "moez_ben_haj_hmida",
		twitterUsername: "Moez ben haj hmida",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/pr3bm77.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/pr3bm77.jpg",
		},
	},
	{
		enabled: true,
		name: "Houman Zolfaghari",
		bio: `Houman Zolfaghari, Scientific Director at CRIM. Over twenty years of experience in artificial intelligence in the industry where he worked as a developer, researcher, and director. After his Ph.D. in mathematics from the University of Montreal in logic and category theory, he dedicated his career to various aspects of artificial intelligence, including machine learning, natural language processing, knowledge acquisition and modeling.`,
		title: "Scientific Director at CRIM",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Houman_Zolfaghari",
		twitterUsername: "Houman Zolfaghari",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/glR4kyZ.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/glR4kyZ.jpg",
		},
	},
	{
		enabled: true,
		name: "Khaled Sliti",
		bio: "Khaled Sliti serves as a software engineer at Google. He studied Software Engineering at the university of SUP'COM.",
		title: "Software Engineer, Google",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Khaled Sliti",
		twitterUsername: "Khaled Sliti",
		company: {
			name: "Google",
		},
		image: {
			url: "/assets/people/Khaled Sliti.jpg",
		},
		imageSmall: {
			url: "/assets/people/Khaled Sliti.jpg",
		},
	},
	{
		enabled: true,
		name: "Mohamed Amine Ben Temim",
		bio: `Telecommunication Engineer at Telnet`,
		title: "Telecommunication Engineer at Telnet",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Mohamed_Amine_Ben_Temim",
		twitterUsername: "Mohamed Amine Ben Temim",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/KUXPjuq.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/KUXPjuq.jpg",
		},
	},
	{
		enabled: true,
		name: "Rihab Lajmi",
		bio: `Investor 📈 | 🎥Youtuber | 📸 Content Creator | 🖊️Writer | Explorer 🧭 | Podcaster | I work @google`,
		title: "Cloud Space Architect @Google",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Rihab_Lajmi",
		twitterUsername: "Rihab Lajmi",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/cvaMD9D.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/cvaMD9D.jpg",
		},
	},
	{
		enabled: true,
		name: "Oussama Chelly",
		bio: `ML Cloud Solution Architect`,
		title: "ML Cloud Solution Architect",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "OussamaChelly",
		twitterUsername: "Oussama Chelly",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/e5IsSEu.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/e5IsSEu.jpg",
		},
	},
	{
		enabled: true,
		name: "Mohamed Baha Ben Ticha",
		bio: "I finished my Engineering degree at Sup'Com Tunis in 2019 and then I started in a position of Research assistant at Grenoble institute of Neuroscience at 2021 followed by a PhD curriculum at the same institute on the field of Speech Brain Computer Interface. Currently I am at the 3rd year of my PhD.",
		title: "Researcher, Computational Neuroscience",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Mohamed Baha Ben Ticha",
		twitterUsername: "Mohamed Baha Ben Ticha",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://i.imgur.com/x4KLefk.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/x4KLefk.jpg",
		},
	},
	{
		enabled: true,
		name: "Inés Boujmil",
		bio: `R&D&I Project Coordinator at AquaBioTech | EU BlueMed Ambassador in Tunisia | ECOP North Africa - Mediterranean Sub-regional Node coordinator | Blue Economy | Science-Policy-Business interfaces`,
		title: "Coordinator @ECOP North Africa - Mediterranean Sub-regional Node",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Inés_Boujmil",
		twitterUsername: "Inés Boujmil",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/83ODMZE.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/83ODMZE.jpg",
		},
	},
	{
		enabled: true,
		name: "Ichraf Jarray",
		bio: `I’m an entrepreneur, computer engineer, venture builder, and community catalyst, enthusiastic about innovation and technology.
		Founder of Hive12 Hub, initiator of various entrepreneurship and incubation programs for startups. US.ExchangeAlumni (PFP & TechWomen).`,
		title: "Founder @Hive12",
		talk: {
			title: "Keynote",
			description:
				"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
			youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
		},
		slug: "Ichraf_Jarray",
		twitterUsername: "Ichraf Jarray",
		company: {
			name: "Google",
		},
		image: {
			url: "https://i.imgur.com/5VRwwzm.jpg",
		},
		imageSmall: {
			url: "https://i.imgur.com/5VRwwzm.jpg",
		},
	},
];
