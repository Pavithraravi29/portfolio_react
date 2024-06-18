import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiCplusplus, SiFlask, SiFastapi, SiMysql, SiPostgresql } from 'react-icons/si';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Python', icon: <FaPython className="text-blue-500" size={50} /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-300" size={50} /> },
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" size={50} /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" size={50} /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" size={50} /> },
  { name: 'React', icon: <FaReact className="text-cyan-500" size={50} /> },
  { name: 'Flask', icon: <SiFlask className="text-gray-600" size={50} /> },
  { name: 'FastAPI', icon: <SiFastapi className="text-green-500" size={50} /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" size={50} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" size={50} /> },
];

const SkillsCard = () => {
  const skillsRef = useRef([]);

  useEffect(() => {
    skillsRef.current.forEach((skill, index) => {
      gsap.fromTo(
        skill,
        { opacity: 0, y: 50, scale: 0.8, rotation: -15 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          delay: index * 0.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: skill,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div id="skills-section" className="container mx-auto px-4 py-12 md:py-28">
      <h1 className="text-4xl font-bold text-center mb-8">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillsRef.current[index] = el)}
            className="w-full md:w-40 p-4 bg-white shadow-lg rounded-lg text-center mb-6 md:mb-0"
          >
           <div className="mb-3 flex justify-center items-center h-20">{skill.icon}</div>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
