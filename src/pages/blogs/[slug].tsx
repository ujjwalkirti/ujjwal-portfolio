import { libre_caslon_text, monsterrat } from "@/components/data";
import moment from "moment";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import { RxPinTop } from "react-icons/rx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetStaticPaths, GetStaticProps } from "next";
import { SanityDocument, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { client } from "../../../sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { TypedObject } from "sanity";

const builder = imageUrlBuilder(client);

type props = {
  blog: Blog;
};

const ReadBlog = ({ blog }: props) => {
  const titleRef = useRef(null);

  function urlFor(source: SanityImageSource) {
    return imageUrlBuilder(client).image(source);
  }

  const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <img
            alt={value.alt || " "}
            loading="lazy"
            src={urlFor(value)
              .width(320)
              .height(240)
              .fit("max")
              .auto("format")
              .url()}
          />
        );
      },
    },
  };

  const handleScrollToTitle = () => {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  };

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

        <div className="px-2  flex flex-col items-center gap-3 w-full">
          {" "}
          <div className="w-full flex flex-col items-center  dark-grayish-text text-md">
            <p className="">
              {moment(blog.publishedAt, "YYYY-MM-DDTHH:mm:ssZ").format(
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
          {blog?.mainImage ? (
            <div className="relative h-56 lg:h-72 w-full lg:w-4/5 lg:mx-auto my-5">
              <Image
                priority
                className="object-cover"
                src={builder.image(blog.mainImage).width(300).height(300).url()}
                fill
                alt={blog?.mainImage?.alt}
              />
            </div>
          ) : null}
          {blog?.body ? (
            <PortableText
              value={blog.body as unknown as TypedObject[]}
              components={ptComponents}
            />
          ) : null}
          {/* upvotes and downvotes */}
          {/* <VotesDisplayer upvotes={blog.upvotes} downvotes={blog.downvotes} /> */}
          {/* Comments section */}
          {/* <CommentsSection comments={comments} blog_id={blog.id.toString()} /> */}
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

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  publishedAt,
  body
}`;

// Prepare Next.js to know which routes already exist
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`
  );

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryParams = { slug: params?.slug ?? `` };

  const post = await client.fetch(postQuery, queryParams);
  console.log(post);

  return {
    props: {
      blog: post,
    },
  };
};
