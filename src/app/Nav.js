"use client";
import { useEffect } from "react";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className={color ? "bg-[#252627]" 
            : ""}>
                <Container className="flex  justify-between" >
                    <Navbar.Brand href="#home" className="active text-[30px] font-bold">Delsoft</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="bg-[#252627] lg:bg-transparent p-[10px]">
                            <Nav.Link href="#home"
                            >Home
                            </Nav.Link>
                            <Nav.Link href="#services"
                            >
                                Services
                            </Nav.Link>
                            <Nav.Link href="#portfolio"
                            >
                                Portfolio
                            </Nav.Link>
                            <Nav.Link href="#about"
                            >
                                About
                            </Nav.Link>
                            <Nav.Link href="#contact"
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
  );
};

export default Navigation;
