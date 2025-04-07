import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import rehypeRewrite from "rehype-rewrite";
import rehypeHighlight from "rehype-highlight";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "highlight.js/styles/github-dark.css";
import "katex/dist/katex.min.css";
import React, { useEffect, useState } from "react";

interface MarkdownRendererProps {
	markdown: string;
	assetsUrl?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown, assetsUrl }) => {
	const [content, setContent] = useState<string>("");

	useEffect(() => {
		async function processMarkdown() {
			const result = await unified()
				.use(remarkParse)
				.use(remarkMath)
				.use(remarkRehype, { allowDangerousHtml: true })
				.use(rehypeRaw) // Allows raw HTML inside markdown
				.use(rehypeSanitize) // Prevents XSS attacks
				.use(rehypeKatex)
				.use(rehypeHighlight)
				.use(rehypeRewrite, {
					rewrite: (node) => {
						if (node.type === "element" && node.tagName === "img" && node.properties?.src) {
							let src = node.properties.src as string;
							if (!src.startsWith("http")) {
								if (src.startsWith("/blog/")) {
									src = src.replace("/blog/", "");
									node.properties.src = `${assetsUrl}${src}`;
								}
								node.properties.src = `${assetsUrl}/${src}`;
							}
						}

						let firstH2Styled = false;

						if (node.type === "element") {
							if (node.tagName === "ul") {
								node.properties = node.properties || {};
								node.properties.className = [...(Array.isArray(node.properties.className) ? node.properties.className : []), "list-disc", "pl-5", "space-y-2"];
							}

							if (node.tagName === "ol") {
								node.properties = node.properties || {};
								node.properties.className = [...(Array.isArray(node.properties.className) ? node.properties.className : []), "list-decimal", "pl-5", "space-y-2"];
							}

							if (node.tagName === "blockquote") {
								node.properties = node.properties || {};
								node.properties.className = [...(Array.isArray(node.properties.className) ? node.properties.className : []), "border-l-4", "border-gray-400", "pl-4", "py-2", "italic", "text-gray-600"];
							}

							if (node.tagName === "a") {
								node.properties = node.properties || {};
								node.properties.className = [...(Array.isArray(node.properties.className) ? node.properties.className : []), "underline", "text-blue-500", "hover:text-blue-700"];
							}

							if (node.tagName === "h2" && !firstH2Styled) {
								firstH2Styled = true; // Mark first h2 as styled
								node.properties = node.properties || {};
								node.properties.className = [...(Array.isArray(node.properties.className) ? node.properties.className : []), "text-3xl", "font-bold", "mb-4", "mt-6"];
							}

							if (node.tagName === "pre" && Array.isArray(node.children)) {
								node.properties = node.properties || {};
								node.properties.className = [
									...(Array.isArray(node.properties.className) ? node.properties.className : []),
									"relative", // Needed for absolute positioning of the button
									"bg-gray-900",
									"text-white",
									"p-4",
									"rounded-lg",
									"overflow-x-auto",
									"whitespace-pre-wrap",
								];

								// Find the <code> tag inside <pre>
								const codeNode = node.children.find((child) => child.type === "element" && child.tagName === "code");

								// Extract the text from <code>
								let codeContent = "";
								if (codeNode && "children" in codeNode && Array.isArray(codeNode.children)) {
									codeContent = codeNode.children
										.filter((child) => child.type === "text")
										.map((textNode) => textNode.value)
										.join("");
								}

								if (codeContent) {
									node.children.push({
										type: "element",
										tagName: "button",
										properties: {
											className: ["absolute", "top-2", "right-2", "bg-gray-700", "text-white", "p-1", "rounded-md", "hover:bg-gray-600", "transition", "duration-200"],
											onclick: `navigator.clipboard.writeText(${JSON.stringify(codeContent)})`,
											title: "Copy to clipboard",
										},
										children: [
											{
												type: "element",
												tagName: "span",
												properties: {
													className: "flex items-center justify-center",
												},
												children: [
													{
														type: "element",
														tagName: "svg",
														properties: {
															xmlns: "http://www.w3.org/2000/svg",
															fill: "none",
															viewBox: "0 0 24 24",
															strokeWidth: "1.5",
															stroke: "currentColor",
															className: "w-5 h-5",
														},
														children: [
															{
																type: "element",
																tagName: "path",
																properties: {
																	strokeLinecap: "round",
																	strokeLinejoin: "round",
																	d: "M8 7H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-2m-3-9h6m-3-3v6",
																},
															},
														],
													},
												],
											},
										],
									} as any); // Cast as any to avoid TypeScript issues
								}
							}

							if (node.type === "element" && node.tagName === "code") {
								const parentIsPre = node.position?.start.line !== undefined && node.position?.start.line === node.position?.end.line;

								if (parentIsPre) {
									node.properties = node.properties || {};
									node.properties.className = [
										...(Array.isArray(node.properties.className) ? node.properties.className : []),
										"bg-teal-400/10", // Light background
										"px-2", // Small padding
										"py-1", // Small padding
										"rounded-md", // Rounded corners
										"font-mono", // Monospace font
										"text-sm", // Small font size
                                        "text-teal-300"
									];
								}
							}
						}
					},
				})
				.use(rehypeStringify)
				.process(markdown);

			setContent(result.value as string);
		}

		processMarkdown();
	}, [markdown]);

	return <div className="flex flex-col gap-4 grayish-text" dangerouslySetInnerHTML={{ __html: content }} />;
};

export default MarkdownRenderer;
