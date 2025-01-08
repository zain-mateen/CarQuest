import React from 'react'

import SectionTitle from '../SectionTitle/SectionTitle'
import ServiceCart from './ServiceCart'
import ThemeButton from '../ThemeButton/ThemeButton'
import TitleComponent from '../TitleComponent/TitleComponent'
import { ServiceData } from '../../Data'

const ServiceSec = () => {
    return (
        <div className='bg-secondary py-28 max-xl:py-20 max-m:py-12 relative'>
            <div className="container">
                <SectionTitle 
                    wrapperStyles='max-w-[600px] mx-auto mb-12 max-m:mb-8'
                    title='Our Services'
                    titleWrapperStyles="animate-fade"
                    heading='Explore our wide range of rental services'
                    headingType='h2'
                    headingStyles="services-heading"
                />
                <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-l:grid-cols-1">
                    {ServiceData.slice(0, 4).map((data, index) => (
                        <ServiceCart key={index} data={data} />
                    ))}
                </div>
                <div className='max-w-[600px] mx-auto mt-12 text-center max-m:mt-8'>
                    <TitleComponent size='small-normal' className='animate-fade text-paragraphcolor mb-5'>
                        Discover our range of car rental services designed to meet all your travel needs. From a diverse fleet of vehicles to flexible rental plans.
                    </TitleComponent>
                    <ThemeButton className="animate-fade" variant='primary'>View All Services</ThemeButton>
                </div>
            </div>
        </div>
    )
}

export default ServiceSec
