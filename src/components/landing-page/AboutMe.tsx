import { skillCategories } from "../../constants/data";
import Link from "next/link";

function AboutMe() {
	return (
		<section className={"flex flex-col items-center gap-10 py-10 lg:px-[100px] px-4 mt-10 lg:w-11/12 lg:mx-auto "} id="about">
			<div className="text-gray-600 text-xs lg:text-xs flex flex-col justify-start align-top h-full lg:gap-[20px] w-full">
				<div className="flex">
					<p className="text-gray-900 text-xl font-semibold">
						<span className="text-orange-600 text-xs">01.</span> About Me
					</p>
					<hr className="text-gray-600" />
				</div>
				<div className=" flex flex-col gap-5 lg:h-full text-xs leading-relaxed">
					<p>
						I trained as a civil engineer at SVNIT, then taught myself to code because I wanted to build things people actually use — not analyze structures on paper.
						That outsider path shapes how I work: I obsess over the user-visible outcome, but I also enjoy going deep into the systems underneath.
					</p>
					<p>
						Today I work across the stack — shipping production APIs, designing event-driven backends, and integrating LLMs into real products.
						I&apos;m currently going deeper on <span className="text-orange-600 font-semibold">distributed systems</span>, <span className="text-orange-600 font-semibold">cloud architecture</span>, and the messy, interesting parts of running <span className="text-orange-600 font-semibold">LLM-powered features</span> at scale (cost, latency, evals, guardrails).
					</p>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
						<div className="rounded-lg border border-gray-200 p-4 bg-gray-50/50">
							<p className="text-xs font-bold text-orange-600 mb-2">Education</p>
							<ul className="list-none space-y-1">
								<li>
									<span className="text-gray-900 font-semibold">B.Tech, Civil Engineering</span>
								</li>
								<li>
									National Institute of Technology, Surat (SVNIT){" "}
									<Link className="text-orange-600 hover:underline" href={`https://svnit.ac.in/`}>
										link
									</Link>
								</li>
								<li>2019 — 2023</li>
							</ul>
						</div>
						<div className="rounded-lg border border-gray-200 p-4 bg-gray-50/50">
							<p className="text-xs font-bold text-orange-600 mb-2">Recent Achievement</p>
							<ul className="list-none space-y-1">
								<li>
									<span className="text-gray-900 font-semibold">GATE 2025 — AIR 3743</span>
								</li>
								<li>Top 6% among 60,000+ candidates</li>
								<li>Computer Science &amp; Information Technology</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full">
				<p className="text-gray-900 text-base font-semibold mb-4">Tech stack</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{skillCategories.map((cat) => (
						<div key={cat.label} className="rounded-lg border border-gray-200 p-4 bg-gray-50/50">
							<p className="text-xs font-bold text-orange-600 mb-2">{cat.label}</p>
							<div className="flex flex-wrap gap-1.5">
								{cat.items.map((item) => (
									<span key={item} className="rounded-full bg-orange-50 px-2 py-1 text-[11px] font-medium leading-5 text-orange-600">
										{item}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
