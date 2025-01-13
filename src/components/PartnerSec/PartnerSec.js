import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { partnerSecData } from '../../Data'

const PartnerSec = () => {
    return (
        <div className='bg-secondary py-28 relative max-xl:py-20 max-m:py-12'>
            <div className="container">
                <SectionTitle
                    wrapperStyles='max-w-[600px] mx-auto mb-12 max-m:mb-8' 
                    title='Executive Partners'
                    titleWrapperStyles="animate-fade"
                    heading='Trusted by leading brands'
                    headingType='h2'
                    headingStyles="partner-heading"
                />
                <div className="grid grid-cols-4 gap-6 relative z-10 max-2xl:gap-5 max-xl:grid-cols-2 max-m:gap-y-4 max-m:gap-x-3">
                    {partnerSecData.map((icons, index) => (
                        <div 
                            key={index}
                            className='animate-fade flex items-center justify-center h-[100px] w-full p-4 bg-black rounded-3xl shadow-md max-m:rounded-xl'
                        >
                            <img className='h-10 w-auto object-contain' src={icons.icon} alt="Partner Icon" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PartnerSec
