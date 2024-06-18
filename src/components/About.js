import React, { useState } from "react";
import profilePic from '../IMG_2466.jpg';
import Menu from "./Menu";

const About = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="grid grid-cols-5 min-h-screen">
             

            <div id="about-section" className="col-span-3 bg-indigo-600 text-lime-200 p-10 flex flex-col justify-center text-left">
                <h1 className="text-5xl font-bold" style={{ fontFamily: "inherit" }}>Hi, I am Pavithra Ravi 👋 <br></br>I Code & Design Things!</h1>
                <div className="mt-20 space-y-4" style={{ fontFamily: "cursive" }}>
                    <p>I am an aspiring Full Stack developer with a passion for creating efficient and user-friendly applications.</p>
                    <p>I thrive on solving complex problems and continuous learning new technologies. With foundational knowledge in both front-end and back-end technologies, I possess the expertise to craft seamless user experiences and efficient server-side functionalities</p>
                </div>
            </div>

            <div className="col-span-2 bg-lime-200 flex flex-col justify-start items-start p-10 ">
                <div className="p-4 absolute top-0 right-0">
                    <button className="text-gray-800" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        )}
                    </button>
                </div>
                <Menu isOpen={isMenuOpen} />
                    {/* <img className="rounded-lg border-4 border-indigo-600 max-w-full md:max-w-md mt-60" src={profilePic} alt="Profile" style={{ position: "absolute"}}/> */}
                    <div className="rounded-r-xl  border-8 border-indigo-600 md:w-1/2 flex justify-center  items-center mt-8 md:mt-60 ">
                        <img src={profilePic} alt="profile" className="w-44 md:w-80 rounded-r-sm " />
                     </div>
            </div>
        </div>
    );
}

export default About;
