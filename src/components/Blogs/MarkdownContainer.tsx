import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";
import { Box } from "@chakra-ui/react";

interface MarkdownContainerProps {
	markdown: string;
	branch?: string;
}

function MarkdownContainer({ markdown, branch }: MarkdownContainerProps) {
	return (
		<Box
			className="blog-content"
			sx={{
				// Typography settings
				fontSize: "1.0625rem",
				lineHeight: 1.7,
				fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
				letterSpacing: "0.01em",

				// Headings
				"& h1": {
					fontSize: "2.25rem",
					fontWeight: 700,
					marginTop: "2.5rem",
					marginBottom: "1.5rem",
					lineHeight: 1.2,
				},
				"& h2": {
					fontSize: "1.75rem",
					fontWeight: 700,
					marginTop: "2.25rem",
					marginBottom: "1.25rem",
					lineHeight: 1.3,
					borderBottom: "1px solid #e2e8f0",
					paddingBottom: "0.5rem",
				},
				"& h3": {
					fontSize: "1.375rem",
					fontWeight: 600,
					marginTop: "2rem",
					marginBottom: "1rem",
					lineHeight: 1.4,
				},
				"& h4": {
					fontSize: "1.125rem",
					fontWeight: 600,
					marginTop: "1.75rem",
					marginBottom: "0.75rem",
				},

				// Paragraphs
				"& p": {
					marginBottom: "1.25rem",
					lineHeight: 1.7,
				},

				// Lists
				"& ul, & ol": {
					paddingLeft: "1.5rem",
					marginBottom: "1.5rem",
				},
				"& li": {
					marginBottom: "0.5rem",
				},
				"& li p": {
					marginBottom: "0.75rem",
				},

				// Links
				"& a": {
					textDecoration: "underline",
					textDecorationColor: "#bae6fd",
					textDecorationThickness: "1px",
					textUnderlineOffset: "2px",
					transition: "all 0.2s",
					"&:hover": {
						textDecorationColor: "#0284c7",
					},
				},

				// Blockquotes
				"& blockquote": {
					borderLeft: "4px solid #0ea5e9",
					paddingLeft: "1rem",
					paddingTop: "0.5rem",
					paddingBottom: "0.5rem",
					marginBottom: "1.5rem",
					backgroundColor: "#f1f5f9",
					borderRadius: "0 4px 4px 0",
					fontStyle: "italic",
				},

				// Images
				"& img": {
					maxWidth: "100%",
					height: "auto",
					borderRadius: "6px",
					marginTop: "1.5rem",
					marginBottom: "1.5rem",
					boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
				},

				// Code
				"& code": {
					fontFamily: "'Fira Code', 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
					backgroundColor: "#f1f5f9",
					padding: "0.2em 0.4em",
					borderRadius: "4px",
					fontSize: "0.875em",
					fontWeight: 500,
				},
				"& pre": {
					backgroundColor: "#1e293b",
					padding: "1rem",
					borderRadius: "6px",
					overflowX: "auto",
					marginBottom: "1.5rem",
					marginTop: "1.5rem",
					"& code": {
						backgroundColor: "transparent",
						padding: 0,
						fontSize: "0.875rem",
						fontWeight: 400,
					},
				},

				// Tables
				"& table": {
					width: "100%",
					borderCollapse: "separate",
					borderSpacing: 0,
					marginBottom: "1.5rem",
					marginTop: "1.5rem",
					borderRadius: "6px",
					overflow: "hidden",
					boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
				},
				"& th, & td": {
					border: "1px solid #e2e8f0",
					padding: "0.75rem",
					textAlign: "left",
				},
				"& th": {
					backgroundColor: "#f8fafc",
					fontWeight: 600,
				},
				"& tbody tr:nth-of-type(even)": {
					backgroundColor: "#f8fafc",
				},
			}}
		>
			<MarkdownRenderer markdown={markdown} assetsUrl={`https://raw.githubusercontent.com/ujjwalkirti/blog/${branch}`} />
		</Box>
	);
}

export default MarkdownContainer;
