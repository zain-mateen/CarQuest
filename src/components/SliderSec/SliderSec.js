import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import styled from 'styled-components';
import tw from 'twin.macro';

const NavigationButton = styled.div`
    ${tw`absolute top-auto bottom-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center duration-500 cursor-pointer`}
    &::after {
        display: none;
    }
    svg {
        ${tw`w-6 h-6 text-white duration-500`}
    }
`;
const PrevButton = styled(NavigationButton)`
    left: calc(50% - 60px);
`;
const NextButton = styled(NavigationButton)`
    right: calc(50% - 60px);
`;
const SliderSec = ({
    data = [],
    SwiperClass,
    CartComponent,
    slidesPerView = 3,
    navigation = true,
    pagination = false,
    autoplay = { delay: 5000, disableOnInteraction: false },
    spaceBetween = 30,
    loop = true,
}) => {
    return (
        <Swiper
            className={SwiperClass}
            modules={[Navigation, Autoplay, ...(pagination ? [Pagination] : [])]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            navigation={navigation && {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            pagination={pagination && { clickable: true }}
            loop={loop}
            autoplay={autoplay}
            breakpoints={{
                992: {
                    slidesPerView: slidesPerView,
                },
                576: {
                    slidesPerView: Math.min(slidesPerView, 2),
                    spaceBetween: 20,
                },
                0: {
                    slidesPerView: Math.min(slidesPerView, 1),
                },
            }}
        >
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <CartComponent data={item} />
                </SwiperSlide>
            ))}
            {navigation && (
                <div className="flex items-center justify-center gap-4">
                    <NextButton className="swiper-button-next group hover:bg-white">
                        <ArrowRight size={20} weight="bold" className='group-hover:text-primary' />
                    </NextButton>
                    <PrevButton className="swiper-button-prev group hover:bg-white">
                        <ArrowLeft size={20} weight="bold" className='group-hover:text-primary' />
                    </PrevButton>
                </div>
            )}
        </Swiper>
    );
};

export default SliderSec;
