import React from 'react';
import About from './About';
import Skill from './Skill';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import ContactUs from './Contact';

const Profile = () => {
    return (
        <div className="min-h-screen">
            <About />
            <div className="bg-[#FFFFE4]">
                <Skill />
            </div>
            <div className="bg-[#FFFFE4]">
                <WorkExperience />
            </div>
            <div className="bg-[#FFFFE4]">
                <Projects />
            </div>
            <div className="bg-[#FFFFE4]">
                <ContactUs />
            </div>
        </div>
    );
};

export default Profile;
