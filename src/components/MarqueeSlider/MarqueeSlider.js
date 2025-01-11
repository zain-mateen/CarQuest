import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


const MarqueeSlider = ({MarqueeText, MarqueeWrapper, MarqueeTextStyles}) => {
    const firstText = useRef(null);
    const slider = useRef(null);
    const direction = useRef(-1);
    const xPercent = useRef(0);

    // const data = {MarqueeText};
    const duplicatedData = Array(100).fill(MarqueeText);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const animate = () => {
            if (xPercent.current < -100) {
                xPercent.current = 0;
            } else if (xPercent.current > 0) {
                xPercent.current = -100;
            }
            
            gsap.set(firstText.current, { xPercent: xPercent.current });
            
            requestAnimationFrame(animate);
            xPercent.current += 0.001* direction.current;
        };

        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction.current = e.direction * -1,
            },
            x: "-500px",
        });

        requestAnimationFrame(animate);
    }, []);

    return (
        <div ref={slider} className={`flex ${MarqueeWrapper}`}>
            <div ref={firstText} className='flex flex-nowrap gap-10'>
                {duplicatedData.map((item, index) => (
                    <p className={`text-white text-nowrap uppercase ${MarqueeTextStyles}`} key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
};

export default MarqueeSlider;
