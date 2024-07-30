"use client"

import HeroSection from "./components/home/hero-section/hero_section";
import AboutSection from "./components/home/about/about_section";
import FeaturedCourses from "./components/home/featured_cources/featured_cources";
import ToolsSection from "./components/home/tools-section/tools_section";
import InstructorSection from "./components/home/instructor/instructor_section";

export default function Home() {

  return (
    <div className="w-[100%] min-h-[100%]"
      style={{
        background: 'linear-gradient(to right, rgba(232, 155, 55, 0.2), rgba(60, 139, 242, 0.1))',
      }}>
      <div>
        {/* hero + navbar */}
        <HeroSection />
      </div>
      <br /><br />
      <div className="flex justify-center items-center bg-white" id="about">
        {/* about */}
        <AboutSection />
      </div>

      <div className="w-[100%] flex justify-center items-center h-fit">
        {/* tools section */}
        <ToolsSection />
      </div>

      <br /><br /><br />
      <div className="bg-white w-[100%] h-[35rem]">
        <InstructorSection />
      </div>

      <div className="mt-[3rem]">
        <FeaturedCourses />
      </div>
      <br /><br />
    </div>
  );
}
