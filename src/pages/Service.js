import React from 'react'
import InnerHeader from '../components/Header/InnerHeader'
import PartnerSec from '../components/PartnerSec/PartnerSec'
import TestimonialSec from '../components/TestimonialSec/TestimonialSec'
import ServiceSecCart from '../components/ServiceSec/ServiceCart'
import { ServiceData } from '../Data'

const Service = () => {
    return (
        <>
            <InnerHeader 
                Heading='Service'
                CurrentPage='Service'
            />
            <div className="service-page-sec py-28 max-xl:py-20 max-m:py-12">
                <div className="container">
                    <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-l:grid-cols-1">
                        {ServiceData.map((data, index) => (
                            <ServiceSecCart key={index} data={data} />
                        ))}
                    </div>
                </div>
            </div>
            <PartnerSec />
            <TestimonialSec />
        </>
    )
}

export default Service
