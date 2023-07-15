import { Fira_Mono } from "@next/font/google";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

interface Repository {
  name: String;
  owner: {
    avatar_url: string;
  };
  homepage: String;
  svn_url: String;
}

const firamono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const iconsStyle = "hover:text-[#64ffda] cursor-pointer";

function ViewTheArchive({ repos }) {
  return (
    <div className="bg-[#0a192f] min-h-screen">
      <Head>
        <title>Collection of my works!</title>
        <meta
          name="description"
          content="Page providing a glimpse into all of the coding work Ujjwal has been doing!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/UK.png" />
      </Head>
      <div className="w-[90%] lg:w-[78%] mx-auto pt-[40px]">
        <Link href={`/`}>
          {" "}
          <IoIosArrowBack className="bg-white text-2xl rounded-full hover:bg-[#64ffda] cursor-pointer" />
        </Link>
        <p className="grayish-text text-start font-semibold py-4 text-[50px] lg:mt-[60px]">
          Archive
        </p>
        <p className={"aqua lg:mb-[60px] " + firamono.className}>
          A big list of things I have worked on!
        </p>
        {repos.length !== 0 && (
          <div
            className={
              "grid grid-cols-1 gap-2 lg:grid-cols-2 " + firamono.className
            }
          >
            {repos.map((repo: Repository, index: number) => {
              return (
                <div
                  key={index}
                  className="grayish-text shadow-xl px-2 lg:w-[92%] lg:mx-auto py-4 flex flex-col lg:flex-row lg:items-center justify-between hover:bg-[#233554]"
                >
                  <p className=" my-3">{repo.name}</p>
                  <div className="flex justify-center gap-3 text-2xl">
                    <Link href={`${repo.svn_url}`}>
                      <AiOutlineGithub className={iconsStyle} />
                    </Link>
                    {repo.homepage && (
                      <Link href={`${repo.homepage}`}>
                        <AiOutlineLink className={iconsStyle} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewTheArchive;

export async function getServerSideProps() {
  let repos = [];
  await axios
    .get("https://api.github.com/users/ujjwalkirti/repos")
    .then((res) => {
      repos = res.data;
    })
    .catch((err) => {});
  return { props: { repos } };
}
