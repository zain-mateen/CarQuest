import React from 'react'
import InnerHeader from '../components/Header/InnerHeader'
import TestimonialSec from '../components/TestimonialSec/TestimonialSec'
import CtaSec from '../components/CtaSec/CtaSec'
import PricingSec from '../components/PricingSec/PricingSec'

const PricingPage = () => {
    return (
        <>
            <InnerHeader 
                Heading='Pricing Plan'
                CurrentPage='Pricing'
            />
            <PricingSec />
            <CtaSec />
            <TestimonialSec />
        </>
    )
}

export default PricingPage
