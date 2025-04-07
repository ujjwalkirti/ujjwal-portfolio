import Head from "next/head";
import LandingPage from "@/components/landing-page/LandingPage";
import { github_url, instagram_url, linkedin_url, twitter_url } from "@/constants/urls";

export default function Home() {
	return (
		<main className="bg-[#0a192f] min-h-screen">
			<Head>
				<title>Ujjwal Kirti | DevOps Engineer Portfolio</title>
				<meta name="description" content="Ujjwal Kirti's portfolio - DevOps Engineer experienced in Kubernetes, CI/CD, AWS, and cloud-native tooling." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/UK.png" />

				{/* Open Graph Tags */}
				<meta property="og:title" content="Ujjwal Kirti | DevOps Engineer Portfolio" />
				<meta property="og:description" content="Portfolio of Ujjwal Kirti, showcasing expertise in DevOps, automation, cloud infrastructure, and CI/CD pipelines." />
				<meta property="og:image" content="https://ujjwal-portfolio-flame.vercel.app/me.png" />
				<meta property="og:url" content="https://ujjwal-portfolio-flame.vercel.app/" />
				<meta property="og:type" content="website" />

				{/* Twitter Card Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Ujjwal Kirti | DevOps Engineer Portfolio" />
				<meta name="twitter:description" content="Check out Ujjwal Kirti’s work in DevOps, including automation, Kubernetes, and scalable infrastructure." />
				<meta name="twitter:image" content="https://ujjwal-portfolio-flame.vercel.app/me.png" />

				{/* Structured Data (JSON-LD) */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Ujjwal Kirti",
							url: "https://ujjwal-portfolio-flame.vercel.app/",
							image: "https://ujjwal-portfolio-flame.vercel.app/me.png",
							sameAs: [linkedin_url, instagram_url, github_url, twitter_url],
							jobTitle: "DevOps Engineer",
							worksFor: {
								"@type": "Organization",
								name: "Binapani Edu",
							},
						}),
					}}
				/>
			</Head>
			<LandingPage />
		</main>
	);
}
