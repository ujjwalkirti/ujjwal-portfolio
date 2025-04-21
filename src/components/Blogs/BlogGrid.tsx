import React from "react";
import { Blog } from "Typings";
import BlogCard from "./BlogCard";

interface BlogGridProps {
	blogs: Blog[];
}

function BlogGrid({ blogs }: BlogGridProps) {
	return (
		<div className="px-3 w-full lg:w-[85%] mx-auto pb-10 h-full">
			{!blogs ||
				(blogs.length === 0 && (
					<div className="flex flex-col items-center grayish-text">
						<p className="text-2xl font-bold text-center mt-12 aqua">No blogs found</p>
						<p className="text-lg  text-center mt-2 mb-8">
							Want to contribute? Visit our{" "}
							<a href="https://github.com/ujjwalkirti/blog" className="text-blue-600 hover:text-[#64ffda] underline" target="_blank" rel="noopener noreferrer">
								Blog Repo on GitHub
							</a>{" "}
							to submit your own blog post.
						</p>
					</div>
				))}
			<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
				{blogs?.map((blog, index) => (
					<BlogCard key={blog.slug + index.toString()} blog={blog} />
				))}
			</div>

			{/* Contribution message when blogs exist */}
			{blogs && blogs.length > 0 && (
				<div className="flex flex-col items-center mt-12 mb-4 border-t pt-8 border-gray-200">
					<p className="text-lg grayish-text text-center">
						Want to contribute? Visit our{" "}
						<a href="https://github.com/ujjwalkirti/blog" className="text-blue-600 hover:text-[#64ffda] underline" target="_blank" rel="noopener noreferrer">
							Blog Repo on GitHub
						</a>{" "}
						to submit your own blog post.
					</p>
				</div>
			)}
		</div>
	);
}

export default BlogGrid;
