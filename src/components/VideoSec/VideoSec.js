import React, { useRef, useState } from 'react';
import { Play, Pause } from 'phosphor-react';

import SectionTitle from '../SectionTitle/SectionTitle';
import VideoSlider from './VideoSlider';
import { PartnerLogos } from '../../Data';

import BackgroundVideo from '../../images/hero-video.mp4'

const VideoSec = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
    };

    return (
        <div className="overflow-hidden relative">
            <video 
                ref={videoRef} 
                className="animate-fade absolute top-0 left-0 -z-[1] w-full h-full object-cover" 
                src={BackgroundVideo} 
                controls={false}
                muted 
                onEnded={handleVideoEnd}
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
                    <button 
                        className="flex items-center justify-center w-20 h-20 bg-primary rounded-full duration-300 ease-in-out cursor-pointer"
                        onClick={handlePlayPause}
                    >
                        {isPlaying ? (
                            <Pause size={32} weight="fill" className="text-white" />
                        ) : (
                            <Play size={32} weight="fill" className="text-white" />
                        )}
                    </button>
                </div>
            </div>
            <div className='animate-fade border-t border-white/[25%]'>
                <VideoSlider data={PartnerLogos} />
            </div>
        </div>
    );
};

export default VideoSec;
