import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className="text-4xl font-semibold text-[#6f9efa]">About me</h1>
            <div className="flex justify-between gap-10">
                <div className=" text-xl tracking-wide text-gray-300 ">
                    <h1 className="text-2xl font-semibold mt-4 text-white">Hi, I am Afrin Sultana,</h1>
                    <div className="mt-4">
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

                <div className="flex items-center justify-center flex-col">
                    <div className="border w-52 px-4 border-[#6f9efa] point-expand grayscale hover:grayscale-0 transition-all duration-200">
                        <img className="" src="/src/assets/afrin.png" alt="a cute pic :)"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
