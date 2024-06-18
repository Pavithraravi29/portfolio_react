import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";

const Menu = ({ isOpen }) => {
    useEffect(() => {
        if (isOpen) {
            gsap.to(".menu-item", {
                duration: 0.5,
                opacity: 1,
                y: 0,
                stagger: 0.2,
            });
        } else {
            gsap.to(".menu-item", {
                duration: 0.5,
                opacity: 0,
                y: -20,
                stagger: 0.2,
            });
        }
    }, [isOpen]);

    return (
        <div className={`p-4 text-indigo-600 absolute right-11`}>
            <div className="menu-item opacity-0 cursor-pointer" style={{ transform: "translateY(-20px)" }}>
                <Link to="about-section" smooth={true} duration={500}>About</Link>
            </div>
            <div className="menu-item opacity-0 cursor-pointer" style={{ transform: "translateY(-20px)" }}>
                <Link to="skills-section" smooth={true} duration={500}>Skills</Link>
            </div>
            <div className="menu-item opacity-0 cursor-pointer" style={{ transform: "translateY(-20px)" }}>
                <Link to="work-section" smooth={true} duration={500}>Work</Link>
            </div>
            <div className="menu-item opacity-0 cursor-pointer" style={{ transform: "translateY(-20px)" }}>
                <Link to="projects-section" smooth={true} duration={500}>Projects</Link>
            </div>
            <div className="menu-item opacity-0 cursor-pointer" style={{ transform: "translateY(-20px)" }}>
                <Link to="contact-section" smooth={true} duration={500}>Contact Us</Link>
            </div>
        </div>
    );
}

export default Menu;
