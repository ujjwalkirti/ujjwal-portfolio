import { Button, Container, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";

function BlogHeader() {
	const keywordClass = "aqua font-bold";
	return (
		<div className="flex flex-col lg:flex-row items-center lg:items-start text-white w-full lg:w-[85%] mx-auto pt-10 px-4">
			<VStack spacing={4} className="w-full lg:w-1/3" alignItems={"start"}>
				<Text fontSize={{ base: "25px", md: "40px" }} fontWeight={"bold"}>
					Ujjwal's Blog
				</Text>
				{/* <div className="flex items-center border border-teal-400 rounded-[20px]">
					<Input
						border="none"
						placeholder="Enter your email"
						type="email"
						_focus={{
							boxShadow: "none",
						}}
					/>

					<Button borderRadius={"20px"} px={6} colorScheme="teal">
						Subscribe
					</Button>
				</div> */}
			</VStack>
			<VStack mx={"auto"} spacing={4} className="w-full sm:w-2/3">
				<Text fontSize={"md"}>I'm glad you're here. This is a space where I document my journey, share lessons I've learned, and write about the things I'm passionate about.</Text>
				<Text fontSize={"md"}>
					You'll mostly find articles on <span className={keywordClass}>web development</span> and <span className={keywordClass}>DevOps</span> — from building full-stack applications to deploying and scaling them efficiently using modern DevOps tools and practices.
				</Text>
				<Text fontSize={"md"}>Whether you're just starting out or already deep in the trenches of development, I hope you find something valuable here.</Text>
			</VStack>
		</div>
	);
}

export default BlogHeader;
