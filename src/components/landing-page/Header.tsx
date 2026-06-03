// import React from "react";
import { pressStart2P } from "../../constants/data";
import Link from "next/link";
// import { linkedin_url } from "@/constants/urls";
// import Image from "next/image";

const Header = () => {
	// const [removeWrapper, setRemoveWrapper] = React.useState(false);

	return (
		<section className="flex lg:flex-row flex-col items-center justify-center px-[15px] lg:px-[100px] lg:w-11/12 mx-auto min-h-[80vh]">
			<div className="flex flex-col justify-start lg:justify-center gap-y-4 items-start pt-[20px] lg:mx-auto w-full  lg:pr-[25px]">
				{" "}
				<p className={"font-normal text-orange-600 text-xs lg:ml-[4px] lg:mb-[2px] " + pressStart2P.className}>👋 Hi, my name is</p>
				<p className={"text-2xl lg:text-3xl font-semibold text-gray-900 my-[2px] " + pressStart2P.className}>Ujjwal Kirti.</p>
				<p className={"text-xl lg:text-base text-gray-600 mt-[5px] font-semibold leading-tight lg:leading-relaxed " + pressStart2P.className}>Full-stack engineer building <span className="underline decoration-2 underline-offset-4">AI-native</span>, distributed systems at scale 🌐</p>
				<div className={"mt-[10px] lg:text-justify text-xs text-gray-600 leading-relaxed " + pressStart2P.className}>
					<p>
						I ship production systems serving <span className="text-orange-600 font-semibold">100K+ DAUs</span>, cut API latency from <span className="text-orange-600 font-semibold">350ms → 80ms</span>, and reduced LLM costs by <span className="text-orange-600 font-semibold">30%</span> through prompt orchestration and caching. <br />
						Currently going deeper on <span className="text-orange-600 font-semibold">distributed systems</span> and <span className="text-orange-600 font-semibold">LLM-powered</span> products.
					</p>
				</div>
				<div className={"mt-[15px] grid grid-cols-3 gap-3 lg:gap-6 w-full lg:w-auto " + pressStart2P.className}>
					<div className="flex flex-col items-start">
						<span className="text-orange-600 text-sm lg:text-base font-bold">100K+</span>
						<span className="text-[10px] lg:text-xs text-gray-600 mt-1">Daily active users</span>
					</div>
					<div className="flex flex-col items-start">
						<span className="text-orange-600 text-sm lg:text-base font-bold">80ms</span>
						<span className="text-[10px] lg:text-xs text-gray-600 mt-1">p99 API latency</span>
					</div>
					<div className="flex flex-col items-start">
						<span className="text-orange-600 text-sm lg:text-base font-bold">-30%</span>
						<span className="text-[10px] lg:text-xs text-gray-600 mt-1">LLM cost reduction</span>
					</div>
				</div>
				<Link href={`mailto:ujjwalkirti2000@gmail.com`} className={"text-orange-600 border border-orange-600 rounded-lg text-xs mt-[30px] py-[10px] px-[18px] hover:bg-orange-50 " + pressStart2P.className}>
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
              className={`h-[279.52px] w-[279.52px] absolute border-2 border-orange-600 top-4   left-4 rounded-lg -z-10 ${removeWrapper
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
