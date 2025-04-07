import { Avatar, Box, Button, Container, Flex, Link as ChakraLink, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Author } from "Typings";
import BackToBlogSection from "./BackToBlogSection";
import MarkdownContainer from "./MarkdownContainer";

interface DisplayBlogProps {
	title: string;
	authors: Author[];
	created: string;
	updated: string;
	markdown: string;
	description?: string;
	slug: string;
	branch?: string;
}

function stringToColor(string: string) {
	let hash = 0;
	for (let i = 0; i < string.length; i++) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}
	let color = "#";
	for (let i = 0; i < 3; i++) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}
	return color;
}

function stringAvatar(name: string) {
	return {
		bg: stringToColor(name),
		children: name.split(" ")[0][0].toUpperCase(),
	};
}

function DisplayBlog({ title, authors, created, updated, markdown, description, slug, branch }: DisplayBlogProps) {
	const formattedCreated = `Published ${created}`;
	const formattedUpdated = updated !== created ? `Last updated ${updated}` : null;

	return (
		<Container maxW="4xl" pb={8}>
			<BackToBlogSection />

			<Heading as="h1" fontSize={["2.2rem", "2.5rem", "3rem"]} fontWeight="bold" lineHeight={1.2} mb={6} className="aqua" fontFamily="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif" letterSpacing="-0.02em">
				{title}
			</Heading>

			<Flex justify="space-between" align="center" mb={5} wrap="wrap">
				<Flex align="center" gap={2}>
					<Text color="#64748b" fontWeight={500}>
						{formattedCreated}
					</Text>
					{formattedUpdated && (
						<>
							<Text color="#64748b" mx={1}>
								•
							</Text>
							<Text color="#64748b" fontStyle="italic">
								{formattedUpdated}
							</Text>
						</>
					)}
				</Flex>

				<Link href={`https://github.com/ujjwalkirti/blog/blob/main/blogs/${slug}/content.md`} passHref target="_blank">
					<Button
						as="a"
						leftIcon={<FaGithub />}
						variant="outline"
						size="sm"
						borderColor="#e2e8f0"
						color="#64748b"
						fontSize="0.825rem"
						_hover={{
							borderColor: "#cbd5e1",
							backgroundColor: "#f8fafc",
						}}
					>
						View on GitHub
					</Button>
				</Link>
			</Flex>

			<Flex flexWrap="wrap" mb={6} gap={4}>
				{authors.map((author) => (
					<ChakraLink key={author.name} href={author.profile} isExternal _hover={{ textDecoration: "none" }}>
						<Flex align="center" _hover={{ ".author-name": { color: "#0ea5e9" } }}>
							{author.avatar ? <Avatar src={author.avatar} name={author.name} w="38px" h="38px" mr={3} /> : <Avatar {...stringAvatar(author.name)} w="38px" h="38px" mr={3} />}
							<Text className="author-name" fontWeight={500} color="#334155" transition="color 0.2s">
								{author.name}
							</Text>
						</Flex>
					</ChakraLink>
				))}
			</Flex>

			{description && (
				<Box fontSize="1.15rem" fontWeight={400} lineHeight="1.5" color="#475569" mb={6} p={5} bg="#f8fafc" borderLeft="4px solid #0ea5e9" borderRadius="8px">
					{description}
				</Box>
			)}

			<MarkdownContainer markdown={markdown} branch={branch} />
		</Container>
	);
}

export default DisplayBlog;
