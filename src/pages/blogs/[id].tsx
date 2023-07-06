import { libre_caslon_text, monsterrat } from "@/components/data";
import { supabase } from "@/lib/supabaseClient";
import moment from "moment";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import { RxPinTop } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import CommentsSection from "@/components/blogs/CommentsSection";
import VotesDisplayer from "@/components/blogs/VotesDisplayer";
import { NextPageContext } from "next";

type props = {
  blog: Blog;
  server_comments: Blog_Comment[];
};

const ReadBlog = ({ blog, server_comments }: props) => {
  const [comments, setComments] = useState(server_comments);
  const titleRef = useRef(null);

  useEffect(() => {
    const channel = supabase
      .channel("realtime posts")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "comments",
        },
        (payload: { new: Blog_Comment }) => {
          setComments((comments) => [payload.new, ...comments]);
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  const handleScrollToTitle = () => {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  };
  if (!blog)
    return (
      <div className={"bg-[#0a192f] min-h-screen " + monsterrat.className}>
        <Head>
          <title>Blogs</title>
          <meta
            name="description"
            content="Blog written by Ujjwal Kirti, where he shares his experiences during his journey as Web Developer"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/UK.png" />
        </Head>
        <Box padding="6" boxShadow="lg" className="w-full">
          <Skeleton m={"15"} height={"100px"} />
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={10} spacing="4" skeletonHeight="4" />
        </Box>
      </div>
    );

  return (
    <div className={"bg-[#0a192f] min-h-screen " + monsterrat.className}>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.intro} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/UK.png" />
      </Head>
      <div className="text-white px-2 pt-10 flex flex-col items-center gap-3 lg:w-10/12 lg:mx-auto">
        <Link href={`/blogs`} className="w-full">
          {" "}
          <IoIosArrowBack className="bg-white text-2xl rounded-full hover:bg-[#64ffda] cursor-pointer text-[#0a192f] ml-3 mb-6" />
        </Link>

        <div className="px-2  flex flex-col items-center gap-3">
          {" "}
          <div className="w-full flex flex-col items-center  dark-grayish-text text-md">
            <p className="">
              {moment(blog.created_at, "YYYY-MM-DDTHH:mm:ssZ").format(
                "MMM DD, YYYY"
              )}
            </p>
          </div>
          <p
            ref={titleRef}
            className={
              "aqua text-3xl lg:text-4xl text-center font-semibold my-4 " +
              libre_caslon_text.className
            }
          >
            {blog.title}
          </p>
          <div className="relative h-56 lg:h-72 w-full lg:w-4/5 lg:mx-auto my-5">
            <Image
              src={blog.img_url}
              alt="the blog's image"
              fill
              priority
              className="object-cover"
            />
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="text-justify px-2 text-sm w-full md:w-11/12 lg:w-4/5 grayish-text"
          ></p>
          {/* upvotes and downvotes */}
          {/* <VotesDisplayer upvotes={blog.upvotes} downvotes={blog.downvotes} /> */}
          {/* Comments section */}
          <CommentsSection comments={comments} blog_id={blog.id.toString()} />
          <button
            onClick={() => {
              handleScrollToTitle();
            }}
            className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white text-xl font-semibold w-2/3 lg:w-1/4 text-center py-2 rounded-md flex items-center justify-center gap-3"
          >
            Go back to top! <RxPinTop />
          </button>
          <div className="text-3xl flex">
            {" "}
            <GoPrimitiveDot />
            <GoPrimitiveDot />
            <GoPrimitiveDot />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ReadBlog;

async function fetchBlogFromId(id: string) {
  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id);

  if (error) {
    return null;
  }
  return posts;
}

export async function getServerSideProps(context: NextPageContext) {
  const table_id = context.query.id;

  let blogs = await fetchBlogFromId(table_id as string);

  // Fetch data from Supabase
  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("table_id", table_id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        blog: blogs.length === 0 ? null : blogs[0],
        server_comments: null,
      },
    };
  }

  return {
    props: {
      blog: blogs.length === 0 ? null : blogs[0],
      server_comments: data,
    },
  };
}
