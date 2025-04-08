import { Avatar, Box, Button, Container, Flex, Link as ChakraLink, Text, Heading } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { Author } from "Typings";
import BackToBlogSection from "./BackToBlogSection";
import MarkdownContainer from "./MarkdownContainer";
import React from "react";
import { FiArrowUp } from "react-icons/fi";

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
	const [showScrollTop, setShowScrollTop] = React.useState(false);

	const formattedCreated = `Published ${created}`;
	const formattedUpdated = updated !== created ? `Last updated ${updated}` : null;

	React.useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<Container maxW="4xl" className="dark-grayish-text">
			<BackToBlogSection />

			<Heading as="h1" fontSize={["2.2rem", "2.5rem", "3rem"]} fontWeight="bold" lineHeight={1.2} mb={6} className="aqua" fontFamily="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif" letterSpacing="-0.02em">
				{title}
			</Heading>

			<Flex direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "flex-start", md: "center" }} mb={5} wrap="wrap">
				<Flex marginBottom={4} direction={{ base: "column", md: "row" }} align={{ base: "flex-start", md: "center" }} gap={{ base: 0.3, md: 4 }}>
					<Text fontWeight={500}>{formattedCreated}</Text>
					{formattedUpdated && (
						<>
							<Text mx={1}>•</Text>
							<Text fontStyle="italic">{formattedUpdated}</Text>
						</>
					)}
				</Flex>

				<Button href={`https://github.com/ujjwalkirti/blog/blob/main/blogs/${slug}/content.md`} as="a" rel="noopener noreferrer" target="_blank" leftIcon={<FaGithub />} size="sm" colorScheme="teal" fontSize="0.825rem">
					View on GitHub
				</Button>
			</Flex>

			<Flex flexWrap="wrap" mb={6} gap={4}>
				{authors.map((author) => (
					<ChakraLink key={author.name} href={author.profile} isExternal _hover={{ textDecoration: "none" }}>
						<Flex align="center">
							{author.avatar ? <Avatar src={author.avatar} name={author.name} w="38px" h="38px" mr={3} /> : <Avatar {...stringAvatar(author.name)} w="38px" h="38px" mr={3} />}
							<Text className="author-name" fontWeight={500} transition="color 0.2s">
								{author.name}
							</Text>
						</Flex>
					</ChakraLink>
				))}
			</Flex>

			{description && (
				<Box fontSize="1.15rem" fontWeight={400} lineHeight="1.5" mb={6} p={5} bg="#f8fafc" borderLeft="4px solid #0ea5e9" borderRadius="8px">
					{description}
				</Box>
			)}

			<MarkdownContainer markdown={markdown} branch={branch} />

			{showScrollTop && <IconButton icon={<FiArrowUp />} aria-label="Scroll to top" position="fixed" bottom="30px" right="30px" zIndex={1000} colorScheme="teal" borderRadius="full" size="lg" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />}
		</Container>
	);
}

export default DisplayBlog;
