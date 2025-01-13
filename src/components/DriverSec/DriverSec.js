import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import DriverCart from './DriverCart'
import { DriversData } from '../../Data'

const DriverSec = () => {
    return (
        <div className='bg-secondary py-28 max-xl:py-20 max-m:py-12'>
            <div className="container">
                <SectionTitle 
                    wrapperStyles='max-w-[600px] mx-auto mb-12 max-m:mb-8'
                    title='Our Experienced Drivers'
                    titleWrapperStyles="animate-fade"
                    heading='Ensuring your safety and comfort on every journey'
                    headingStyles="drivers-heading"
                    headingType='h2'
                />
                <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-m:grid-cols-1">
                    {DriversData.slice(0, 4).map((data, index) => (
                        <DriverCart key={index} data={data} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DriverSec
