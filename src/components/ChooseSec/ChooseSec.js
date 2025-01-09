import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle'
import { ChooseUsSecLeftData, ChooseUsSecRightData } from '../../Data';

import ChooseUsImage from '../../images/choose-us-img.webp'
import AboutSecCart from '../AboutSec/AboutSecCart';

const ChooseSec = () => {
    return (
        <div className='ChooseSec relative py-24 bg-choose-us-bg bg-contain bg-center bg-no-repeat z-10 max-xl:py-20 max-m:py-12 max-xl:bg-none'>
            <div className="container relative z-10">
                <SectionTitle 
                    wrapperStyles='max-w-[600px] mx-auto mb-12 max-m:mb-8'
                    title='Why Choose Us'
                    titleWrapperStyles="animate-fade"
                    heading='Unmatched quality and service for your needs'
                    headingType='h2'
                    headingStyles="choose-heading"
                />
                <div className="grid grid-cols-3 items-center gap-6 max-xl:flex max-xl:flex-wrap max-xl:gap-x-0 max-xl:items-baseline max-xl:justify-center">
                    <div className='animate-fade flex flex-col gap-6 max-xl:order-1 max-xl:w-1/2 max-xl:pr-4 max-l:w-full max-m:p-0'>
                        {ChooseUsSecLeftData.map((item, index) => (
                            <AboutSecCart   
                                afterStyles='after:w-10 after:h-10'  
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                    <div className='animate-scale max-xl:order-3'>
                        <img src={ChooseUsImage} alt="Choose Us img" />
                    </div>
                    <div className='animate-fade flex flex-col gap-6 max-xl:order-2 max-xl:w-1/2 max-xl:pl-4 max-l:w-full max-l:order-3 max-m:p-0'>
                        {ChooseUsSecRightData.map((item, index) => (
                            <AboutSecCart 
                                afterStyles='after:w-10 after:h-10'  
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseSec
