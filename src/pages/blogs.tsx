import IndividualBlog from "@/components/blogs/IndividualBlog";
import { firamono } from "@/components/data";
import { supabase } from "@/lib/supabaseClient";
import { groq } from "next-sanity";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "../../sanity/lib/client";

type props = {
  blogs: Blog[];
};

const Blogs = ({ blogs }: props) => {
  const emailRef = useRef(null);
  async function addToEmailList(e: { preventDefault: () => void }) {
    e.preventDefault();
    const { data, error } = await supabase
      .from("notification_emails")
      .insert({ email: emailRef.current.value });

    if (error) {
      toast.error("Error adding email: " + error.message);
      return null;
    }
    toast.success("Email added successfully!");
    return data;
  }
  return (
    <div className="bg-[#0a192f] min-h-screen grayish-text px-2 py-2 ">
      <Head>
        <title>Blogs - Ujjwal Kirti</title>
        <meta name="description" content="Blogs written by Ujjwal Kirti" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/UK.png" />
      </Head>
      <div className="lg:w-10/12 lg:mx-auto">
        <Link href={`/`}>
          {" "}
          <IoIosArrowBack className="bg-white text-2xl rounded-full hover:bg-[#64ffda] cursor-pointer text-[#0a192f] mt-10 ml-3" />
        </Link>
        <div className="w-full flex flex-col items-center  dark-grayish-text text-md mb-10">
          <Link href={`/`} className="mb-3">
            {" "}
            <Image
              src={"/me.png"}
              height={60}
              width={60}
              className="rounded-full mx-auto"
              alt="Ujjwal Kirti's picture!"
            />
            <p className="mt-3 text-center font-semibold">UJJWAL KIRTI</p>
          </Link>
          <p className="text-center w-4/5 md:w-3/5 mx-auto">
            Crafted websites for{" "}
            <Link className="underline" href={`https://lac-website.vercel.app`}>
              LAC, SVNIT Surat
            </Link>{" "}
            and{" "}
            <Link className="underline" href={"https://mmnct.in"}>
              MMNCT
            </Link>{" "}
            while freelancing and expanding my repertoire.
            <br /> Embracing continual learning, I remain dedicated to creating
            exceptional web experiences. Keep Learning, Keep Growing!
          </p>
        </div>
        <p
          className={
            "text-5xl mb-6 text-center py-3 aqua " + firamono.className
          }
        >
          Blogs
        </p>
        <p className="text-center dark-grayish-text">
          Subscribe to get future posts via email
        </p>
        <form
          onSubmit={addToEmailList}
          className="flex flex-row items-center justify-between mt-2 mb-16 rounded-full border border-gray-700 w-full sm:w-2/3 md:w-1/3  mx-auto"
        >
          <input
            type="email"
            required
            ref={emailRef}
            className="outline-none px-5 grayish-text rounded-full text-black w-full bg-inherit"
            placeholder="Type your email..."
          />
          <button
            type="submit"
            className="bg-gray-300 bg-opacity-30 grayish-text lg:text-md text-center py-1 px-2 rounded-r-full h-full h-10"
          >
            Subscribe
          </button>
        </form>

        <div className="">
          {blogs.length !== 0 ? (
            <div className="w-full px-6">
              {blogs.map((blog, index) => (
                <IndividualBlog blog={blog} key={index} />
              ))}
            </div>
          ) : (
            <div className="bg-[#112240] px-2 py-2 rounded-md">
              <p className="lg:text-center text-white text-xl lg:text-2xl ">
                Sorry, there aren't any blogs published.
                <br />
                Please come back later!
              </p>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Blogs;

export async function getServerSideProps(context: any) {
  const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug, publishedAt,intro
  }`;
  const blogs = await client.fetch(postsQuery);
  return {
    props: {
      blogs,
    },
  };
}
