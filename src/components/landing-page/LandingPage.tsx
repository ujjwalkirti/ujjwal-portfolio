import GetInTouch from "./GetInTouch";
import { pressStart2P } from "@/constants/data";
import Header from "./Header";
import AboutMe from "./AboutMe";
import WorkSection from "./WorkSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "../Footer";

const LandingPage = () => {
	return (
		<section>
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
				<GetInTouch font={[pressStart2P, pressStart2P]} />
			</div>
			<Footer />
		</section>
	);
};

export default LandingPage;
