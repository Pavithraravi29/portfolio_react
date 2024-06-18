import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const projects = [
    {
        title: "Detection of depression using acoustic and treatment response prediction",
        description: "This model is developed to detect whether a person is suffering from depression or not using the prosodic features. This helps in self diagnosing of depression in a very short time with the help of machine learning algorithms. Involved in recognize and convert the speech into text module and identifying the polarity using Naive Bayes algorithm module.",
        tags: ["Python", "Machine Learning"]
    },
    {
        title: "Smart Tool Holder",
        description: "Developed an innovative Tool Control Center program for automated real-time process monitoring integrated within machine tools. This application continuously documents process data and supports various functionalities for enhanced efficiency.",
        subpoints: [
            "Real-Time Monitoring",
            "Long-term process recording",
            "Access to historical process-data",
            "Reading out machine data",
            "Multi-user capability"
        ],
        tags: ["React", "Python", "FastAPI", "PostgreSQL"]
    },
    {
        title: "Object Detection",
        subpoints: [
            "Trained YOLO v8 model on custom dataset for improved object detection accuracy and exported to ONNX format.",
            "Created Streamlit app for users to upload images and perform real-time object detection with YOLO.",
            "Developed Python script for batch image detection, supporting multiple formats and saving results."
        ],
        tags: ["Python", "YOLO"]
    }
];

const Projects = () => {
    const projectRefs = useRef([]);

    projectRefs.current = [];

    useEffect(() => {
        gsap.fromTo(
            projectRefs.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power3.out' }
        );
    }, []);

    const handleMouseEnter = (index) => {
        gsap.to(projectRefs.current[index], {
            x: 20,
            duration: 0.3,
        });
    };

    const handleMouseLeave = (index) => {
        gsap.to(projectRefs.current[index], {
            x: 0,
            duration: 0.3,
        });
    };

    return (
        <div id="projects-section" className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Some Projects I've Built</h1>
            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <div className={`p-6 border shadow-lg bg-lime-200 transform transition-transform hover:translate-x-3 hover:-translate-y-3 relative z-10 ${!project.subpoints || project.subpoints.length === 0 ? 'h-full' : ''}`}>
                            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                            <p className="text-gray-700 mb-4 text-justify">{project.description}</p>
                            {project.subpoints && project.subpoints.length > 0 && (
                                <ul className="text-gray-700 mb-4 ml-3 list-disc">
                                    {project.subpoints.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="flex flex-wrap mb-4">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2 mb-2">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-indigo-600 pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
