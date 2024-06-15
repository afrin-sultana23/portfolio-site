import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className="text-4xl font-semibold text-[#85F6DF] pb-3">About me</h1>
            <div className="flex justify-between gap-10">
                <div className=" text-lg tracking-wide text-gray-100 ">
                    <span className="text-xl font-semibold text-white">Hi, I am Afrin Sultana,</span>
                    <div className="mt-2">
                        A self-taught programmer. I love to create websites and web applications. I began by learning front-end technologies. After getting a good grasp of front-end, I dive into the back-end as well.
                    </div>
                    <div className="mt-4">
                        Exploring different technologies on both the front-end and back-end sides gave me experience.

                        I make sure my web applications look nice and work smoothly for everybody. I handle everything from front-end design to back-end coding.
                    </div>
                    <div className="mt-4">
                        Apart from coding, I also like sharing my knowledge. I contribute to open-source projects and help juniors learn coding.

                        In my free time, you will find me trying new web tools or reading about latest tech trends.
                    </div>

                </div>

                <div className="flex items-center w-1/2 justify-center flex-col">
                    <div className="w-60 px-4 border-2 border-[#6f9efa] point-expand grayscale hover:grayscale-0 transition-all duration-200">
                        <img className="" src="https://i.ibb.co/TRjk9PS/afrin.png" alt="profile :)"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
