import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import AboutSecCart from './AboutSecCart';
import ThemeButton from '../ThemeButton/ThemeButton';
import { features } from '../../Data';

import AboutImage from '../../images/about-img.webp';
import MarqueeSlider from '../MarqueeSlider/MarqueeSlider';

const AboutSection = () => {
    return (
        <div className='relative py-32 max-xl:py-20 max-m:py-12 overflow-hidden'>
            <div className='flex flex-col gap-2 absolute top-10 w-full overflow-hidden opacity-10'>
                <MarqueeSlider 
                    MarqueeText='About Us'
                    initialDirection={1}
                    MarqueeTextStyles='text-[60px] font-black leading-[60px] max-m:text-[24px] max-m:leading-[24px]'
                />
                <MarqueeSlider 
                    MarqueeText='About Us'
                    initialDirection={-1}
                    MarqueeTextStyles='text-[60px] font-black leading-[60px] max-m:text-[24px] max-m:leading-[24px]'
                />
            </div>
            <div className="container">
                <div className="flex items-center gap-6 max-xl:flex-col">
                    <div className='animate-scale w-1/2 pe-10 max-xl:p-0 max-m:w-full'>
                        <img className='w-full h-auto object-contain object-center' src={AboutImage} alt="about-img"/>
                    </div>
                    <div className='w-1/2 max-xl:w-full'>
                        <SectionTitle
                            left={true}
                            title="About Us"
                            titleWrapperStyles="animate-fade"
                            headingType="h2"
                            headingStyles='about-heading text-white'
                            heading="Your trusted partner in reliable car rental"
                            descriptionType="small-normal"
                            descriptionStyles='animate-fade text-paragraphcolor'
                            description="Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga Dolor Saerror Sed Earum A Magni Soluta Quam Minus Dolor Dolor"
                        />
                        <div className='flex flex-col gap-6'>
                            {features.map((feature, index) => (
                                <AboutSecCart 
                                    key={index}
                                    flexStyles='animate-fade items-center max-m:items-start'
                                    afterStyles='after:w-14 after:h-14 max-m:after:top-0 max-m:after:left-[-5px]'
                                    svgStyles='w-20 h-20 max-xl:w-11 max-xl:h-11 max-m:w-14 max-m:h-14'
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            ))}
                        </div>
                        <div className="animate-fade flex mt-7">
                            <ThemeButton variant='primary'>Contact Us</ThemeButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;