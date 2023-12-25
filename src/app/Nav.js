"use client";
import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import logo from "./images/logo.png";
import Link from "next/link";
const Navigation = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 50) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  });

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        className={color ? "bg-[#028fcc] mb-[50px]" : "mb-[50px]"}
      >
    
          <Navbar.Brand href="#home" className="active text-[30px] font-bold">
            <Image src={logo.src} width={200} height={100} className="pl-[20px]"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="bg-[#252627] lg:bg-transparent p-[10px]">
              <Nav.Link href="#home" className="text-white">Home</Nav.Link>
              <Nav.Link href="#services" className="text-white">Services</Nav.Link>
              <Nav.Link href="#portfolio" className="text-white">Portfolio</Nav.Link>
              <Nav.Link href="#about" className="text-white">About</Nav.Link>
              <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

      </Navbar>
    </div>
  );
};

export default Navigation;
