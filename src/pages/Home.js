import React from 'react'
import HeroSec from '../components/HeroSec/HeroSec'
import AboutSection from '../components/AboutSec/AboutSec';
import ServiceSec from '../components/ServiceSec/ServiceSec'
import FleetSec from '../components/FleetSec/FleetSec'
import CollectionSec from '../components/CollectionSec/CollectionSec'
import WorkSec from '../components/WorkSec/WorkSec'
import VideoSec from '../components/VideoSec/VideoSec'
import ChooseSec from '../components/ChooseSec/ChooseSec'
import FaqSec from '../components/FaqSec/FaqSec';
import TestimonialSec from '../components/TestimonialSec/TestimonialSec'
import CtaSec from '../components/CtaSec/CtaSec'
import BlogSec from '../components/BlogSec/BlogSec'

const Home = () => {
    return (
        <div>
            <HeroSec />
            <AboutSection />
            <ServiceSec />
            <FleetSec />
            <CollectionSec />
            <WorkSec />
            <VideoSec />
            <ChooseSec />
            <FaqSec />
            <TestimonialSec />
            <CtaSec />
            <BlogSec />
        </div>
    )
}

export default Home
