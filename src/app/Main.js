"use client";
import Image from "next/image";
import { useEffect } from "react";
import heroBackground from "./images/hero.jpg";
import Timeline from "./Timeline";
import Contact from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="lg:pt-[200px] pt-[70px] bg-[#252627]">
      <div className="md:grid  grid-cols-2 gap-[70px]  px-[30px] lg:p-[40px] lg:px-[150px] flex flex-col-reverse justify-center items-center" id="about">
        <div className="pt-[40px]" data-aos="fade-left">
          <h2 className="text-white lg:text-[50px] lg:text-left text-[35px] text-center font-bold">
            OUR HISTORY
          </h2>
          <p className="text-[#e7e7e7] lg:text-[18px] text-[16px] text-center">
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
            className="rounded-[20px] md:h-[400px] lg:h-[600px] md:w-[500px] w-[80%]"
            data-aos="fade-right"
          />
        </div>
      </div>

      <h2 className="text-[40px] mt-[170px] text-center dash" id="services">Services</h2>
      <div className=" md:grid grid-cols-2 gap-[30px] lg:px-[150px] p-[20px] lg:p-[50px] flex flex-col items-center">
        <div data-aos="zoom-in" className="flex justify-center w-[100%]">
          <Image
            src={heroBackground}
            className="rounded-[20px] lg:h-[600px] md:h-[400px] md:w-[500px] w-[80%] flex justify-center"
          />
        </div>
        <div className="flex justify-start" data-aos="zoom-in">
          <Timeline />
        </div>
      </div>

      <div id="portfolio">
        <h2 className="text-center text-[40px] ">Our Clients</h2>
      </div>

      <div className="pb-[100px]" id="contact">
        <h2 className="text-center text-[40px] dash">Contact Us</h2>
        <Contact />
      </div>
    </div>
  );
};

export default Main;
