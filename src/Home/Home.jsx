import React, {useRef} from 'react';
import GlowEffect from "../Components/GlowEffect.jsx";
import {FaEnvelope, FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import Projects from "../Projects/Projects.jsx";
import About from "../About/About.jsx";
import AnimCursor from "../Components/AnimCursor.jsx";
import Skill from "../Skills/Skill.jsx";
import Contact from "../Contact/Contact.jsx";

const Home = () => {
    const sections = [
        {
            name: "About",
            component: About,
            ref: useRef(),
            id:"#about"
        },
        {
            name: "Skills",
            component: Skill,
            ref: useRef(),
            id:"#skills"
        },
        {
            name: "Projects",
            component: Projects,
            ref: useRef(),
            id:"#projects"
        },

        {
            name: "Contact",
            component: Contact,
            ref: useRef(),
            id:"#contact"
        },

    ]
    let contacts = [
        {
            name: "Github",
            icon: FaGithub,
            link: "https://github.com/afrin-sultana23"
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/afrinSultana/"
        },
        {
            name: "Email",
            icon: FaEnvelope,
            link: "mailto:AbdulrahmanAbdulwahab"
        },
        {
            name: "Facebook",
            icon: FaFacebook,
            link: "https://www.facebook.com/profile.php?id=100035520174139"
        },

    ]
    return (
        <div>
            <AnimCursor/>
            <GlowEffect>
            </GlowEffect>
            <div className="h-screen">
                <div className=" absolute top-0 right-[2%] flex gap-2 flex-col items-center">
                    <div className=" h-40 w-1 rounded-md bg-[#6f9efa]"></div>
                    {sections.map((section) => {
                        return (
                            <a
                                className="[writing-mode:vertical-lr] w-12 p-2 bg-[#0E133C] bg-opacity-40 font-semibold text-2xl text-gray-200 rounded hover:bg-[#6f9efa] hover:text-white hover:bg-opacity-25"
                                href={section.id}
                                onClick={() => {
                                    section.ref.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
                                }}
                            >
                                {section.name}
                            </a>
                        )
                    })}

                </div>
                <div className="flex flex-col h-full w-8 items-center fixed justify-center space-y-6 ml-6 text-white">

                    <div className="h-full"></div>
                    <div className=" text-[#6f9efa]">
                        {contacts.map((contact) => {
                            const Icon = contact.icon
                            return (
                                <a href={contact.link} target="_blank">
                                    <div className="h-12 w-12 flex items-center justify-center group">
                                        <Icon className="h-8 w-8 group-hover:h-12 group-hover:w-12 transition-all duration-200 point-expand "/>
                                    </div>
                                </a>
                            )
                        })}


                    </div>

                    <div className=" h-full w-1 rounded-md bg-[#6f9efa]"></div>
                </div>
                <div className="h-full w-full overflow-y-auto" style={{scrollbarWidth: "thin"}}>
                    <div className="w-[60%] h-full container mx-auto">
                        <div className="flex items-center w-full h-full  ">
                            <div className="space-y-4">
                                <h1 className="text-2xl text-gray-200 font-bold ">Hi,<span
                                    className="text-2xl">I am</span></h1>
                                <h2 className="text-7xl font-bold text-white point-expand w-fit">Afrin Sultana</h2>
                                <h3 className="text-6xl text-gray-400 font-semibold">I love finding creative solutions
                                    through code.</h3>
                                <button className="bg-transparent outline-[#6f9efa] border-2 border-[#6f9efa] text-[#6f9efa] px-3 py-2 rounded-lg hover:bg-[#6f9efa]
                                                   cursor-pointer text-lg tracking-wider mt-6 hover:text-white btn btn-outline">
                                    My Resume
                                </button>
                            </div>
                        </div>
                        {sections.map((section) => {
                            const Component = section.component
                            return (
                                <div className=" w-full mt-10 mb-80 scroll-mt-40" id={section.id} ref={section.ref}>
                                    <Component key={section.name}></Component>
                                </div>

                        )
                        })}

                        <div className="flex justify-center items-center text-sm text-gray-500 mb-2">
                            This website is my personal portfolio. I hope you like it. :3
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Home;
