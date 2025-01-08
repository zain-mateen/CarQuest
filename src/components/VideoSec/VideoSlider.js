import React from 'react'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';

import "swiper/css";

const VideoSlider = ({ data }) => {
    return (
        <div className='py-12'>
            <div className="container">
                <Swiper
                    className='flex items-center'
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={6}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        1200: {
                            slidesPerView: 6,
                        },

                        992: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    }}
                >
                    {data.map((logo, index) => (
                        <SwiperSlide className='flex justify-center' key={index}>
                            <Link>
                                <img src={logo.logoImage} alt={logo.logoText} />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default VideoSlider
