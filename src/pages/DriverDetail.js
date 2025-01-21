import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Check } from 'phosphor-react';
import InnerHeader from '../components/Header/InnerHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { QuoteIcon } from '../components/SvgIcons/SvgIcons';
import TitleComponent from '../components/TitleComponent/TitleComponent';
import SectionTitle from '../components/SectionTitle/SectionTitle'
import { SocialLinkData, DriversDetailData } from '../Data';

import 'swiper/css';
import 'swiper/css/pagination';

const FeatureListData =[
    'Qualified and Experienced',
    'Safety First',
    'Highly Trained',
    'Personalized Experience',
    'Years of Experience',
    'Local Knowledge',
];

const TestimonialData = [
    'John is professionalism and attention to detail are outstanding. We felt safe and well-cared-for throughout our journey.',
    'John is professionalism and attention to detail are outstanding. We felt safe and well-cared-for throughout our journey.',
    'John is professionalism and attention to detail are outstanding. We felt safe and well-cared-for throughout our journey.',
];

const DriverSingle = () => {
    const { id } = useParams();
    const DriverDetail = DriversDetailData.find((item) => String(item.id) === id);

    const ContactData = [
        { Heading: 'Phone:', LinkText: '(+01) 789 854 856', },
        { Heading: 'Email:', LinkText: 'domain@gmail.com', },
        { Heading: 'Position:', Text: 'Senior Chauffeur', },
    ];

    const DetailListData = [
        { Heading: 'Experience :', Text: '18 years', },
        { Heading: 'Specialty :', Text: 'Senior Chauffeur, Airport Transfer', },
        { Heading: 'Language :', Text: 'English, Spanish', },
    ];

    const customPaginationStyles = {
        display: 'flex',
        marginTop: '40px',
    };
    return (
        <>
            <InnerHeader 
                Heading={DriverDetail.heading}
                InnerPageLink='/drivers'
                InnerPageLinkText='Drivers'
                InnerPageSlash='/'
                CurrentPage={DriverDetail.heading}
            />
            <div className='py-28 max-xl:py-20 max-m:py-12'>
                <div className="container">
                    <div className='grid grid-cols-3 gap-8 max-xl:grid-cols-1 max-xl:gap-x-0'>
                        <div className="relative">
                            <div className='sticky top-6 left-0 rounded-3xl overflow-hidden border border-borderPrimary'>
                                <img 
                                    className='w-full h-auto object-cover' 
                                    src={DriverDetail.image} 
                                    alt="driver" 
                                />
                                <div className='p-10 max-xl:p-8 max-m:p-6'>
                                    <div className="border-b border-borderPrimary pb-8 mb-8">
                                        <TitleComponent 
                                            type='h3' 
                                            className='text-white'
                                        >
                                            {DriverDetail.heading}
                                        </TitleComponent>
                                        <TitleComponent 
                                            size='extra-large-normal' 
                                            className='text-paragraphcolor mt-2'
                                        >
                                            {DriverDetail.text}
                                        </TitleComponent>
                                    </div>
                                    <div className='border-b border-borderPrimary pb-8 mb-8'>
                                        <ul className="flex flex-col gap-5 max-m:gap-3">
                                            {ContactData.map(({ Heading, LinkText, Text }, index) => (
                                                <li 
                                                    className='flex items-center gap-2' 
                                                    key={index}
                                                >
                                                    {Heading && 
                                                        <TitleComponent 
                                                            size='large-semibold' 
                                                            className='text-white'
                                                        >
                                                            {Heading}
                                                        </TitleComponent>
                                                    }
                                                    {LinkText && 
                                                        <Link 
                                                            className='text-base font-medium text-paragraphcolor'
                                                        >
                                                            {LinkText}
                                                        </Link>
                                                    }
                                                    {Text && 
                                                        <TitleComponent 
                                                            size='base-medium' 
                                                            className='text-paragraphcolor'
                                                        >
                                                            {Text}
                                                        </TitleComponent>
                                                    }
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='flex items-center flex-wrap gap-6 max-m:gap-5'>
                                        {SocialLinkData.map(({ Icon, to }, index) => (
                                            <Link 
                                                key={index} 
                                                to={to} 
                                                className='flex group'
                                            >
                                                <Icon 
                                                    className='text-primary group-hover:text-white duration-300' 
                                                    size={24} 
                                                />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div>
                                <SectionTitle 
                                    left={true}
                                    title='Introduction'
                                    heading={`${DriverDetail.firstName} Biography`}
                                    headingType='h2'
                                    description='We pride ourselves on having a team of highly skilled and professional drivers dedicated to providing you with the best possible service. Here are some of the top drivers who make your journeys safe, comfortable, and enjoyable:'
                                    descriptionStyles='mb-4 text-paragraphcolor'
                                    descriptionType='base-medium'
                                />
                                <TitleComponent 
                                    size='base-medium' 
                                    className='text-paragraphcolor'
                                >
                                    John brings over 15 years of professional driving experience to our team. His extensive knowledge of the city, coupled with his impeccable driving skills, ensures that you reach your destination safely and on time. John is known for his punctuality and professionalism, making him a favorite among our corporate clients.
                                </TitleComponent>
                                <ul className='flex flex-col gap-6 mt-12'>
                                    {DetailListData.map(({Heading, Text}, index) => (
                                        <li 
                                            className='flex items-center gap-2' 
                                            key={index}
                                        >
                                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary max-m:w-5 max-m:h-5">
                                                <Check 
                                                    scale={16} 
                                                    weight='bold' 
                                                    className='text-white' 
                                                />
                                            </div>
                                            <TitleComponent 
                                                size='large-medium' 
                                                className='text-white flex-1'
                                            >
                                                <span className='font-semibold mr-1'>{Heading}</span>{Text}
                                            </TitleComponent>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mt-12 border-t border-borderPrimary pt-12 max-2xl:mt-8 max-2xl:pt-8'>
                                <SectionTitle 
                                    left={true}
                                    title='Features'
                                    heading='Know about john'
                                    headingType='h2'
                                    description='We pride ourselves on having a team of highly skilled and professional drivers dedicated to providing you with the best possible service.'
                                    descriptionStyles='text-paragraphcolor'
                                />
                                <ul className='grid grid-cols-2 gap-4 max-m:grid-cols-1'>
                                    {FeatureListData.map((service, index) => (
                                        <li 
                                            className='flex items-center gap-2' 
                                            key={index}
                                        >
                                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary max-m:w-5 max-m:h-5">
                                                <Check 
                                                    scale={16} 
                                                    weight='bold' 
                                                    className='text-white' 
                                                />
                                            </div>
                                            <TitleComponent 
                                                size='large-medium' 
                                                className='text-white'
                                            >
                                                {service}
                                            </TitleComponent>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mt-12 border-t border-borderPrimary pt-12 max-2xl:mt-8 max-2xl:pt-8'>
                                <SectionTitle 
                                    left={true}
                                    title='Testimonials'
                                    heading='Customers feedback'
                                    headingType='h2'
                                    headingStyles='mb-8'
                                />
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                        el: '.custom-pagination',
                                        renderBullet: (index, className) =>
                                            `<span class="${className}" style="
                                                width: 12px;
                                                height: 12px;
                                                background-color: rgb(255, 54, 0);
                                                border-radius: 50%;
                                                cursor: pointer;
                                                transition: background-color 0.3s ease, transform 0.3s ease;"></span>`,
                                    }}
                                    className='custom-swiper'
                                >
                                    {TestimonialData.map((Message, index) => (
                                        <SwiperSlide key={index}>
                                            <QuoteIcon />
                                            <TitleComponent 
                                                size='base-medium' 
                                                className='text-paragraphcolor my-6'
                                            >
                                                {Message}
                                            </TitleComponent>
                                            <TitleComponent 
                                                size='extra-large-semibold' 
                                                className='text-white'
                                            >
                                                {DriverDetail.heading}
                                            </TitleComponent>
                                            <TitleComponent 
                                                size='base-normal' 
                                                className='text-paragraphcolor mt-2'
                                            >
                                                customers
                                            </TitleComponent>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div 
                                    className="custom-pagination" 
                                    style={customPaginationStyles} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DriverSingle
