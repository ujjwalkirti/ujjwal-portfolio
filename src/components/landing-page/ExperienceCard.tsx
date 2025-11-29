import { Box, Flex, Heading, Link as ChakraLink, List, ListItem, Stack, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { LuExternalLink } from "react-icons/lu";
import { Experience } from "Typings";

interface ExperienceCardProps {
	exp: Experience;
}

function ExperienceCard({ exp }: ExperienceCardProps) {
	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<Box as="li" mb={12} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<Flex p={4} borderRadius="md" position="relative" direction={{ base: "column", sm: "row" }} justify="space-between" transition="all 0.2s">
				{/* Date */}
				<Text color="gray.500" fontSize="xs" fontWeight="semibold" textTransform="uppercase" flexShrink={0} w={{ sm: "20%" }}>
					{exp.date}
				</Text>

				{/* Content */}
				<Box w={{ sm: "75%" }}>
					{/* Title + Company */}
					<ChakraLink as={Link} href={exp.website} target="_blank" rel="noopener noreferrer" aria-label={exp.title} title={exp.title} _hover={{ textDecoration: "none" }}>
						<Heading as="h3" size="lg" color={isHovered ? "teal.300" : "gray.200"} transition="color 0.2s" display="flex" alignItems="center">
							{exp.title} · {exp.company}
							{exp.website && (
								<ChakraLink as={Link} href={exp.website} ml={2} color="teal.300">
									<LuExternalLink />
								</ChakraLink>
							)}
						</Heading>
					</ChakraLink>

					{/* Description */}
					<List spacing={2} mt={3} fontSize="sm" color={isHovered ? "gray.300" : "gray.400"}>
						{exp.description.map((desc, i) => (
							<ListItem key={i} pl={4} style={{ listStyleType: "disc" }}>
								<Text as="span">
									{desc.description}{" "}
									{desc.links && desc.links.length > 0 && (
										<>
											{desc.links.map((link, idx) => (
												<ChakraLink as={Link} key={idx} href={link} target="_blank" rel="noopener noreferrer" aria-label={link} title={link} ml={1} color="teal.300" fontWeight="medium" _hover={{ textDecoration: "underline" }}>
													[Link {idx + 1}]
												</ChakraLink>
											))}
										</>
									)}
								</Text>
							</ListItem>
						))}
					</List>

					{/* Technologies */}
					<Stack direction="row" wrap="wrap" mt={3} spacing={2}>
						{exp.technologies.map((tech, idx) => (
							<Tag key={tech + idx} size="sm" colorScheme="teal.400" variant="subtle" bg="teal.400">
								{tech}
							</Tag>
						))}
					</Stack>
				</Box>
			</Flex>
		</Box>
	);
}

export default ExperienceCard;
