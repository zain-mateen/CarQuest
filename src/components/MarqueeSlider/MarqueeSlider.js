import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const MarqueeSlider = ({ MarqueeText, MarqueeWrapper, MarqueeWrapperInner, MarqueeTextStyles, initialDirection }) => {
    const firstText = useRef(null);
    const slider = useRef(null);
    const direction = useRef(initialDirection); // Default direction from props
    const xPercent = useRef(0);

    const duplicatedData = Array(200).fill(MarqueeText);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const animate = () => {
            if (xPercent.current < -100) {
                xPercent.current = 0;
            } else if (xPercent.current > 0) {
                xPercent.current = -50;
            }

            gsap.set(firstText.current, { xPercent: xPercent.current });
            requestAnimationFrame(animate);
            xPercent.current += 0.001 * direction.current; // Adjust speed here
        };

        ScrollTrigger.create({
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
            onUpdate: (self) => {
                // Change direction based on scroll
                direction.current = self.direction === 1 ? initialDirection : -initialDirection;
            },
        });

        requestAnimationFrame(animate);
    }, [initialDirection]);

    return (
        <div className={`${MarqueeWrapper}`}>
            <div ref={slider} className={`flex ${MarqueeWrapperInner}`}>
                <div ref={firstText} className="flex flex-nowrap gap-10">
                    {duplicatedData.map((item, index) => (
                        <p className={`text-white text-nowrap uppercase ${MarqueeTextStyles}`} key={index}>
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarqueeSlider;
