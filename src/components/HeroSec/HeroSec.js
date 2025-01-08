import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import ThemeButton from '../ThemeButton/ThemeButton'
import SectionTitle from '../SectionTitle/SectionTitle';
import ThemeInput from '../ThemeInput/ThemeInput';
import { HeroFormData } from '../../Data';

const HeroSec = () => {
    return (
        <div className="hero-sec relative mt-16">
            <div className='bg-hero-gradient bg-cover bg-center bg-no-repeat relative px-3 pt-32 pb-80 max-2xl:pb-60 max-xl:pt-24 max-xl:pb-28 max-m:pt-12 max-m:pb-12'>
                <div className='max-w-[930px] w-full mx-auto text-center relative z-50'>
                    <SectionTitle
                        titleBg={true}
                        titleText={true}
                        title="Welcome To Car Rent"
                        titleWrapperStyles="hero1-title"
                        heading="Looking to save more on your rental car?"
                        headingType="h1"
                        headingStyles="text-white hero1-heading"
                        descriptionType="large-medium"
                        description="Whether you're planning a weekend getaway, a business trip, or just need a reliable ride for the day, we offers a wide range of vehicles to suit your needs."
                        descriptionStyles="hero1-desc text-white max-w-[740px] w-full mx-auto max-m:!text-sm"
                    />
                    <div className='hero1-button flex flex-wrap items-center justify-center gap-5'>
                        <ThemeButton variant='primary'>Book a Rental</ThemeButton>
                        <ThemeButton variant='secondary'>Book a Rental</ThemeButton>
                    </div>
                </div>
            </div>
            <div className='hero-form absolute left-0 bottom-14 w-full z-50 max-2xl:bottom-10 max-xl:relative max-xl:bottom-auto max-xl:mt-10'>
                <div className="container">
                    <form className="flex items-center gap-5 bg-secondary rounded-3xl py-5 px-7 mx-auto max-w-[1300px] max-2xl:flex-col max-2xl:items-baseline max-xl:border max-xl:border-borderPrimary max-xl:gap-6 max-m:px-3 max-m:py-5 max-m:rounded-xl">
                        <TitleComponent size="large-semibold" className="hero2-heading text-white max-w-[150px] max-2xl:max-w-full">
                            Need to Rent a Luxury Car?
                        </TitleComponent>
                        <div className="flex items-center gap-5 max-xl:flex-col max-xl:items-baseline max-xl:w-full">
                            <div className="grid grid-cols-4 items-center gap-5 flex-1 max-xl:grid-cols-2 max-xl:w-full max-m:grid-cols-1">
                                {HeroFormData.map((field, index) => (
                                    <ThemeInput key={index} {...field} />
                                ))}
                            </div>
                            <div>
                                <ThemeButton variant="primary">Send</ThemeButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HeroSec;