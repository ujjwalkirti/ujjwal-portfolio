import Head from "next/head";
import BlogGrid from "@/components/Blogs/BlogGrid";
import React from "react";
import { Blog } from "Typings";
import { url, github_url, instagram_url, linkedin_url, twitter_url } from "@/constants/urls";
import BlogHeader from "@/components/Blogs/BlogHeader";

function Blogs({ blogs }: { blogs: Blog[] }) {
	return (
		<main className="min-h-screen">
			<Head>
				<title>Ujjwal Kirti | DevOps Blogs</title>
				<meta name="description" content="Explore technical blogs by Ujjwal Kirti on DevOps, Kubernetes, CI/CD, and cloud-native tools." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/UK.png" />

				{/* Open Graph Tags */}
				<meta property="og:title" content="Ujjwal Kirti | DevOps Blogs" />
				<meta property="og:description" content="Technical insights and tutorials on DevOps, Kubernetes, CI/CD, and more from Ujjwal Kirti." />
				<meta property="og:image" content={url + "me.png"} />
				<meta property="og:url" content={url + "blogs"} />
				<meta property="og:type" content="website" />

				{/* Twitter Card Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Ujjwal Kirti | DevOps Blogs" />
				<meta name="twitter:description" content="Explore DevOps tutorials and insights by Ujjwal Kirti on Kubernetes, CI/CD, and infrastructure." />
				<meta name="twitter:image" content={url + "me.png"} />

				{/* Structured Data (JSON-LD) */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Blog",
							name: "Ujjwal Kirti's DevOps Blog",
							url: url + "blogs",
							image: url + "me.png",
							author: {
								"@type": "Person",
								name: "Ujjwal Kirti",
								url: url,
								sameAs: [linkedin_url, instagram_url, github_url, twitter_url],
								jobTitle: "DevOps Engineer",
							},
							description: "A collection of technical blogs on DevOps, automation, Kubernetes, CI/CD, and cloud-native tooling.",
						}),
					}}
				/>
			</Head>
			<section className="h-full" aria-label="Blog Page">
				<BlogHeader />
				<BlogGrid blogs={blogs} />
			</section>
		</main>
	);
}

export default Blogs;

export async function getServerSideProps() {
	let blogs: Blog[] = [];

	const baseUrl = process.env.NEXT_PUBLIC_DOMAIN || "https://ujjwal-portfolio-flame.vercel.app";

	const fetchBlogs = async () => {
		try {
			const response = await fetch(`${baseUrl}/api/blog/get-all-blogs`);
			const data = await response.json();
			blogs = data;
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};
	await fetchBlogs();
	return { props: { blogs } };
}
