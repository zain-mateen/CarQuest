import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { TestimonialData } from '../../Data'
import SliderSec from '../SliderSec/SliderSec'
import TestimonialCart from './TestimonialCart'

const TestimonialSec = () => {
    return (
        <div className='py-28 max-xl:py-20 max-m:py-12'>
            <div className="container relative">
                <div className='absolute top-0 left-0 w-full h-full bg-testimonial-bg bg-center bg-no-repeat bg-cover z-[-1]' />
                <SectionTitle
                    wrapperStyles='max-w-[600px] mx-auto mb-12 max-m:mb-8' 
                    title='Testimonials'
                    titleWrapperStyles="animate-fade"
                    heading='What our customers are saying about us'
                    headingType='h2'
                    headingStyles="testimonial-heading"
                />
                <SliderSec 
                    SwiperClass='animate-fade !pb-24'
                    data={TestimonialData}
                    CartComponent={TestimonialCart}
                    slidesPerView={2} 
                    navigation={true} 
                />
            </div>
        </div>
    )
}

export default TestimonialSec
