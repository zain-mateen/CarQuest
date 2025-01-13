import React from 'react';
import { Play } from 'phosphor-react';

import SectionTitle from '../SectionTitle/SectionTitle';
import VideoSlider from './VideoSlider';
import { CompanyLogos } from '../../Data';

import Image from '../../images/video-img.png'
import { Link } from 'react-router-dom';

const VideoSec = () => {
    return (
        <div className="overflow-hidden relative">
            <img 
                className='animate-fade absolute top-0 left-0 -z-[1] w-full h-full object-cover' 
                src={Image} 
                alt="" 
            />
            <div className="absolute top-0 left-0 bg-black w-full h-full opacity-40" />
            <div className="max-w-[700px] mx-auto relative z-2 py-24 max-xl:py-20 max-m:py-12">
                <SectionTitle 
                    titleBg={true}
                    titleText={true}
                    title="Watch Full Video"
                    titleWrapperStyles="animate-fade"
                    heading="Discover the ease and convenience of renting with Us"
                    headingType="h2"
                    headingStyles="video-heading text-white"
                />
                <div className="animate-fade flex justify-center mt-8">
                    <Link 
                        className="flex items-center justify-center w-20 h-20 bg-primary rounded-full duration-300 ease-in-out cursor-pointer"
                        to='https://www.youtube.com/'
                        target='_blank'
                    >
                        <Play size={32} weight="fill" className="text-white" />
                    </Link>
                </div>
            </div>
            <div className='animate-fade border-t border-white/[25%]'>
                <VideoSlider data={CompanyLogos} />
            </div>
        </div>
    );
};

export default VideoSec;
