import React from "react";

export default function CustomImage({ src, alt, loading = "lazy", ...props }) {
	return <img {...props} src={src} alt={alt} loading={loading} />;
}
