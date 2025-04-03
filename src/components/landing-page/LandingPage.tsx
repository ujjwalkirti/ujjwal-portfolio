import GetInTouch from "./GetInTouch";
import Footer from "../Footer";
import { inter } from "../../constants/data";
import { firamono } from "@/constants/data";
import Header from "./Header";
import AboutMe from "./AboutMe";
import WorkSection from "./WorkSection";
import Navbar from "../Navbar";
import ExperienceSection from "./ExperienceSection";

const LandingPage = () => {
  return (
    <section className=" min-h-screen">
      {/* Navbar section */}
      <Navbar />

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
