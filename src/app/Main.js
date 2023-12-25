"use client";
import Image from "next/image";
import { useEffect } from "react";
import heroBackground from "./images/history.jpg";
import servicesBackground from "./images/services.jpg";
import Timeline from "./Timeline";
import Contact from "./Contact";
import Client from "./Client";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="lg:pt-[50px] pt-[20px] bg-[#fff]" id="about">
      <div className="md:grid grid-it gap-[70px]  px-[100px] " >
        <div className="pt-[-20px] " data-aos="fade-left">
          <h2 className="text-black lg:text-[50px] lg:text-left text-[35px] text-center font-bold">
            OUR HISTORY
          </h2>
          <p className="text-[#252627] p-[20px] lg:text-[18px] text-[16px] text-center">
            For 25 years, Delsoft Limited has been Lagos' tech pioneer, crafting
            software solutions and AI marvels that push boundaries. Imagine, not
            just coding, but breathing life into digital dreams, where
            algorithms dance and machines learn, shaping the future, one line of
            code at a time. We're not just tech geeks, we're Lagos' innovation
            alchemists, transforming ideas into reality. From software
            applications and banking bots to healthcare heroes, our software and
            AI creations are making waves, one megabyte at a time. We’ve got
            your technology solutions covered.
          </p>
        </div>
        <div className="flex justify-center w-[100%]">
          <Image
            src={heroBackground}
            className="rounded-[20px] md:h-[400px] lg:h-[600px] md:w-[800px] w-[160%]"
            data-aos="fade-right"
          />
        </div>
      </div>
      <div   id="services"></div>

      <h2
        className="text-[40px] mt-[170px] text-black font-bold text-center dash"
        id="services"
      >
        Services
      </h2>
      <div className="md:grid grid-it gap-[70px]  px-[100px]">
        <div data-aos="zoom-in" className=" pt-[50px]">
          <Image
            src={servicesBackground}
            className="rounded-[20px] lg:h-[600px] md:h-[400px] md:w-[700px] w-[80%]"
          />
        </div>
        <div className="flex justify-between w-[100%] " data-aos="zoom-in">
          <Timeline />
        </div>
      </div>
      <div id="portfolio"></div>
      <div id="portfolio" className="mt-[170px]">
        <h2 className="text-center text-[40px] dash text-black font-bold">
          Our Clients
        </h2>
        <p className="text-center ">Below are some of our clients</p>
        <Client />
      </div>
      <div   id="contact"></div>
      <div className="pb-[100px] mt-[170px]" id="contact">
        <h2 className="text-center text-[40px] dash text-black font-bold">
          Contact Us
        </h2>
        <Contact />
      </div>
    </div>
  );
};

export default Main;
