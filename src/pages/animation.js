import { useEffect } from "react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const wrapCharacters = (text) => {
    return text
        .split(' ')
        .map((word) => {
            const wordWrapped = word
                .split('')
                .map((char) => {
                    return `<span class="char font-fontBold" style="display:inline-block; opacity: 0;">${char}</span>`;
                })
                .join('');
            return `<span class="word" style="display:inline-block;">${wordWrapped}</span>`;
        })
        .join(' ');
};
const animateText = (selector, delay) => {
    const heading = document.querySelector(selector);
    if (!heading) return;

    const originalText = heading.textContent || '';
    heading.innerHTML = wrapCharacters(originalText);

    gsap.fromTo(
        `${selector} .char`,
        { x: 20, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.03,
            delay: delay ? delay : 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: heading,
                start: 'top 80%',
                toggleActions: 'restart none none reverse',
            },
        }
    );
};
const slideUpAnimation = (element, delay) => {
    gsap.fromTo(element,
        {
            y: 40,
            filter: 'blur(3px)',
            opacity: 0,
        },
        {
            y: 0,
            filter: 'blur(0px)',
            opacity: 1,
            duration: 1,
            delay: delay ? delay : 0,
            scrollTrigger: {
                trigger: element,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
            },
        }
    );
}
const headerAnimation = (element, delay) => {
    gsap.fromTo(element,
        {
            y: "-100%",
        },
        {
            y: "0",
            duration: 1,
            delay: delay ? delay : 0,
        }
    );
}
const scaleAnimation = (element, delay) => {
    gsap.fromTo(element,
        {
            y: 30,
            scale: 0.8,
            opacity: 0,
        },
        {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.5,
            delay: delay ? delay : 0,
            scrollTrigger: {
                trigger: element,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
            },
        }
    );
}
const Animation = ({ children }) => {
    useEffect(() => {
        const animateScaleElements = document.querySelectorAll('.animate-scale');
        const animateUpElements = document.querySelectorAll('.animate-fade');
        animateScaleElements.forEach((element) => {
            gsap.fromTo(element,
                {
                    scale: 0.9,
                },
                {
                    scale: 1,
                    ease: 'power2.out',
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
        animateUpElements.forEach((element) => {
            gsap.fromTo(element,
                {
                    y: 50,
                    scale: 0.9,
                    opacity: 0,
                },
                {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
        headerAnimation(".header");
        scaleAnimation(".inner-header", 0.5);
        animateText(".inner-header-heading", 1.5);
        slideUpAnimation(".bread-crumbs", 1.8);
        slideUpAnimation(".about-page-sec", 2.1);
        scaleAnimation(".hero-sec", 0.5);
        slideUpAnimation(".hero1-title", 1.5);
        animateText(".hero1-heading", 1.7);
        slideUpAnimation(".hero1-desc", 1.9);
        slideUpAnimation(".hero1-button", 2.1);
        slideUpAnimation(".hero-form");
        animateText(".about-heading");
        animateText(".services-heading");
        animateText(".fleet-heading");
        animateText(".work-heading");
        animateText(".video-heading");
        animateText(".choose-heading");
        animateText(".faq-heading");
        animateText(".testimonial-heading");
        animateText(".cta-heading");
        animateText(".blog-heading");
        animateText(".partner-heading");
        animateText(".vision-heading");
        animateText(".tab-heading0");
        animateText(".tab-heading1");
        animateText(".tab-heading2");
        animateText(".about-video-heading");
        animateText(".drivers-heading");
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    return (
        <>
            {children}
        </>
    )
}

export default Animation
