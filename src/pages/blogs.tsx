import IndividualBlog from "@/components/blogs/IndividualBlog";
import { firamono } from "@/components/data";
import { supabase } from "@/lib/supabaseClient";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <p
          className={
            "text-5xl mb-6 text-center py-3 aqua " + firamono.className
          }
        >
          Blogs
        </p>
        <div className="">
          {blogs.length !== 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:w-4/5 lg:mx-auto">
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
              <form
                onSubmit={addToEmailList}
                className="flex flex-col lg:flex-row items-center justify-center gap-3 my-6"
              >
                <input
                  type="email"
                  required
                  ref={emailRef}
                  className="outline-none px-2 py-2 rounded-md w-full lg:w-1/2 text-black"
                  placeholder="Please enter your email!"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-700 text-xl lg:text-md font-semibold text-center py-1 rounded-md px-2"
                >
                  Notify me!
                </button>
              </form>
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
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Set the base URL here
  });
  let blogs = [];
  const response = await api.get("/api/get-all-blogs");
  blogs = response.data.blogs;

  return {
    props: {
      blogs,
    },
  };
}
