"use client";
import Image from "next/image";
import { useEffect } from "react";
import heroBackground from "./images/history.jpg";
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
    <div className="lg:pt-[50px] pt-[70px] bg-[#fff]">
      <div
        className="md:grid  grid-it gap-[70px]  px-[50px] lg:p-[40px] flex flex-col-reverse justify-center items-center"
        id="about"
      >
        <div className="pt-[40px]" data-aos="fade-left">
          <h2 className="text-black lg:text-[50px] lg:text-left text-[35px] text-center font-bold">
            OUR HISTORY
          </h2>
          <p className="text-[#252627] p-[20px] lg:text-[18px] text-[16px] text-center">
            For the past 20 years Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Temporibus omnis fuga harum nisi nobis libero,
            cumque optio unde corrupti dolorum, a tempore soluta saepe quisquam
            doloribus quos aut perferendis quasi incidunt laudantium excepturi
            dolorem! Consectetur praesentium iste explicabo totam nemo. Iusto
            ipsam nulla, doloribus quia ullam eos optio repellendus at. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Temporibus omnis
            fuga harum nisi nobis libero, cumque optio unde corrupti dolorum, a
            tempore soluta saepe quisquam doloribus quos aut perferendis quasi
            incidunt laudantium excepturi dolorem! Consectetur praesentium iste
            explicabo totam nemo. Iusto ipsam nulla, doloribus quia ullam eos
            optio repellendus at
          </p>
        </div>
        <div className="flex justify-center w-[100%]">
          <Image
            src={heroBackground}
            className="rounded-[20px] md:h-[400px] lg:h-[600px] md:w-[800px] w-[160%]"
            // data-aos="fade-right"
          />
        </div>
      </div>

      <h2
        className="text-[40px] mt-[170px] text-black font-bold text-center dash"
        id="services"
      >
        Services
      </h2>
      <div className=" md:grid grid-it-2 gap-[30px] lg:px-[50px] p-[20px] lg:p-[50px] flex flex-col items-center">
        <div data-aos="zoom-in" className="flex w-[100%]">
          <Image
            src={heroBackground}
            className="rounded-[20px] lg:h-[600px] md:h-[400px] md:w-[700px] w-[80%]"
          />
        </div>
        <div className="flex justify-between w-[100%] " data-aos="zoom-in">
          <Timeline />
        </div>
      </div>

      <div id="portfolio">
        <h2 className="text-center text-[40px] dash text-black font-bold">
          Our Clients
        </h2>
        <p className="text-center ">Below are some of our clients</p>
        <Client />
      </div>

      <div className="pb-[100px]" id="contact">
        <h2 className="text-center text-[40px] dash text-black font-bold">Contact Us</h2>
        <Contact />
      </div>
    </div>
  );
};

export default Main;
