import React from 'react';
import {FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaVuejs} from "react-icons/fa";
import {
    SiFirebase,
    SiMongodb,
    SiExpress,
    SiTailwindcss,
    SiCplusplus,
    SiNuxtdotjs,
    SiSvelte,
    SiPython, SiJquery
} from "react-icons/si";
import {FaC} from "react-icons/fa6";
import {RiNextjsFill} from "react-icons/ri";
import {CgChart} from "react-icons/cg";
import {BsFiletypeScss} from "react-icons/bs";

const Skill = () => {
    const Skill = {
        advanced: [
            {
                icon: FaReact,
                name: "React",
                link: "https://reactjs.org/",
                color: "text-[#6f9efa]"
            },
            {
                icon: RiNextjsFill,
                name: "Next.js",
                link: "https://nextjs.org/",
                color: "text-[#000000]"
            },
            {
                icon: FaJs,
                name: "JavaScript",
                link: "https://javascript.com/",
                color: "text-[#f0db4f]"
            },
            {
                icon: SiFirebase,
                name: "Firebase",
                link: "https://firebase.google.com/",
                color: "text-[#ffca28]"
            },
            {
                icon: FaHtml5,
                name: "HTML5",
                link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
                color: "text-[#e34f26]"
            },
            {
                icon: SiTailwindcss,
                name: "TailwindCSS",
                link: "https://tailwindcss.com/",
                color: "text-[#38b2ac]"
            },
            {
                icon: SiJquery,
                name: "Jquery",
                link: "https://www.jquery.com/",
                color: "text-[#47a248]"
            },
            {
                icon: BsFiletypeScss,
                name: "MongoDB",
                link: "https://www.mongodb.com/",
                color: "text-[#47a248]"
            },
            {
                icon: SiMongodb,
                name: "MongoDB",
                link: "https://www.mongodb.com/",
                color: "text-[#47a248]"
            },
            {
                icon: FaNodeJs,
                name: "Node.js",
                link: "https://nodejs.org/",
                color: "text-[#539e43]"
            },
            {
                icon: SiExpress,
                name: "Express",
                link: "https://expressjs.com/",
                color: "text-[#000000]"
            },

        ],
        intermediate: [
            {
                icon: FaCss3Alt,
                name: "CSS3",
                link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                color: "text-[#1572b6]"
            },
            {
                icon: SiMongodb,
                name: "MongoDB",
                link: "https://www.mongodb.com/",
                color: "text-[#47a248]"
            },
            {
                icon: SiTailwindcss,
                name: "TailwindCSS",
                link: "https://tailwindcss.com/",
                color: "text-[#38b2ac]"
            },
            {
                icon: FaJava,
                name: "Java",
                link: "https://www.java.com/en/",
                color: "text-[#f89820]"
            },
            {
                icon: FaC,
                name: "C",
                link: "https://en.wikipedia.org/wiki/C_(programming_language)",
                color: "text-[#A8B9CC]"
            },
            {
                icon: SiCplusplus,
                name: "C++",
                link: "https://isocpp.org/",
                color: "text-[#00599C]"
            },
            {
                icon: SiPython,
                name: "Python",
                link: "https://python.org/",
                color: "text-[#f0db4f]"
            },

            {
                icon: CgChart,
                name: "Recharts",
                link: "http://recharts.org/en-US/",
                color: "text-[#00E5FF]"
            },

        ],
        basic: [
            {
                icon: FaVuejs,
                name: "Vue.js",
                link: "https://vuejs.org/",
                color: "text-[#4FC08D]"
            },
            {
                icon: SiNuxtdotjs,
                name: "Nuxt.js",
                link: "https://nuxtjs.org/",
                color: "text-[#00C58E]"
            },

            {
                icon: SiSvelte,
                name: "Svelte",
                link: "https://svelte.dev/",
                color: "text-[#FF3E00]"
            },
        ]
    }
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold text-[#6f9efa] mb-2">My Skills</h1>
            <div className="h-40 w-full flex border rounded border-gray-500 ">
                <div className="font-bold text-2xl text-white flex justify-center items-center basis-[18%] px-2">
                    <h1>Advanced</h1>
                </div>
                <div className="flex basis-[82%] p-3 gap-4 flex-wrap">
                    {Skill.advanced.map((skill) => {
                        const Icon = skill.icon
                        return (
                            <a className="rounded-lg hover:bg-white hover:bg-opacity-10 shadow h-fit p-2 cursor-pointer"
                               href={skill.link} target="_blank">
                                <Icon className={"text-5xl bg-transparent " + skill.color}/>
                            </a>

                        )
                    })}
                </div>
            </div>

            <div className="h-40 w-full flex border rounded border-gray-500 ">
                <div className="font-bold text-2xl text-white flex justify-center items-center basis-[18%] px-2">
                    <h1>Intermediate</h1></div>
                <div className="flex basis-[82%] p-3 gap-4 flex-wrap">
                    {Skill.intermediate.map((skill) => {
                        const Icon = skill.icon
                        return (
                            <a className="rounded-lg hover:bg-white hover:bg-opacity-10 shadow h-fit p-2 cursor-pointer"
                               href={skill.link} target="_blank">
                                <Icon className={"text-5xl bg-transparent " + skill.color}/>
                            </a>
                        )
                    })}
                </div>
            </div>

            <div className="h-40 w-full flex border rounded border-gray-500 ">
                <div className="font-bold text-2xl text-white flex justify-center items-center basis-[18%] px-2">
                    <h1>Basic</h1></div>
                <div className="flex basis-[82%] p-3 gap-4 flex-wrap">
                    {Skill.basic.map((skill) => {
                        const Icon = skill.icon
                        return (
                            <a className="rounded-lg hover:bg-white hover:bg-opacity-10 shadow h-fit p-2 cursor-pointer"
                               href={skill.link} target="_blank">
                                <Icon className={"text-5xl bg-transparent " + skill.color}/>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skill;
