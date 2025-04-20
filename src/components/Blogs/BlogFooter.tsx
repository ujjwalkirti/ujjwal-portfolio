import { Box, Text, Link, Stack } from "@chakra-ui/react";

const BlogFooter = () => {
	return (
		<Box as="footer" py={6} mt={10}>
			<Stack spacing={1} textAlign="center" className="dark-grayish-text">
				<Text fontSize="sm">
					I sincerely apologize if any information in this blog is incorrect or misleading.
				</Text>
				<Text fontSize="sm">If you have suggestions, corrections, or you're facing any issues, feel free to reach out.</Text>
				<Text fontSize="sm">
					Contact me at{" "}
					<Link href="mailto:ujjwalkirti2000@gmail.com" color="teal.400" fontWeight="medium">
						ujjwalkirti2000@gmail.com
					</Link>
				</Text>
			</Stack>
		</Box>
	);
};

export default BlogFooter;
