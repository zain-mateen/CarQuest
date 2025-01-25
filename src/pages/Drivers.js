import React from 'react'
import InnerHeader from '../components/Header/InnerHeader'
import { DriversData } from '../Data'
import DriverCart from '../components/DriverSec/DriverCart'

const Drivers = () => {
    return (
        <>
            <InnerHeader 
                Heading='Our Drivers'
                CurrentPage='Drivers'
            />
            <div className='blog-page-sec py-28 max-xl:py-20 max-m:py-12'>
                <div className="container">
                    <div className='grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-m:grid-cols-1'>
                        {DriversData.map((data, index) => (
                            <DriverCart key={index} data={data} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Drivers
