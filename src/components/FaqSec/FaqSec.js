import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import Accordion from '../Accordion/Accordion';
import { FaqData } from '../../Data'

import faqImage from '../../images/faq-img.webp'

const FaqSec = () => {
    const FaqSecDropdownData = FaqData.FaqSecDropdownData;

    return (
        <div className='bg-secondary py-24 max-xl:py-20 max-m:py-12'>
             <div className="container">
                <div className="grid grid-cols-2 items-center gap-6 px-5 max-xl:flex max-xl:flex-col-reverse">
                    <img className='animate-scale w-full' src={faqImage} alt="FAQ img" />
                    <div className='content'>
                        <SectionTitle 
                            left={true}
                            title='Frequently Asked Questions'
                            titleWrapperStyles="animate-fade"
                            heading='Everything you need to know about ourservices'
                            headingType='h2'
                            headingStyles='faq-heading mb-10'
                        />
                        <Accordion item={FaqSecDropdownData} variant='primary' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqSec
