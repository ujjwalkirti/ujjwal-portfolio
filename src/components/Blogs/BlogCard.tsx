import React from "react";
import { Box, Image, Text, Link as ChakraLink, Flex, Tag, IconButton, Tooltip, useDisclosure } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaShareAlt } from "react-icons/fa";
import { Blog } from "Typings";
import ShareBlogDialog from "./ShareBlogDialog";

interface BlogCardProps {
	blog: Blog;
}

function BlogCard({ blog }: BlogCardProps) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const firstAuthor = blog.authors[0];

	return (
		<Box
			position="relative"
			borderRadius="lg"
			border="1px solid rgba(0,0,0,0.06)"
			overflow="hidden"
			transition="all 0.3s ease"
			display="flex"
			flexDirection="column"
			h="100%"
			_hover={{
				transform: "translateY(-4px)",
				boxShadow: "0 8px 16px rgba(0, 0, 0, 0.12)",
				".description-overlay": {
					opacity: 1,
					transform: "translateY(0)",
				},
			}}
			className="-inset-x-4 -inset-y-4 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:bg-slate-800/50 lg:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:drop-shadow-lg"
		>
			{/* Image */}
			<ChakraLink as={NextLink} href={`/blog/${blog.slug}`} _hover={{ textDecoration: "none" }}>
				<Image src={blog.image} alt={`${blog.title} image`} objectFit="cover" w="100%" h="180px" transition="transform 0.5s ease" _hover={{ transform: "scale(1.05)" }} />
			</ChakraLink>

			{/* Content */}
			<Box p={4} display="flex" flexDirection="column" flexGrow={1}>
				<ChakraLink as={NextLink} href={`/blog/${blog.slug}`} _hover={{ textDecoration: "none" }}>
					<Text fontWeight="bold" mb={3} fontSize="lg" lineHeight="short" className="aqua" noOfLines={2} fontFamily="'Inter', 'Roboto', sans-serif" _hover={{ color: "#21bdfe" }}>
						{blog.title}
					</Text>
				</ChakraLink>

				{/* Metadata */}
				<Flex justify="space-between" align="center" mb={2} mt="auto" className="grayish-text">
					{firstAuthor && (
						<Text fontSize="xs" fontWeight="medium">
							by <span>{firstAuthor.name}</span>
						</Text>
					)}
					<Text fontSize="xs" opacity={0.8}>
						{blog.updated}
					</Text>
				</Flex>

				{/* Tags */}
				<Flex wrap="wrap" gap={2} mt={1}>
					{blog.tags.slice(0, 2).map((tag, index) => (
						<div key={tag + index.toString()} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
							{tag}
						</div>
					))}
					{blog.tags.length > 2 && (
						<Tag size="sm" fontSize="xs" bg="rgba(241, 245, 249, 0.8)" color="#64748b" fontWeight="medium" border="1px solid rgba(100, 116, 139, 0.1)" borderRadius="4px" fontFamily="'Inter', sans-serif">
							+{blog.tags.length - 2}
						</Tag>
					)}
				</Flex>
			</Box>

			{/* Description Overlay */}
			<Box
				className="description-overlay"
				position="absolute"
				bottom="0"
				left="0"
				right="0"
				bg="rgba(255, 255, 255, 0.98)"
				px={4}
				py={3}
				opacity={0}
				transform="translateY(100%)"
				transition="all 0.3s ease"
				backdropFilter="blur(4px)"
				borderTop="1px solid rgba(0,0,0,0.08)"
				boxShadow="0px -2px 10px rgba(0,0,0,0.05)"
			>
				<Text fontSize="sm" mb={3} color="#3A4F6D" lineHeight="1.6" fontFamily="'Inter', sans-serif">
					{blog.description}
				</Text>

				<Flex justify="space-between" align="center">
					<ChakraLink as={NextLink} href={`/blog/${blog.slug}`} fontSize="sm" fontWeight="semibold" className="grayish-text" _hover={{ color: "#64ffda" }} fontFamily="'Inter', sans-serif">
						Read more →
					</ChakraLink>

					<Tooltip label="Share this blog" hasArrow>
						<IconButton
							aria-label="Share this blog"
							icon={<FaShareAlt size={12} />}
							size="sm"
							variant="ghost"
							color="#21bdfe"
							_hover={{ color: "#64ffda", transform: "scale(1.3)" }}
							onClick={(e) => {
								e.stopPropagation();
								onOpen();
							}}
						/>
					</Tooltip>
				</Flex>
			</Box>

			<ShareBlogDialog open={isOpen} handleClose={onClose} slug={blog.slug} />
		</Box>
	);
}

export default BlogCard;
