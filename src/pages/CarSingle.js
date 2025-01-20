import React from 'react'
import InnerHeader from '../components/Header/InnerHeader'
import TitleComponent from '../components/TitleComponent/TitleComponent';

import doorIcon from '../images/icon-door.svg';
import passengerIcon from '../images/icon-passengers.svg';
import transmissionIcon from '../images/icon-transmission.svg';
import ageIcon from '../images/icon-age.svg';
import luggageIcon from '../images/icon-bags.svg';
import airConditionIcon from '../images/icon-aircondition.svg';
import SwiperImage1 from '../images/fleets-slider-img-1.webp'
import SwiperImage2 from '../images/fleets-slider-img-2.webp'
import SwiperImage3 from '../images/fleets-slider-img-3.webp'
import SwiperImage4 from '../images/fleets-slider-img-4.webp'

import ThemeButton from '../components/ThemeButton/ThemeButton';
import { Link, useParams } from 'react-router-dom';
import { Check, WhatsappLogo } from 'phosphor-react';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import { ClockIcon, LockIcon } from '../components/SvgIcons/SvgIcons';
import Accordion from '../components/Accordion/Accordion';
import { CarSingleData, FaqData } from '../Data';
import SliderSec from '../components/SliderSec/SliderSec';

const carDetails = [
    { icon: doorIcon, label: 'Doors', value: 4 },
    { icon: passengerIcon, label: 'Passengers', value: 2 },
    { icon: transmissionIcon, label: 'Transmission', value: 'Auto' },
    { icon: ageIcon, label: 'Age', value: 6 },
    { icon: luggageIcon, label: 'Luggage', value: 1 },
    { icon: airConditionIcon, label: 'Air Condition', value: 'Yes' },
];

const  SwiperData = [
    { image: SwiperImage1, },
    { image: SwiperImage2, },
    { image: SwiperImage3, },
    { image: SwiperImage4, },
]

const ListData = [
    '24/7 Roadside Assistance',
    'Free Cancellation & Return',
    'Rent Now Pay When You Arrive',
];

const AmenitiesListData = [
    'Music System',
    'Toolkit',
    'Abs System',
    'Bluetooth',
    'Full Boot Space',
    'Usb Charger',
    'Aux Input',
    'Spare Tyre',
    'Power Steering',
    'Power Windows',
];

export const CarSliderCart = ({ data }) => {
    return (
        <img
            className="w-full h-auto rounded-[46px] max-l:rounded-3xl"
            src={data.image}
            alt="img"
        />
    )
}

const CarSingle = () => {
    const { id } = useParams();
    const carDetail = CarSingleData.find((item) => item.id === id)

    if (!carDetail) {
        return <h2>Service Detail not found</h2>;
    }

    const PolicyAndAgreementData = FaqData.PolicyAndAgreementData;
    
    return (
        <>
            <InnerHeader 
                Heading= {carDetail.heading}
                InnerPageLink= '/cars'
                InnerPageLinkText= 'Cars'
                InnerPageSlash= '/'
                CurrentPage={carDetail.heading}
            />
            <div className='single-car-page py-28 max-xl:py-20 max-m:py-12'>
                <div className="container">
                    <div className="grid grid-cols-3 gap-8 max-3xl:gap-10 max-2xl:gap-6 max-xl:grid-cols-1 max-xl:gap-x-0">
                        <div className="relative">
                            <div className='sticky top-24 left-0 p-6 rounded-3xl bg-secondary max-m:px-5'>
                                <h2 className='text-[50px] font-bold text-white max-m:text-[32px]'>$248
                                    <span className='text-base font-medium text-paragraphcolor'>/per Day</span>
                                </h2>
                                <ul className='flex flex-col gap-4 border-y border-borderPrimary py-6 mt-4 max-m:pt-4 max-m:mt-3'>
                                    {carDetails.map((detail, index) => (
                                        <li key={index} className='flex items-center justify-between'>
                                            <label className='flex items-center gap-3'>
                                                <img className='w-5' src={detail.icon} alt="door icon" />
                                                <TitleComponent size='base-medium' className='text-white'>{detail.label}</TitleComponent>
                                            </label>
                                            <TitleComponent size='base-medium' className='text-white'>{detail.value}</TitleComponent>
                                        </li>
                                    ))}
                                </ul>
                                <div className='flex items-center justify-between pt-6'>
                                    <ThemeButton variant='primary'>Book Now</ThemeButton>
                                    <TitleComponent size='base-medium' className='text-paragraphcolor'>OR</TitleComponent>
                                    <Link
                                        className='flex items-center justify-center w-12 h-12 bg-primary rounded-full duration-500 hover:bg-black'
                                        to='/'
                                    >
                                        <WhatsappLogo size={30} className='text-white' />    
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <SliderSec 
                                data={SwiperData}
                                slidesPerView={1}
                                CartComponent={CarSliderCart}
                                navigation={false}
                                pagination={true}
                            />
                            <div className="grid grid-cols-2 gap-8 border border-borderPrimary p-6 rounded-3xl my-12 max-2xl:my-8 max-l:grid-cols-1">
                                <div className='flex gap-7 max-m:gap-5'>
                                    <div className='after:content-[""] after:absolute after:top-[-5px] after:left-[-5px] after:w-10 after:h-10 after:bg-primary after:rounded-full after:z-[-1] after:opacity-10 after:duration-300 relative '>
                                        <ClockIcon />
                                    </div>
                                    <div className="box_body flex-1">
                                        <Link className='text-xl font-semibold text-white duration-300 hover:text-primary' to='/'>Unlimited KMs</Link>
                                        <TitleComponent size='base-normal' className='mt-2.5 text-paragraphcolor'>Endless Km with no extra charge</TitleComponent>
                                    </div>
                                </div>
                                <div className='flex gap-7 max-m:gap-5'>
                                    <div className='after:content-[""] after:absolute after:top-[-5px] after:left-[-5px] after:w-10 after:h-10 after:bg-primary after:rounded-full after:z-[-1] after:opacity-10 after:duration-300 relative '>
                                        <LockIcon />
                                    </div>
                                    <div className="box_body flex-1">
                                        <Link className='text-xl font-semibold text-white duration-300 hover:text-primary' to='/'>Unlimited KMs</Link>
                                        <TitleComponent size='base-normal' className='mt-2.5 text-paragraphcolor'>Endless Km with no extra charge</TitleComponent>
                                    </div>
                                </div>
                            </div>
                            <SectionTitle 
                                left={true}
                                title='General Information'
                                heading='Know about our car service'
                                headingType='h2'
                                description='Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation porttitor orci sit amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen morbinetion consesua the risus consequation the porttiton.'
                                descriptionStyles='text-paragraphcolor'
                            />
                            <ul className='flex flex-col gap-4'>
                                {ListData.map((service, index) => (
                                    <li className='flex items-center gap-2' key={index}>
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary max-m:w-5 max-m:h-5">
                                            <Check scale={16} weight='bold' className='text-white' />
                                        </div>
                                        <TitleComponent size='large-medium' className='text-white flex-1'>{service}</TitleComponent>
                                    </li>
                                ))}
                            </ul>
                            <div className='py-12 border-y border-borderPrimary my-12 max-2xl:py-8 max-2xl:my-8'>
                                <SectionTitle 
                                    left={true}
                                    title='Amenities'
                                    heading='Premium amenities and features'
                                    headingType='h2'
                                />
                                <ul className='grid grid-cols-4 gap-5 mt-10 max-l:grid-cols-2'>
                                    {AmenitiesListData.map((service, index) => (
                                        <li className='flex items-center gap-2' key={index}>
                                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary max-m:w-5 max-m:h-5">
                                                <Check scale={16} weight='bold' className='text-white' />
                                            </div>
                                            <TitleComponent size='large-medium' className='text-white flex-1'>{service}</TitleComponent>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <SectionTitle 
                                wrapperStyles='mb-10'
                                left={true}
                                title='Rental Conditions'
                                heading='Policies and agreement'
                                headingType='h2'
                            />
                            <Accordion item={PolicyAndAgreementData} variant='secondary' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarSingle;
