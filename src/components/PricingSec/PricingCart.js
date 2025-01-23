import React from 'react'

import TitleComponent from '../TitleComponent/TitleComponent'
import ThemeButton from '../ThemeButton/ThemeButton'

const PricingCart = ({ data }) => {
    return (
        <div 
            className={`${data.pricingCartStyles} p-12 border border-borderPrimary rounded-3xl text-center max-xl:p-10 max-l:py-6 max-l:px-3`}
            key={data.index}
        >
            <img 
                className='mb-10 max-l:mb-6' 
                src={data.carImage} 
                alt={`${data.heading}Car img`} 
            />
            <p className={`${data.headingStyles} text-xl font-bold text-white`}>
                {data.heading}
            </p>
            <TitleComponent 
                size='small-normal' 
                className={`${data.descriptionStyles} mt-4 mb-10 text-paragraphcolor max-l:mt-2 max-l:mb-6`}
            >
                {data.description}
            </TitleComponent>
            <TitleComponent 
                size='large-normal' 
                className={`${data.priceStyles} text-paragraphcolor`}
            >
                <span className={`${data.priceStyles} text-[40px] font-bold text-white max-l:text-[28px]`}>
                    $
                </span>
                <span className={`${data.priceStyles} text-[60px] font-bold text-white max-l:text-[40px]`}>
                    {data.price}
                </span>
                / Hours
            </TitleComponent>
            <div className="mt-10 max-l:mt-6">
                <ThemeButton 
                    variant={data.buttonVariant}
                >
                    Book Arental
                </ThemeButton>
            </div>
        </div>
    )
}

export default PricingCart
