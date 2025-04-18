import BlogNotFound from "@/components/Blogs/BlogNotFound";
import DisplayBlog from "@/components/Blogs/DisplayBlog";
import Head from "next/head";
import React from "react";
import { IndividualBlog } from "Typings";

const baseUrl = process.env.NEXT_PUBLIC_DOMAIN || "https://ujjwal-portfolio-flame.vercel.app";

function generateArticleSchema(blog: IndividualBlog, slug: string | string[] | undefined) {
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `${baseUrl}/blogs/${slug}`,
		},
		headline: blog.title,
		description: blog.description.slice(0, 160),
		image: blog.thumbnail || `${baseUrl}/me.png`,
		author: {
			"@type": "Person",
			name: "Ujjwal Kirti",
			url: baseUrl,
		},
		publisher: {
			"@type": "Organization",
			name: "Ujjwal Kirti",
			logo: {
				"@type": "ImageObject",
				url: `${baseUrl}/UK.png`,
			},
		},
		datePublished: blog.created,
		dateModified: blog.updated || blog.created,
	};
}

function IndividualBlogPage({ blog, slug }: { blog: IndividualBlog; slug: string }) {
	return (
		<main className="relative pb-6 w-full min-h-[80vh]" role="main" aria-label="Blog Post">
			{blog ? (
				<>
					<Head>
						<title>{`${blog.title} | Ujjwal Kirti`}</title>
						<meta name="description" content={blog.description.slice(0, 160)} />
						<meta name="viewport" content="width=device-width, initial-scale=1" />
						<link rel="icon" href="/UK.png" />

						{/* key words */}
						<meta name="keywords" content={blog.tags.join(", ")} />

						{/* Open Graph */}
						<meta property="og:title" content={blog.title} />
						<meta property="og:description" content={blog.description.slice(0, 160)} />
						<meta property="og:image" content={blog.thumbnail || `${baseUrl}/me.png`} />
						<meta property="og:url" content={`${baseUrl}/blogs/${slug}`} />
						<meta property="og:type" content="article" />

						{/* Twitter Card */}
						<meta name="twitter:card" content="summary_large_image" />
						<meta name="twitter:title" content={blog.title} />
						<meta name="twitter:description" content={blog.description.slice(0, 160)} />
						<meta name="twitter:image" content={blog.thumbnail || `${baseUrl}/me.png`} />

						{/* Structured Data */}
						<script
							type="application/ld+json"
							dangerouslySetInnerHTML={{
								__html: JSON.stringify(generateArticleSchema(blog, slug)),
							}}
						/>
					</Head>

					<DisplayBlog {...blog} slug={slug as string} />
				</>
			) : (
				<BlogNotFound />
			)}
		</main>
	);
}

export default IndividualBlogPage;

export async function getServerSideProps(context) {
	const { slug } = context.query;
	let blog: IndividualBlog | null = null;

	if (!slug) return { props: { blog } };

	const baseUrl = process.env.NEXT_PUBLIC_DOMAIN || "https://ujjwal-portfolio-flame.vercel.app";

	try {
		const response = await fetch(`${baseUrl}/api/blog/get-individual-blog`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ slug }),
		});
		const data = await response.json();
		blog = data;
	} catch (error) {
		console.error("Error fetching blog:", error);
	}

	return { props: { blog, slug } };
}
