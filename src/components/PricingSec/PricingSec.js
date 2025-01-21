import React from 'react'

import PricingCart from './PricingCart'
import { PricingData } from '../../Data'

const PricingSec = () => {
    return (
        <div className='py-28 max-xl:py-20 max-m:py-12'>
            <div className="container">
                <div className="grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-m:grid-cols-1">
                    {PricingData.map((data, index) => (
                        <PricingCart key={index} data={data} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PricingSec
