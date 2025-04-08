import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

function BackToBlogSection() {
	return (
		<Box sx={{ pt: 4, pb: 2 }}>
			<Link href="/blogs" style={{ textDecoration: "none" }}>
				<Button leftIcon={<IoArrowBack />} colorScheme="teal">
					<span className="hidden md:inline">Back to blogs</span>
				</Button>
			</Link>
		</Box>
	);
}

export default BackToBlogSection;
