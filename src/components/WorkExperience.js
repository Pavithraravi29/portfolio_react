import React from 'react';

const workExperiences = [
    {
        company: "Central Manufacturing Technology Institute",
        role: "Project Fellow",
        type: "Full time",
        date: "June 2023 - Present",
        description: [
            "Developed full-stack applications using React, Python with FastAPI, and PostgreSQL for seamless frontend-backend integration and efficient database management.",
            "Worked on AIML for intelligent functionalities, enhancing applications with innovative AI/Machine Learning capabilities."
        ],
        logo: "cmtilogo.jpeg", // Add your logo path here
    },
    {
        company: "Sasken Technology",
        role: "Associate Software Engineer",
        type: "Full time",
        date: "August 2022 - February 2023",
        description: [
            "Developed foundational skills in C++ programming, focusing on syntax, data structures, and algorithms.",
            "Engaged in practical coding exercises to enhance proficiency in debugging, problem-solving, and implementing basic software applications."
        ],
        logo: "saskenlogo.jpeg", // Add your logo path here
    },
    {
        company: "Innovation Creation Organization",
        role: "Full Stack Web Developer",
        type: "Internship",
        date: "July 2021 - August 2021",
        description: [
            "Developed a dynamic corporate website for VDP Solutions Pvt Ltd using Microsoft Visual Studio, HTML, CSS, JavaScript, MySQL, and PHP.",
            "Created responsive webpages with dynamic content and integrated sections for company information, services, projects, and contact details.",
            "Gained valuable experience in web development, focusing on responsive design, interactivity, and database integration."
        ],
        logo: "iclogo.png", // Add your logo path here
    },
   
   
];

const WorkExperience = () => {
    return (
        <div id="work-section" className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">My Experiences</h1>
            <p className="text-center mb-12">
                One of the most beautiful parts of every person's life, the part of their work life. I am very happy to have spent this part of my life with the people I loved and it has made my interest in my work more and more.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
                {workExperiences.map((experience, index) => (
                    <div key={index} className="p-6 border rounded-lg shadow-lg bg-lime-200">
                        <div className="flex items-center mb-4">
                            <img src={experience.logo} alt={`${experience.company} logo`} className="h-16 w-16 mr-4" />
                            <div>
                                <h2 className="text-xl font-bold">{experience.role} - {experience.company}</h2>
                                <p className="text-yellow-600 font-semibold">{experience.type}</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <span className="bg-yellow-500 text-white py-1 px-3 rounded-full">{experience.date}</span>
                        </div>
                        <ul className="list-disc list-inside">
                            {experience.description.map((item, index) => (
                                <li key={index} className="mb-2">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;
