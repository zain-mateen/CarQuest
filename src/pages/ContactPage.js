import React from 'react'
import InnerHeader from '../components/Header/InnerHeader'
import TitleComponent from '../components/TitleComponent/TitleComponent'
import { TeamSocialLinks } from '../Data'
import { Link } from 'react-router-dom'
import { PhoneCall, EnvelopeSimple, MapPin } from 'phosphor-react'

import ContactInformationImage from '../images/contact-information-bg.svg'
import ArrowImage from '../images/contact-form-plan.svg'
import ThemeButton from '../components/ThemeButton/ThemeButton'
import SectionTitle from '../components/SectionTitle/SectionTitle'

const ContactPage = () => {

    const ContactData = [
        { ctaText: '(+01) 789 854 856', Icon: PhoneCall },
        { ctaText: 'info@example.com', Icon: EnvelopeSimple },
        { ctaText: '1234 Elm Street, Suite 567 Springfield, United States', Icon: MapPin }
    ]

    return (
        <>
            <InnerHeader 
                Heading='Contact Us'
                CurrentPage='Contact Us'
            />
            <div className='pt-28 max-xl:pt-20 max-m:pt-12'>
                <div className="container">
                    <div className='grid grid-cols-2 gap-6 p-12 border border-solid border-white/[20%] rounded-3xl relative max-xl:grid-cols-1 max-xl:gap-x-0 max-l:border-none max-l:p-0'>
                        <div className="p-10 bg-secondary rounded-2xl relative max-l:p-5">
                            <div className="relative z-10">
                                <TitleComponent type='h2' className='text-white'>Contact information</TitleComponent>
                                <TitleComponent size='base-normal' className='text-white mt-3'>Say something to start a live chat!</TitleComponent>
                                <ul className="flex flex-col gap-5 my-20 max-l:my-10 max-l:gap-4">
                                    {ContactData.map(({ Icon, ctaText }, index) => (
                                        <li className='flex items-center gap-3' key={index}>
                                            <Icon className='text-white group-hover:text-primary duration-300 max-l:w-8' size={40} />
                                            <Link className='text-base font-medium text-white flex-1'>{ctaText}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className='flex items-center gap-6'>
                                    {TeamSocialLinks.map(({ Icon, to }, index) => (
                                        <Link key={index} to={to} className='flex group'>
                                            <Icon className='text-white group-hover:text-primary duration-300' size={30} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0">
                                <img src={ContactInformationImage} alt="" />
                            </div>
                        </div>
                        <form className='flex flex-col gap-6'>
                            <div className="grid grid-cols-2 items-center gap-5 max-l:grid-cols-1">
                                <div className='flex flex-col gap-3 border-b border-solid border-secondary'>
                                    <label 
                                        className='text-base font-semibold text-white' 
                                        htmlFor="firstName"
                                    >
                                        Full Name
                                    </label>
                                    <input 
                                        className='text-base font-semibold py-2 duration-300 bg-transparent outline-none placeholder:text-paragraphcolor focus:outline-none focus:border-black' 
                                        type='name' 
                                        id='name' 
                                        placeholder='Enter Your Name' 
                                    />
                                </div>
                                <div className='flex flex-col gap-3 border-b border-solid border-secondary'>
                                    <label 
                                        className='text-base font-semibold text-white' 
                                        htmlFor="lastName"
                                    >
                                        Last Name
                                    </label>
                                    <input 
                                        className='text-base font-semibold py-2 duration-300 bg-transparent outline-none placeholder:text-paragraphcolor focus:outline-none focus:border-black' 
                                        type='name' 
                                        id='name' 
                                        placeholder='Enter Your Name' 
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 items-center gap-5 max-l:grid-cols-1">
                                <div className='flex flex-col gap-3 border-b border-solid border-secondary'>
                                    <label 
                                        className='text-base font-semibold text-white' 
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input 
                                        className='text-base font-semibold py-2 duration-300 bg-transparent outline-none placeholder:text-paragraphcolor focus:outline-none focus:border-black' 
                                        type='email' 
                                        id='name' 
                                        placeholder='Enter Your Email' 
                                    />
                                </div>
                                <div className='flex flex-col gap-3 border-b border-solid border-secondary'>
                                    <label 
                                        className='text-base font-semibold text-white' 
                                        htmlFor="phone"
                                    >
                                        Phone
                                    </label>
                                    <input 
                                        className='text-base font-semibold py-2 duration-300 bg-transparent outline-none placeholder:text-paragraphcolor focus:outline-none focus:border-black' 
                                        type='phone' 
                                        id='name' 
                                        placeholder='Enter Your Phone' 
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 border-b border-solid border-secondary">
                                <label 
                                    className='text-base font-semibold text-white' 
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea 
                                    id="message" 
                                    placeholder="Enter Your Message" 
                                    rows="4" 
                                    className='text-base h-[200px] font-semibold py-2 duration-300 bg-transparent outline-none resize-none placeholder:text-paragraphcolor focus:outline-none focus:border-black' 
                                />
                            </div>
                            <div className=''>
                                <ThemeButton variant='primary'>Send Message</ThemeButton>
                            </div>
                        </form>
                        <div className="absolute bottom-0 right-0 z-[-1] max-xl:hidden">
                            <img src={ArrowImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-28 max-xl:py-20 max-m:py-12">
                <SectionTitle 
                    wrapperStyles='max-w-[600px] mx-auto mb-12 max-m:mb-8'
                    title='Location'
                    heading='How to reach our location'
                    headingType='h2'
                />
                <div className="loation-map">
                    <iframe 
                        className='w-full h-[550px] max-l:h-[400px] max-m:h-[300px]'
                        loading="lazy" 
                        src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" 
                        title="London Eye, London, United Kingdom" 
                        aria-label="London Eye, London, United Kingdom"
                    />
                </div>
            </div>
        </>
    )
}

export default ContactPage
