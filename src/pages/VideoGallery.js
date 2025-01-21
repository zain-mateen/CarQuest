import React from 'react'
import InnerHeader from '../components/Header/InnerHeader'
import { VideoGalleryData } from '../Data'
import { Link } from 'react-router-dom'
import { Play } from 'phosphor-react'

const VideoGallery = () => {
    return (
        <>
            <InnerHeader 
                Heading='Video Gallery'
                CurrentPage='Video Gallery'
            />
            <div className='py-28 max-xl:py-20 max-m:py-12'>
                <div className="container">
                    <div className="grid grid-cols-3 gap-8 max-2xl:gap-6 max-xl:grid-cols-2 max-m:grid-cols-1">
                        {VideoGalleryData.map((item, index) => (
                            <Link 
                                className="relative overflow-hidden rounded-3xl max-m:rounded-xl duration-500 group" 
                                key={index}
                                to='https://www.youtube.com/'
                                target='_blank'
                            >
                                <span className='after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-60 after:scale-0 after:duration-500 group-hover:after:scale-100 w-full h-full' />
                                <img className='w-full object-cover' src={item.Image} alt="car img" />
                                <div className='flex items-center justify-center w-14 h-14 bg-primary rounded-full z-10 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] opacity-0 invisible duration-500 group-hover:opacity-100 group-hover:visible'>
                                    <Play size={24} weight='fill' className='text-white' />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoGallery
