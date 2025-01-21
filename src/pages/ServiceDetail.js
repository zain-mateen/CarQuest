import React from 'react'
import InnerHeader from '../components/Header/InnerHeader'
import { FaqData, ServiceDetailData } from '../Data';
import TitleComponent from '../components/TitleComponent/TitleComponent';
import { ArrowUpRight, Check } from 'phosphor-react';
import { MessageIcon } from '../components/SvgIcons/SvgIcons';
import ThemeButton from '../components/ThemeButton/ThemeButton';
import ImageComponent from '../components/ImageConponent/ImageConponent';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Accordion from '../components/Accordion/Accordion';

import ServiceImage from '../images/service-single-img.webp'
import GalleryImage1 from '../images/service-gallery-1.webp'
import GalleryImage2 from '../images/service-gallery-2.webp'
import GalleryImage3 from '../images/service-gallery-3.webp'
import GalleryImage4 from '../images/service-gallery-4.webp'
import { useParams } from 'react-router-dom';

const ServiceBoxData = [
    'Car Rental With Driver',
    'Business Car Rental',
    'Airport Transfer',
    'Chauffeur Services'
];

const ServiceListData = [
    '24/7 Roadside Assistance',
    'Free Cancellation & Return',
    'Rent Now Pay When You Arrive',
    '24/7 Roadside Assistance',
    'Free Cancellation & Return',
    'Rent Now Pay When You Arrive',
];

const ServiceGalleryData = [
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
    GalleryImage4,
];

const ServiceDetail = () => {
    const { id } = useParams();
    const serviceDetail = ServiceDetailData.find((item) => item.id === id);

    if (!serviceDetail) {
        return <h2>Service Detail not found</h2>;
    }

    const ServiceFaqData = FaqData.ServiceFaqData;

    return (
        <>
            <InnerHeader 
                Heading={serviceDetail.heading}
                InnerPageLink='/service'
                InnerPageLinkText='Service'
                InnerPageSlash='/'
                CurrentPage={serviceDetail.heading}
            />
            <div className='py-28 max-xl:py-20 max-m:py-12'>
                <div className="container">
                    <div className="grid grid-cols-3 gap-8 max-xl:grid-cols-1 max-xl:gap-x-0">
                        <div className='service-page-sec relative'>
                            <div className='flex flex-col gap-10 sticky top-6 left-0'>
                                <div className="p-6 rounded-3xl bg-secondary shadow-md">
                                    <TitleComponent size='extra-large-semibold' className='text-white mb-6'>
                                        Our Services
                                    </TitleComponent>
                                    <ul className='flex flex-col gap-5'>
                                        {ServiceBoxData.map((service, index) => (
                                            <div 
                                                key={index} 
                                                className="[&:not(:last-child)]:border-b [&:not(:last-child)]:border-white/[20%] [&:not(:last-child)]:pb-5 flex justify-between items-center cursor-pointer group"
                                            >
                                                <TitleComponent size='small-normal' className='text-white duration-300 group-hover:text-primary'>
                                                    {service}
                                                </TitleComponent>
                                                <ArrowUpRight size={24} weight='bold' className='text-primary duration-300 group-hover:rotate-45' />
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 rounded-3xl bg-secondary text-center">
                                    <div className="flex justify-center mb-7">
                                        <MessageIcon />
                                    </div>
                                    <h2 className="text-[36px] font-bold text-white mb-5">
                                        Need help?
                                    </h2>
                                    <TitleComponent size='small-normal' className='text-paragraphcolor'>
                                        We strive to provide exceptional customer service and support. Whether you have questions.
                                    </TitleComponent>
                                    <div className="mt-6">
                                        <ThemeButton variant='primary'>Contact Now</ThemeButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 col-span-2'>
                            <ImageComponent 
                                src={ServiceImage}
                                alt='service img'
                                ImageWrapper='service-page-sec rounded-[46px] max-xl:rounded-3xl max-m:rounded-xl'
                            />
                            <TitleComponent type='h2' className='services-heading text-white'>
                                Discover premium rental services
                            </TitleComponent>
                            <TitleComponent size='small-normal' className='animate-fade text-paragraphcolor'>
                                We offer a wide range of car rental services designed to meet all your transportation needs. Whether you’re traveling for business, planning a family vacation, or need a reliable vehicle for a special event, we have the perfect solution for you.
                            </TitleComponent>
                            <TitleComponent size='small-normal' className='animate-fade text-paragraphcolor'>
                                We offer a comprehensive range of car rental services designed to meet the diverse needs of our clients. Whether you’re traveling for business, planning a family vacation, or need a reliable vehicle for a special event, our fleet and services are tailored to provide you with the perfect solution. Discover the various services we offer and why we are the preferred choice for car rentals.
                            </TitleComponent>
                            <ul className='animate-fade grid grid-cols-2 gap-6 max-l:grid-cols-1'>
                                {ServiceListData.map((service, index) => (
                                    <li className='flex items-center gap-2' key={index}>
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary">
                                            <Check scale={16} weight='bold' className='text-white' />
                                        </div>
                                        <TitleComponent size='large-medium' className='text-white flex-1'>
                                            {service}
                                        </TitleComponent>
                                    </li>
                                ))}
                            </ul>
                            <div className='animate-fade grid grid-cols-4 gap-6 mt-6 pb-10 border-b border-borderPrimary max-l:grid-cols-2 max-m:grid-cols-1'>
                                {ServiceGalleryData.map((image, index) => (
                                    <ImageComponent 
                                        key={index}
                                        src={image}
                                        alt={`Gallery img ${index + 1}`}
                                        ImageWrapper='rounded-2xl max-xl:rounded-xl'
                                    />
                                ))}
                            </div>
                            <SectionTitle 
                                left={true}
                                title='Frequently Asked Questions'
                                heading='You need to know about service'
                                headingType='h2'
                            />
                            <Accordion item={ServiceFaqData} variant='secondary' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceDetail;