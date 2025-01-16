import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Check } from 'phosphor-react';
import TitleComponent from '../TitleComponent/TitleComponent';

const TabButton = styled.button`
    ${tw`text-base border-none py-1 sm:py-2 px-3 sm:px-5 cursor-pointer rounded-full duration-300 max-m:text-sm max-m:rounded`}
    background: ${({ isActive }) => (isActive ? 'rgb(255, 54, 0)' : '#000000')};
    color: #FFF;

    &:hover {
        ${tw`bg-primary text-white`}
    }
    &:focus {
        ${tw`border-none outline-none`}
    }

    @media (max-width: 576px) {
        background: ${({ isActive }) => (isActive ? 'rgb(255, 54, 0)' : '#333333')};
    }
`;


const TabContentWrapper = styled.div`
    ${tw`flex justify-between items-center overflow-hidden w-full h-auto relative max-xl:flex-col max-xl:gap-y-8`}
`;

const TabContent = styled.div`
    position: ${({ isActive }) => (isActive ? 'relative' : 'absolute')};
    width: 55%;
    padding-right: 30px;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transform: ${({ isActive }) => (isActive ? 'translateX(0)' : 'translateX(-50%)')};
    transition: opacity 1.2s ease-in-out, transform 1.2s ease-in-out;
    pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};
    visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
    @media (max-width: 992px) {
        width: 100%;
        padding-right: 0px;
    }
`;

const TabImage = styled.img`
    position: ${({ isActive }) => (isActive ? 'relative' : 'absolute')};
    width: 100%;
    border-radius: 30px;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transform: ${({ isActive }) => (isActive ? 'translateX(0)' : 'translateX(50%)')};
    transition: opacity 1.2s ease-in-out, transform 1.2s ease-in-out;
    pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};
    visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
`;

const data = {
    vision: {
        title: 'Our Vision',
        heading: 'Pioneering excellence in car rental services',
        description:
            'We aim to continually innovate and integrate the latest technology into our services. From easy online bookings to advanced vehicle tracking systems, our goal is to make the car rental process seamless and efficient for our customers. Quality is at the heart of everything we do. We maintain a diverse fleet of well-maintained vehicles that meet the highest standards of safety and comfort.',
        list: [
            'Our customers are our top priority',
            'Quality is at the heart of everything we do',
            'Every vehicle leaves care looking its absolute best',
        ],
        image: require('../../images/our-vision-img.webp'),
    },
    mission: {
        title: 'Our Mission',
        heading: 'Pioneering excellence in car rental services',
        description:
            'We aim to continually innovate and integrate the latest technology into our services. From easy online bookings to advanced vehicle tracking systems, our goal is to make the car rental process seamless and efficient for our customers. Quality is at the heart of everything we do. We maintain a diverse fleet of well-maintained vehicles that meet the highest standards of safety and comfort.',
        list: [
            'Our customers are our top priority',
            'Quality is at the heart of everything we do',
            'Every vehicle leaves care looking its absolute best',
        ],
        image: require('../../images/our-mission-img.webp'),
    },
    approach: {
        title: 'Our Approach',
        heading: 'Pioneering excellence in car rental services',
        description:
            'We aim to continually innovate and integrate the latest technology into our services. From easy online bookings to advanced vehicle tracking systems, our goal is to make the car rental process seamless and efficient for our customers. Quality is at the heart of everything we do. We maintain a diverse fleet of well-maintained vehicles that meet the highest standards of safety and comfort.',
        list: [
            'Our customers are our top priority',
            'Quality is at the heart of everything we do',
            'Every vehicle leaves care looking its absolute best',
        ],
        image: require('../../images/our-approach-img.webp'),
    },
};

const VisionSec = () => {
    const [activeTab, setActiveTab] = useState(1);
    
    return (
        <div className="py-28 max-xl:py-20 max-m:py-12">
            <div className="container">
                <div className="max-w-[750px] mx-auto mb-12 max-m:mb-8">
                    <SectionTitle 
                        title="Vision Mission"
                        titleWrapperStyles="animate-fade"
                        heading="Driving excellence and innovation in car rental services"
                        headingStyles="vision-heading"
                        headingType="h2"
                    />
                    <div className="animate-fade flex justify-center mt-8 max-m:mt-4">
                        <nav className="flex items-center justify-center flex-wrap gap-3 max-m:bg-transparent bg-secondary p-2 rounded-[100px] max-m:rounded-none">
                            {Object.values(data).map((tab, index) => (
                                <TabButton
                                    key={index}
                                    isActive={activeTab === index + 1}
                                    onClick={() => setActiveTab(index + 1)}
                                >
                                    {tab.title}
                                </TabButton>
                            ))}
                        </nav>
                    </div>
                </div>
                <TabContentWrapper>
                    {Object.values(data).map((tab, index) => (
                        <TabContent key={index} isActive={activeTab === index + 1}>
                            <SectionTitle
                                left={true}
                                title={tab.title}
                                titleWrapperStyles="animate-fade"
                                heading={tab.heading}
                                headingType="h2"
                                headingStyles={`tab-heading${index}`}
                                description={tab.description}
                                descriptionStyles="animate-fade text-paragraphcolor"
                                descriptionType='small-normal'
                            />
                            <ul className="flex flex-col gap-5 animate-fade">
                                {tab.list.map((item, idx) => (
                                    <li className="flex items-center gap-2" key={idx}>
                                        <div className="flex items-center justify-center w-6 h-6 bg-primary rounded-full">
                                            <Check size={16} weight="bold" className="text-white" />
                                        </div>
                                        <TitleComponent size="extra-large-medium" className="text-white flex-1">
                                            {item}
                                        </TitleComponent>
                                    </li>
                                ))}
                            </ul>
                        </TabContent>
                    ))}
                    <div className='animate-fade w-[45%] max-xl:w-[60%] max-m:w-[100%]'>
                        {Object.values(data).map((tab, index) => (
                            <TabImage
                                key={index}
                                src={tab.image}
                                alt={`${tab.title} img`}
                                isActive={activeTab === index + 1}
                            />
                        ))}
                    </div>
                </TabContentWrapper>
            </div>
        </div>
    );
}

export default VisionSec;
