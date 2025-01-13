import React from 'react'
import InnerHeader from '../components/Header/InnerHeader'
import AboutSection from '../components/AboutSec/AboutSec'
import ChooseSec from '../components/ChooseSec/ChooseSec'
import TestimonialSec from '../components/TestimonialSec/TestimonialSec'
import PartnerSec from '../components/PartnerSec/PartnerSec'
import VideoSec2 from '../components/VideoSec/VideoSec2'
import DriverSec from '../components/DriverSec/DriverSec'
import VisionSec from '../components/VisionSec/VisionSec'

const AboutPage = () => {
    return (
        <>
            <InnerHeader 
                Heading='About Us'
                CurrentPage='About Us'
            />
            <AboutSection aboutHeadingClass="about-page-heading" aboutSecStyles="about-page-sec" />
            <PartnerSec />
            <VisionSec />
            <VideoSec2 />
            <ChooseSec />
            <DriverSec />
            <TestimonialSec />
        </>
    )
}

export default AboutPage
