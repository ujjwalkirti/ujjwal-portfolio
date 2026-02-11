import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/LandingPage.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import { monsterrat } from "@/constants/data";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import GlowCursor from "@/components/GlowCursor";

export default function App({ Component, pageProps }: AppProps) {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const handleStart = () => {
			setLoading(true);
		};

		const handleComplete = () => {
			setLoading(false);
		};

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleComplete);
			router.events.off("routeChangeError", handleComplete);
		};
	}, []);

	return (
		<div className={"bg-white " + monsterrat.className}>
			{loading && <Loader />}
			<GlowCursor />
			<ChakraProvider>
				<section className="min-h-screen">
					<Navbar />
					<Component {...pageProps} />
				</section>
			</ChakraProvider>
			<Analytics />
		</div>
	);
}
