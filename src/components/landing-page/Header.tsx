import React from "react";
import { firamono, inter } from "../../constants/data";
import Link from "next/link";
import { linkedin_url } from "@/constants/urls";
import Image from "next/image";

const Header = () => {
	const [removeWrapper, setRemoveWrapper] = React.useState(false);

	return (
		<section className="flex lg:flex-row flex-col items-center justify-center px-[15px] lg:px-[100px] lg:w-11/12 mx-auto min-h-[80vh]">
			<div className="flex flex-col justify-start lg:justify-center gap-y-4 items-start pt-[20px] lg:mx-auto w-full  lg:pr-[25px]">
				{" "}
				<p className={"font-normal text-blue-600 text-[16px] lg:ml-[4px] lg:mb-[2px] " + firamono.className}>👋 Hi, my name is</p>
				<p className={"text-[40px] lg:text-[40px] font-semibold text-gray-900 my-[2px] " + inter.className}>Ujjwal Kirti.</p>
				<p className={"text-[40px] lg:text-[22px] text-gray-600 mt-[5px] font-semibold leading-[1.2] lg:leading-none " + inter.className}>I build things for the web.🌐</p>
				<div className={"mt-[10px] lg:text-justify text-[14px] lg:text-[16px] text-gray-600 " + firamono.className}>
					<p>
						I build scalable full-stack applications, design distributed systems, and architect cloud-native solutions for reliability and performance. <br />
						Currently, I'm diving deeper into <span className="text-blue-600 font-semibold">distributed systems</span> and <span className="text-blue-600 font-semibold">Machine Learning</span> to create smarter, more efficient applications.
					</p>
				</div>
				<Link href={`mailto:ujjwalkirti2000@gmail.com`} className={"text-blue-600 border border-blue-600 rounded-lg text-[14px] mt-[30px] py-[10px] px-[18px] hover:bg-blue-50 " + firamono.className}>
					Let's connect!
				</Link>
			</div>
			{/* <div className="flex justify-center lg:items-start relative mt-10 lg:w-2/5">
        <div
          className="relative z-20"
          onMouseEnter={(e) => {
            setRemoveWrapper(!removeWrapper);
          }}
          onMouseLeave={(e) => {
            setRemoveWrapper(!removeWrapper);
          }}
        >
          <div className="relative z-20">
            <Image
              className="rounded-lg w-[279.52px] z-20 h-[279.52px] object-contain"
              alt="Ujjwal Kirti's image"
              src={`/me.png`}
              height={259.52}
              width={259.52}
            />
            <div
              className={`h-[279.52px] w-[279.52px] absolute border-2 border-blue-600 top-4   left-4 rounded-lg -z-10 ${removeWrapper
                ? "-translate-y-2 -translate-x-2 duration-300"
                : "translate-y-2 translate-x-2 duration-300"
                }`}
            ></div>
          </div>
        </div>
      </div> */}
		</section>
	);
};

export default Header;
