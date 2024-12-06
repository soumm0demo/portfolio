import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const phrases = [
    "FrontEnd Developer",
    "Software Developer",
    "UI/UX designer"
];

const PhraseAnimation = () => {
    const phraseRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            }
        });

        // Reset the position and opacity before starting the animation
        gsap.set(phraseRef.current, { y: -50, opacity: 0 });

        // Animation sequence
        tl.to(phraseRef.current, { 
            y: 0, // Move down to original position
            opacity: 1,
            duration: .8,
            ease: "power2.out"
        })
        .to(phraseRef.current, { 
            y: 50, // Move down
            opacity: 0,
            duration: .8,
            ease: "power2.in",
            delay: .8 // Wait before going back up
        });

        const interval = setInterval(() => {
            tl.restart();
        }, 4000); // Adjust the interval as needed

        return () => {
            clearInterval(interval); // Cleanup on unmount
            tl.kill(); // Stop the timeline
        };
    }, [currentIndex]);

    return (
        <div className="">
            <div className="flex flex-row text-3xl w-full  ">
                <p className='w-[30%]  flex justify-center items-center text-2xl font-semibold '>I 'm </p>
                <div 
                    className=" block text-white   w-full " 
                    ref={phraseRef}
                >
                 {phrases[currentIndex]}
                </div>
            </div>
        </div>
    );
};

export default PhraseAnimation;