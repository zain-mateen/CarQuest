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
        slideUpAnimation(".service-page-sec", 2.1);
        slideUpAnimation(".contact-page-sec", 2.1);
        slideUpAnimation(".car-type-sec", 2.1);
        slideUpAnimation(".single-car-page", 2.1);
        slideUpAnimation(".blog-page-sec", 2.1);
        slideUpAnimation(".blog-details-page", 2.1);
        slideUpAnimation(".car-page-sec", 2.1);
        slideUpAnimation(".pricing-page-sec", 2.1);
        slideUpAnimation(".img-gallery-page-sec", 2.1);
        slideUpAnimation(".testimonials-page-sec", 2.1);
        scaleAnimation(".hero-sec", 0.5);
        scaleAnimation(".map-scale");
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







// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const wrapCharacters = (text) => {
//   return text
//     .split(" ")
//     .map((word) => {
//         const wordWrapped = word
//             .split("")
//             .map((char) => {
//                 return `<span class="char font-fontBold" style="display:inline-block; opacity: 0;">${char}</span>`;
//             })
//             .join("");
//         return `<span class="word" style="display:inline-block;">${wordWrapped}</span>`;
//     })
//     .join(" ");
// };

// const animateText = (selectorOrElement, delay) => {
//     const heading =
//         typeof selectorOrElement === 'string'
//         ? document.querySelector(selectorOrElement)
//         : selectorOrElement;

//     if (!heading) return;

//     const originalText = heading.textContent || '';
//     heading.innerHTML = wrapCharacters(originalText);

//     gsap.fromTo(
//         `${typeof selectorOrElement === 'string' ? selectorOrElement : ''} .char`,
//         { x: 20, opacity: 0 },
//         {
//             x: 0,
//             opacity: 1,
//             duration: 0.5,
//             stagger: 0.03,
//             delay: delay || 0,
//             ease: 'power2.out',
//             scrollTrigger: {
//                 trigger: heading,
//                 start: 'top 80%',
//                 toggleActions: 'restart none none reverse',
//             },
//         }
//     );
// };

// const slideUpAnimation = (element, delay) => {
//     gsap.fromTo(
//         element,
//         { y: 40, filter: "blur(3px)", opacity: 0 },
//         {
//             y: 0,
//             filter: "blur(0px)",
//             opacity: 1,
//             duration: 1,
//             delay: delay || 0,
//             scrollTrigger: {
//                 trigger: element,
//                 start: "top 90%",
//                 toggleActions: "play none none reverse",
//             },
//         }
//     );
// };

// const headerAnimation = (element, delay) => {
//     gsap.fromTo(
//         element,
//         { y: "-100%" },
//         {
//             y: "0",
//             duration: 1,
//             delay: delay || 0,
//         }
//     );
// };

// const scaleAnimation = (element, delay) => {
//     gsap.fromTo(
//         element,
//         { y: 30, scale: 0.8, opacity: 0 },
//         {
//             y: 0,
//             scale: 1,
//             opacity: 1,
//             duration: 1.5,
//             delay: delay || 0,
//             scrollTrigger: {
//                 trigger: element,
//                 start: "top 90%",
//                 toggleActions: "play none none reverse",
//             },
//         }
//     );
// };

// const Animation = ({ children }) => {
//     useEffect(() => {
//         const elementsToAnimate = [
//             { selector: ".header", animation: headerAnimation, delay: 0 },
//             { selector: ".inner-header", animation: scaleAnimation, delay: 0.5 },
//             { selector: ".inner-header-heading", animation: animateText, delay: 1.5 },
//             { selector: ".bread-crumbs", animation: slideUpAnimation, delay: 1.8 },
//             { selector: ".about-page-sec", animation: slideUpAnimation, delay: 2.1 },
//             { selector: ".service-page-sec", animation: slideUpAnimation, delay: 2.1 },
//             { selector: ".contact-page-sec", animation: slideUpAnimation, delay: 2.1 },
//             { selector: ".car-type-sec", animation: slideUpAnimation, delay: 2.1 },
//             { selector: ".single-car-page", animation: slideUpAnimation, delay: 2.1 },
//             { selector: ".blog-page-sec", animation: slideUpAnimation, delay: 2.1 },
//             { selector: ".blog-details-page", animation: slideUpAnimation, delay: 2.1 },
//             { selector: ".car-page-sec", animation: slideUpAnimation, delay: 2.1 },
//             { selector: ".pricing-page-sec", animation: slideUpAnimation, delay: 2.1 },
//             { selector: ".img-gallery-page-sec", animation: slideUpAnimation, delay: 2.1 },
//             { selector: ".testimonials-page-sec", animation: slideUpAnimation, delay: 2.1 },
//             { selector: ".hero-sec", animation: scaleAnimation, delay: 0.5 },
//             { selector: ".map-scale", animation: scaleAnimation },
//             { selector: ".hero1-title", animation: slideUpAnimation, delay: 1.5 },
//             { selector: ".hero1-heading", animation: animateText, delay: 1.7 },
//             { selector: ".hero1-desc", animation: slideUpAnimation, delay: 1.9 },
//             { selector: ".hero1-button", animation: slideUpAnimation, delay: 2.1 },
//             { selector: ".hero-form", animation: slideUpAnimation },
//             { selector: ".about-heading", animation: animateText },
//             { selector: ".services-heading", animation: animateText },
//             { selector: ".fleet-heading", animation: animateText },
//             { selector: ".work-heading", animation: animateText },
//             { selector: ".video-heading", animation: animateText },
//             { selector: ".choose-heading", animation: animateText },
//             { selector: ".faq-heading", animation: animateText },
//             { selector: ".testimonial-heading", animation: animateText },
//             { selector: ".cta-heading", animation: animateText },
//             { selector: ".blog-heading", animation: animateText },
//             { selector: ".partner-heading", animation: animateText },
//             { selector: ".vision-heading", animation: animateText },
//             { selector: ".tab-heading0", animation: animateText },
//             { selector: ".tab-heading1", animation: animateText },
//             { selector: ".tab-heading2", animation: animateText },
//             { selector: ".about-video-heading", animation: animateText },
//             { selector: ".drivers-heading", animation: animateText },
//         ];

//         elementsToAnimate.forEach(({ selector, animation, delay }) => {
//             const elements = document.querySelectorAll(selector);
//             elements.forEach((element) => {
//                 animation(element, delay);
//             });
//         });

//         ScrollTrigger.refresh();

//         return () => {
//             ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//         };
//     }, []);

//     return <>{children}</>;
// };

// export default Animation;
