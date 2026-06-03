import Head from "next/head";
import LandingPage from "@/components/landing-page/LandingPage";
import { github_url, instagram_url, linkedin_url, /* twitter_url, */ url } from "@/constants/urls";

export default function Home() {
	return (
		<main className="bg-retro-bg min-h-screen">
			<Head>
				<title>Ujjwal Kirti | Full-Stack Engineer — AI-native, Distributed Systems</title>
				<meta name="description" content="Ujjwal Kirti — full-stack engineer building AI-native, distributed systems with Next.js, Go, and TypeScript. LLM integration, event-driven backends, and cloud architecture at scale." />
				<meta name="keywords" content="full-stack engineer, LLM integration, distributed systems, Next.js, Go, TypeScript, microservices, cloud architecture, AI-native" />
				<meta name="author" content="Ujjwal Kirti" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="theme-color" content="#f5f5dc" />
				<link rel="canonical" href={url} />

				{/* Open Graph Tags */}
				<meta property="og:title" content="Ujjwal Kirti | Full-Stack Engineer — AI-native, Distributed Systems" />
				<meta property="og:description" content="Full-stack engineer shipping production systems for 100K+ DAUs. Distributed systems, LLM integration, Next.js, Go, TypeScript." />
				<meta property="og:image" content={url + "me.png"} />
				<meta property="og:url" content={url} />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Ujjwal Kirti" />

				{/* Twitter Card Tags */}
				{/* <meta name="twitter:card" content="summary_large_image" /> */}
				{/* <meta name="twitter:title" content="Ujjwal Kirti | Full-Stack Engineer — AI-native, Distributed Systems" /> */}
				{/* <meta name="twitter:description" content="Full-stack engineer shipping production systems for 100K+ DAUs. Distributed systems, LLM integration, Next.js, Go, TypeScript." /> */}
				{/* <meta name="twitter:image" content={url + "me.png"} /> */}

				<link rel="sitemap" type="application/xml" href="/sitemap.xml" />

				{/* Structured Data (JSON-LD) */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Ujjwal Kirti",
							url: url,
							image: url + "me.png",
							sameAs: [linkedin_url, instagram_url, github_url /*, twitter_url */].filter(Boolean),
							jobTitle: "Full-Stack Engineer",
							description: "Full-stack engineer building AI-native, distributed systems at scale.",
							knowsAbout: [
								"Distributed Systems",
								"LLM Integration",
								"Cloud Architecture",
								"TypeScript",
								"Go",
								"Next.js",
								"PostgreSQL",
								"Apache Kafka",
								"AWS",
							],
							alumniOf: {
								"@type": "CollegeOrUniversity",
								name: "Sardar Vallabhbhai National Institute of Technology, Surat",
								url: "https://svnit.ac.in/",
							},
							worksFor: {
								"@type": "Organization",
								name: "Binapani Edu",
								url: "https://binapani.com/",
							},
						}),
					}}
				/>
			</Head>
			<LandingPage />
		</main>
	);
}
