import React from 'react'
import { Link } from 'react-router-dom'
import TitleComponent from '../TitleComponent/TitleComponent'
import { ArrowRight } from 'phosphor-react';

const ServiceCart = ({ data }) => {
    const IconComponent = data.icon || (() => <div>Icon not found</div>);

    return (
        <Link to={`/service/${data.id}`} className="animate-fade py-6 px-8 bg-black rounded-[20px] border border-white/[30%] relative overflow-hidden group max-2xl:px-5 ">
            <div 
                className='absolute bottom-[-100%] left-0 w-full h-full bg-primary origin-bottom transition-all duration-500 group-hover:bottom-0'
            />
            <div className="relative z-2">
                <div className="relative mb-10 transition-all duration-300 max-2xl:mb-8">
                    <IconComponent svgStyles={data.svgStyles} />
                    <div 
                        className="absolute top-[-10px] left-[-10px] bg-primary opacity-10 rounded-full w-14 h-14 transition-all duration-300 ease-in-out group-hover:bg-black group-hover:opacity-[100%]" 
                    />
                </div>
                <div className="content">
                    <TitleComponent size='base-normal' className='text-white transition-all duration-300 ease-in-out hover:text-primary group-hover:text-white max-m:text-xl'>
                        {data.heading}
                    </TitleComponent>
                    <TitleComponent size='small-normal' className='text-paragraphcolor mt-3 transition-all duration-300 ease-in-out group-hover:text-white'>
                        {data.description || 'Default description'}
                    </TitleComponent>
                    <button className='flex items-center justify-center w-14 h-14 bg-primary rounded-full text-white rotate-[-45deg] mt-4 transition-all duration-500 group-hover:bg-black group-hover:rotate-0 max-2xl:w-10 max-2xl:h-10'>
                        <ArrowRight size={24} weight='bold' className='max-2xl:w-[18px]' />
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default ServiceCart
