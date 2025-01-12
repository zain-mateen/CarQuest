import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import ThemeButton from '../ThemeButton/ThemeButton'

import img from '../../images/cta-car-img.webp'
import MarqueeSlider from '../MarqueeSlider/MarqueeSlider'

const CtaSec = () => {
    return (
        <div className='relative bg-secondary bg-cta-box-bg bg-cover bg-no-repeat bg-center py-24 max-xl:py-20 max-m:py-12'>
            <div className='flex flex-col gap-2 absolute top-0 left-0 py-3 h-full justify-between w-full overflow-hidden'>
                <MarqueeSlider 
                    MarqueeText="Let's Connect"
                    initialDirection={1}
                    MarqueeTextStyles='text-[16px] font-black !capitalize leading-[24px] opacity-30'
                />
                <MarqueeSlider 
                    MarqueeText="Let's Connect"
                    initialDirection={-1}
                    MarqueeTextStyles='text-[16px] font-black !capitalize leading-[24px] opacity-30'
                />
            </div>
            <div className="container relative z-10">
                <div className='grid grid-cols-2 items-center gap-6 max-l:grid-cols-1'>
                    <div className='pr-24 max-3xl:p-0'>
                        <SectionTitle 
                            left={true}
                            heading='Ready to hit the road? Book your car today !'
                            headingType='h2'
                            headingStyles='cta-heading text-white'
                            description='Our friendly customer service team is here to help. Contact us anytime for support and inquiries.'
                            descriptionType='small-normal'
                            descriptionStyles='animate-fade text-white/[75%]'
                        />
                        <div className='animate-fade'>
                            <ThemeButton variant='secondary'>Contact Us</ThemeButton>
                        </div>
                    </div>
                    <img className='animate-scale' src={img} alt="White Car img" />
                </div>
            </div>
        </div>
    )
}

export default CtaSec
