import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const BlobContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: -10;
    backdrop-filter: blur(180px);
    background-image: linear-gradient(#16213E,#0F3460); //#111218 //0A043C  //200E3A;    //12486B;
    overflow: hidden;
`;

const BlobElement = styled.div`

    z-index: -20;
    height: 280px;
    aspect-ratio: 1;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    background: linear-gradient(to right, #6d129b, #1d7c59);
    animation: rotate 2s ease-in-out infinite;
    opacity: 0.8;
    filter: blur(70px);
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        50% {
            scale: 1 1.5;
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const GlowEffect = () => {
    const blobRef = useRef(null);

    useEffect(() => {
        const handlePointerMove = (e) => {
            const { clientX, clientY } = e;
            blobRef.current.animate(
                {
                    left: `${clientX}px`,
                    top: `${clientY}px`,
                },
                { duration: 3000, fill: 'forwards' }
            );
        };

        window.addEventListener('pointermove', handlePointerMove);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
        };
    }, []);

    return (
        <BlobContainer className="">
            <BlobElement ref={blobRef} />
        </BlobContainer>
    );
};

export default GlowEffect;



// import {useEffect, useState, useRef} from 'react';
//
// const GlowEffect = () => {
//     const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
//     const blobRef = useRef(null);
//
//     useEffect(() => {
//         const handleMouseMove = (event) => {
//             setMousePosition({x: event.clientX, y: event.clientY});
//         };
//
//         window.addEventListener('mousemove', handleMouseMove);
//
//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);
//
//     useEffect(() => {
//         const {x, y} = mousePosition;
//         const blob = blobRef.current;
//
//         if (blob) {
//             blob.animate(
//                 {
//                     left: `${x}px`,
//                     top: `${y}px`,
//                 },
//                 {duration: 3000, fill: 'forwards', easing: 'ease-in-out'}
//             );
//         }
//     }, [mousePosition]);
//
//     return (
//         <div className="relative h-screen overflow-hidden bg-[#0E133C]">
//             <div
//                 ref={blobRef}
//                 id="blob"
//                 className="absolute left-1/2 top-1/2 h-[34vmax] w-[30vmax]
//                 -translate-x-1/2 -translate-y-1/2 animate-rotate
//                 rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-500  opacity-70"
//             ></div>
//             <div
//                 id="blur"
//                 className="absolute z-10 h-full w-full backdrop-blur-[12vmax]"
//             ></div>
//             <h1
//                 data-value="MOUSEMOVE"
//                 className="absolute left-1/2 top-1/2
//                 text-center text-3xl font-bold text-white
//                 -translate-x-1/2 -translate-y-1/2"
//
//             >
//
//             </h1>
//         </div>
//     );
// };
//
// export default GlowEffect;
