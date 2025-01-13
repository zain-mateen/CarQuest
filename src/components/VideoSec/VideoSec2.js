import React from 'react'
import { Link } from 'react-router-dom'
import { Play, Plus } from 'phosphor-react'

import SectionTitle from '../SectionTitle/SectionTitle'
import TitleComponent from '../TitleComponent/TitleComponent'

import VideoImage1 from '../../images/video-counter-img-1.webp'
import VideoImage2 from '../../images/video-counter-img-2.webp'
import Author1 from '../../images/author-1.webp';
import Author2 from '../../images/author-2.webp';
import Author3 from '../../images/author-3.webp';
import Author4 from '../../images/author-4.webp';

const VideoSec2 = () => {
    return (
        <>
        <div className='bg-secondary py-28 max-xl:py-20 max-m:py-12'>
            <div className="container">
                <SectionTitle 
                    wrapperStyles='max-w-[700px] mx-auto mb-12 max-m:mb-8'
                    title='Watch Our Video'
                    titleWrapperStyles="animate-fade"    
                    heading='Discover what sets us apart in the car rental industry'
                    headingStyles="about-video-heading"
                    headingType='h2'
                />
                <div className="grid grid-cols-3 gap-6 max-l:grid-cols-1 max-l:gap-x-0">
                    <div className='animate-fade relative rounded-[20px] max-l:h-80 overflow-hidden'>
                        <img className='w-full h-full object-cover' src={VideoImage1} alt="video img" />
                        <div className="absolute top-10 left-12 max-2xl:top-5 max-2xl:left-6">
                            <p className='text-[40px] font-semibold text-white'>3100+</p>
                            <TitleComponent size='base-normal' className='text-white'>satisfied customer</TitleComponent>
                        </div>
                        <div className="absolute left-12 bottom-10 max-2xl:bottom-5 max-2xl:left-6">
                            <ul className='relative flex items-center '>
                                {[ Author1, Author2, Author3, Author4 ].map((author, index) => (
                                    <img 
                                        key={index}
                                        className={`w-[50px] h-[50px] rounded-full relative border-4 border-white duration-500 hover:z-10 hover:scale-110 hover:-translate-y-2 max-2xl:w-12 max-2xl:h-12 ${index > 0 ? 'ml-[-20px]' : ''}`} 
                                        src={author} 
                                        alt="Author img" 
                                    />
                                ))}
                                <div 
                                    className='flex items-center justify-center w-[50px] h-[50px] bg-white rounded-full ml-[-20px] relative duration-500 hover:z-10 hover:scale-110 hover:-translate-y-2 max-2xl:w-12 max-2xl:h-12'
                                >
                                    <Plus size={32} weight='bold' className='text-primary max-2xl:w-6' />
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className='animate-fade relative col-span-2'>
                        <img className='w-full h-auto object-cover rounded-[20px]' src={VideoImage2} alt="video img" />
                        <div className="absolute -bottom-14 right-0 max-2xl:-bottom-12 max-xl:-bottom-10 max-m:-bottom-6">
                            <Link className='flex items-center justify-center w-28 h-28 bg-primary rounded-full border-[12px] border-[#FFF8F6] max-2xl:w-24 max-2xl:h-24 max-2xl:border-8 max-xl:w-20 max-xl:h-20 max-m:w-12 max-m:h-12 max-m:border-4' to='/'>
                                <Play size={32} weight='fill' className='text-white max-m:w-5' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default VideoSec2
