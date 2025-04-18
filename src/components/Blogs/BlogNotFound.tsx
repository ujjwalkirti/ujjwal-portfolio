import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import BackToBlogSection from "./BackToBlogSection";

function BlogNotFound() {
	const style = "cursor-pointer text-center border border-teal-300 p-3 rounded-md";
	return (
		<VStack color={"white"} px={4} alignItems={"start"} w={{ base: "100%", md: "50%" }} mx={"auto"} marginY={{ base: 20, md: 25 }}>
			<BackToBlogSection />

			<Text fontSize={"2xl"} fontWeight={"600"}>
				Sorry, but the blog you are looking for could not be found.
			</Text>

			<Text fontSize={"2xl"} fontWeight={"600"} my={4} mx={"auto"}>
				OR
			</Text>
			<div className="flex flex-col items-center mb-4">
				<p className="text-lg grayish-text text-center">
					Want to contribute? Visit our{" "}
					<a href="https://github.com/ujjwalkirti/blog" className="text-blue-600 hover:text-[#64ffda] underline" target="_blank" rel="noopener noreferrer">
						Blog Repo on GitHub
					</a>{" "}
					to submit your own blog post.
				</p>
			</div>
		</VStack>
	);
}

export default BlogNotFound;
