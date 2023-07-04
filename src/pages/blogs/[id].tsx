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

type props = {
  id: string;
  server_comments: Blog_Comment[];
};

const ReadBlog = ({ id, server_comments }: props) => {
  const [comments, setComments] = useState(server_comments);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [blog, setBlog] = useState<any>({});
  const commentRef = useRef(null);
  const usernameRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    async function fetchBlogFromId(id: string) {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id);

      if (error) {
        setBlog(null);
      }
      setBlog(data[0]);
    }
    fetchBlogFromId(id).then(() => {
      setIsLoaded(true);
    });
  }, []);
  async function addComment(e: any) {
    e.preventDefault();
    const commentData = {
      table_id: blog.id,
      author: usernameRef.current.value,
      content: commentRef.current.value,
    };
    const { data, error } = await supabase.from("comments").insert(commentData);

    if (error) {
      toast.error("Something went wrong, please try again!");
      return null;
    }

    toast.success("Comment added successfully!");
    return data;
  }

  const parsedDate = moment(blog.created_at, "YYYY-MM-DDTHH:mm:ssZ");

  const handleScrollToTitle = () => {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={"bg-[#0a192f] min-h-screen " + monsterrat.className}>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <div className="text-white px-2 pt-10 flex flex-col items-center gap-3 lg:w-10/12 lg:mx-auto">
        <Link href={`/blogs`} className="w-full">
          {" "}
          <IoIosArrowBack className="bg-white text-2xl rounded-full hover:bg-[#64ffda] cursor-pointer text-[#0a192f] ml-3 mb-6" />
        </Link>
        {isLoaded ? (
          <div className="px-2 pt-10 flex flex-col items-center gap-3">
            {" "}
            <p
              ref={titleRef}
              className={
                "aqua text-3xl text-center font-semibold " +
                libre_caslon_text.className
              }
            >
              {blog.title}
            </p>
            <div className="w-full flex flex-col items-end">
              <p className="text-xl">~ {blog.author}</p>
              <p className="text-sm">{parsedDate.format("MMM DD, YYYY")}</p>
            </div>
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
              className="text-justify px-2 lg:text-lg w-full md:w-11/12 lg:w-4/5"
            ></p>
            {/* upvotes and downvotes */}
            <div></div>
            {/* Comments section */}
            <div className="w-full">
              <hr />
              <p
                className={
                  "my-2 text-2xl font-semibold aqua " +
                  libre_caslon_text.className
                }
              >
                Comments
              </p>
              <div className="flex flex-col gap-3">
                {comments &&
                  comments.map((comment: Blog_Comment, index) => (
                    <div
                      key={index}
                      className="bg-[#112240] rounded-md px-1 py-2"
                    >
                      <p className="italic">
                        <span className="font-semibold">{comment.author}</span>{" "}
                        says
                      </p>
                      <p className="px-2">~ {comment.content}</p>
                    </div>
                  ))}
              </div>
              <form
                onSubmit={async (event) => {
                  const client_comments = await addComment(event);
                  setComments(client_comments);
                }}
                className=" bg-[#112240] flex flex-col gap-3 my-3 px-2 py-2 text-black"
              >
                <textarea
                  ref={commentRef}
                  className="h-56 px-2 py-2 outline-none bg-[#0a192f] text-white"
                  placeholder="Please Enter your comment here!"
                ></textarea>
                <input
                  type="text"
                  ref={usernameRef}
                  className="px-2 py-2 outline-none bg-[#0a192f] text-white"
                  required
                  placeholder="Enter your name"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white text-xl font-semibold w-1/2 text-center py-2 rounded-md mx-auto"
                >
                  Add Comment!
                </button>
              </form>
              <hr className="mt-2" />
            </div>
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
        ) : (
          <Box padding="6" boxShadow="lg" className="w-full">
            <Skeleton m={"15"} height={"100px"} />
            <SkeletonCircle size="10" />
            <SkeletonText
              mt="4"
              noOfLines={10}
              spacing="4"
              skeletonHeight="2"
            />
          </Box>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ReadBlog;

export async function getServerSideProps(context: any) {
  const table_id = context.query.id;
  console.log(context.query);

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
        id: table_id,
        server_comments: null,
      },
    };
  }

  return {
    props: {
      id: table_id,
      server_comments: data,
    },
  };
}
