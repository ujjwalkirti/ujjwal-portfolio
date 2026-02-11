import { useEffect, useState } from "react";

const GlowCursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updatePosition = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", updatePosition);
		return () => window.removeEventListener("mousemove", updatePosition);
	}, []);

	return (
		<div
			className="pointer-events-none fixed z-50 h-40 w-40 rounded-full bg-blue-400 opacity-20 blur-3xl transition-transform duration-75 ease-in-out"
			style={{
				transform: `translate(${position.x - 80}px, ${position.y - 80}px)`,
			}}
		/>
	);
};

export default GlowCursor;
