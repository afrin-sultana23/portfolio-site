import React from 'react';
import {FaJs, FaReact} from "react-icons/fa";

import {SiTailwindcss} from "react-icons/si";
import { RiNextjsLine} from "react-icons/ri";
import {CgChart} from "react-icons/cg";
import {FiExternalLink} from "react-icons/fi";

const Projects = () => {
    const Projects =  [
        {
            name: "Personal portfolio",
            description: "description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem corporis hic,",
            image: "https://i.imgur.com/ofRPfrq.png",
            link: "https://portfolio-three-rose-33.vercel.app/",
            technologies: [
                {
                    name: "React",
                    link: "https://reactjs.org/",
                    color: "text-[#6f9efa]",
                    icon: FaReact,
                },
                {
                    name: "JavaScript",
                    link: "https://javascript.com/",
                    color: "text-[#000000]",
                    icon: FaJs,
                },
                {
                    name: "TailwindCSS",
                    link: "https://tailwindcss.com/",
                    color: "text-[#38b2ac]",
                    icon: SiTailwindcss
                },

            ],

        },
        {
            name: "Student dashboard",
            description: "description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem corporis hic,",
            image: "https://i.imgur.com/Wh3PiUW.png",
            link: "https://student-portal-tan.vercel.app/home",
            technologies: [
                {
                    name: "React",
                    link: "https://reactjs.org/",
                    color: "text-[#6f9efa]",
                    icon: FaReact,
                },
                {
                    name: "Next.js",
                    link: "https://nextjs.org/",
                    color: "text-[#000000]",
                    icon: RiNextjsLine
                },
                {
                    name: "TailwindCSS",
                    link: "https://tailwindcss.com/",
                    color: "text-[#38b2ac]",
                    icon: SiTailwindcss
                },
                {
                    name: "Recharts",
                    link: "http://recharts.org/en-US/",
                    color: "text-[#00E5FF]",
                    icon: CgChart,
                },

            ],

        },
        {
            name: "Geometry genius",
            description: "description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem corporis hic,",
            image: "https://i.imgur.com/w5RwZrI.png",
            technologies: [
                {
                    name: "React",
                    link: "https://reactjs.org/",
                    color: "text-[#6f9efa]",
                    icon: FaReact,
                },
                {
                    name: "JavaScript",
                    link: "https://javascript.com/",
                    color: "text-[#000000]",
                    icon: FaJs,
                },
                {
                    name: "TailwindCSS",
                    link: "https://tailwindcss.com/",
                    color: "text-[#38b2ac]",
                    icon: SiTailwindcss
                },

            ],

        },
        {
            name: "Restuarant website",
            description: "description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem corporis hic,",
            image: "https://imgur.com/1IJn7dJ.png",

            technologies: [
                {
                    name: "React",
                    link: "https://reactjs.org/",
                    color: "text-[#6f9efa]",
                    icon: FaReact,
                },
                {
                    name: "Next.js",
                    link: "https://nextjs.org/",
                    color: "text-[#000000]",
                    icon: RiNextjsLine
                },
                {
                    name: "TailwindCSS",
                    link: "https://tailwindcss.com/",
                    color: "text-[#38b2ac]",
                    icon: SiTailwindcss
                },

            ],

        },
        {
            name: "Tea house",
            description: "description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem corporis hic,",
            image: "https://i.imgur.com/h2wSbga.png",

            technologies: [
                {
                    name: "React",
                    link: "https://reactjs.org/",
                    color: "text-[#6f9efa]",
                    icon: FaReact,
                },
                {
                    name: "JavaScript",
                    link: "https://javascript.com/",
                    color: "text-[#000000]",
                    icon: FaJs,
                },
                {
                    name: "TailwindCSS",
                    link: "https://tailwindcss.com/",
                    color: "text-[#38b2ac]",
                    icon: SiTailwindcss
                },

            ],

        },
    ]
    return (
        <div>
            <h1 className="text-4xl font-semibold text-[#85F6DF] mb-4">My Projects</h1>
            <div className="grid grid-cols-3 gap-5">
                {Projects.map((project) => {

                    return (
                        <div className="card px-3 py-4 border border-gray-500 hover:bg-gray-50 shadow hover:bg-opacity-20 overflow-hidden"

                        >

                            <div className="w-full hover:scale-125 transition-all duration-100 overflow-hidden my-2  h-[10rem] p-3">
                                <img className="" src={project.image} alt=""/>
                            </div>
                            <div className="flex items-center justify-between">
                                <h1 className="font-semibold text-xl text-slate-100 mb-1 ">{project.name}</h1>
                                <a href={project.link} target="_blank"> <FiExternalLink  className="h-8 w-8 text-indigo-500 pl-2" /></a>

                            </div>
                            <h2 className="text-gray-300 pb-2">{project.description}</h2>
                            <div className="flex gap-2 py-1 flex-wrap">
                                {project.technologies.map((tech) => {
                                    const Icon = tech.icon
                                    return (
                                        <a
                                            className="h-8 bg-[#6f9efa] bg-opacity-40 text-[#6f9efa] px-2 py-0.5 rounded flex items-center mt-1 hover:bg-[#6f9efa] hover:text-white"
                                            href={tech.link} target="_blank"
                                        >

                                            <Icon className="text-black"/>
                                            <h1 className="ml-1">{tech.name}</h1>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
                }

            </div>
        </div>

    );
};

export default Projects;
