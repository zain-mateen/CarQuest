import React from 'react'
import InnerHeader from '../components/Header/InnerHeader'
import { CarTypeData } from '../Data'
import CollectionCart from '../components/CollectionSec/CollectionCart'

const CarType = () => {
    return (
        <>
            <InnerHeader 
                Heading='Car Type'
                CurrentPage='Car Type'
            />
            <div className='car-type-sec py-28 max-xl:py-20 max-m:py-12'>
                <div className="container">
                    <div className="grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-l:gap-6 max-m:grid-cols-1">
                        {CarTypeData.map((data, index) => (
                            <CollectionCart key={index} data={data} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarType
