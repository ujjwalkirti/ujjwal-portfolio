import GetInTouch from "./GetInTouch";
import { inter } from "../../constants/data";
import { firamono } from "@/constants/data";
import Header from "./Header";
import AboutMe from "./AboutMe";
import WorkSection from "./WorkSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "../Footer";

const LandingPage = () => {
	return (
		<section className={firamono.className}>
			<Header />

			{/*
        This marks the beginning of about section
      */}
			<AboutMe />

			<ExperienceSection />
			{/*
        works section
      */}
			<WorkSection />

			{/* <TechStack /> */}
			<div id="contact">
				<GetInTouch font={[inter, firamono]} />
			</div>
			<Footer />
		</section>
	);
};

export default LandingPage;
