"use client"
import heroBackground from "./images/hero.jpg";
import { useEffect } from "react";
import Nav from "./Nav";
import Image from "next/image";
import AOS from 'aos'
import 'aos/dist/aos.css'
const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
}, [])
  return (
    <div
      className=" h-[100vh]"
      id="home"
    >
      <div className="overlay">
          <div className="pl-[20px] lg:pl-[200px] pt-[170px]">
          <h1 data-aos= "zoom-in-left" className="text-[white] text-[35px] lg:text-[60px] lg:w-[550px] font-bold text-left">
            Unleashing Your Infinite potential through technology.
          </h1>
          <button className="bg-[#028fcc] text-white  px-[40px] py-[10px] rounded-[20px]">Talk to us</button>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Hero;
