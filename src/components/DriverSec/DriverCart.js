import React from 'react'
import { Link } from 'react-router-dom'
import TitleComponent from '../TitleComponent/TitleComponent'
import { TeamSocialLinks } from '../../Data'

const DriverCart = ({ data }) => {
    return (
        <div key={data.index} className='animate-fade flex flex-col gap-5 group'>
            <div className="relative overflow-hidden rounded-[20px]">
                <img className='w-full h-full object-cover duration-500 group-hover:scale-110' src={data.image} alt={`${data.heading} img`} />
                <div className="absolute -bottom-10 left-1/2 translate-x-[-50%] opacity-0 invisible backdrop-blur-[30px] rounded-[30px] duration-500 group-hover:bottom-5 group-hover:opacity-100 group-hover:visible">
                    <div className='flex items-center justify-between gap-5 py-3 px-6 max-2xl:gap-4'>
                        {TeamSocialLinks.map(({ Icon, link }, index) => (
                            <Link key={index} to={link}>
                                <Icon className='text-white hover:text-primary duration-300 max-2xl:w-5' size={24} weight='fill' />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-center">
                <Link 
                    className='text-xl font-semibold text-white duration-500 hover:text-primary'
                    to={`/drivers/${data.id}`}
                >
                    {data.heading}
                </Link>
                <TitleComponent size='base-normal' className='text-paragraphcolor mt-1'>
                    {data.text}
                </TitleComponent>
            </div>
        </div>
    )
}

export default DriverCart
