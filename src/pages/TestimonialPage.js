import React from 'react'
import InnerHeader from '../components/Header/InnerHeader'
import { TestimonialData } from '../Data'
import TestimonialCart from '../components/TestimonialSec/TestimonialCart'

const TestimonialPage = () => {
    const columns = 3;
    const totalItems = TestimonialData.length;
    const baseItemsPerColumn = Math.floor(totalItems / columns);
    const remainder = totalItems % columns;

    const columnData = Array.from({ length: columns }, (_, index) => {
        const startIndex =
            index * baseItemsPerColumn + Math.min(index, remainder);
        const endIndex = startIndex + baseItemsPerColumn + (index < remainder ? 1 : 0);
        return TestimonialData.slice(startIndex, endIndex);
    });

    return (
        <>
            <InnerHeader 
                Heading='Testimonials'
                CurrentPage='Testimonials'
            />
            <div className='py-28 max-xl:py-20 max-m:py-12'>
                <div className="container">
                    <div className="grid grid-cols-3 gap-8 max-2xl:gap-6 max-xl:grid-cols-2 max-m:grid-cols-1">
                        {columnData.map((column, columnIndex) => (
                            <div key={columnIndex} className="flex flex-col gap-6">
                                {column.map((data, index) => (
                                    <TestimonialCart key={index} data={data} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialPage
