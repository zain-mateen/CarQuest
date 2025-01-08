import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import SliderSec from '../SliderSec/SliderSec'
import { CarData } from '../../Data';
import CarCart from './CarCart';

const FleetSec = () => {
    return (
        <div className='pt-24 pb-12 max-xl:pt-20 max-m:py-12'>
            <div className="container">
                <SectionTitle 
                    wrapperStyles='max-w-[600px] mx-auto mb-12 max-m:mb-8'
                    title='Our Fleets'
                    titleWrapperStyles="animate-fade"
                    heading='Explore our perfect and extensive fleet'
                    headingType='h2'
                    headingStyles="fleet-heading"
                />
                <SliderSec 
                    SwiperClass='animate-fade !pb-24'
                    data={CarData}
                    CartComponent={CarCart}
                    slidesPerView={4} 
                    navigation={true} 
                />
            </div>
        </div>
    )
}

export default FleetSec

