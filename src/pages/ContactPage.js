import React from 'react';
import InnerHeader from '../components/Header/InnerHeader';
import TitleComponent from '../components/TitleComponent/TitleComponent';
import { SocialLinkData } from '../Data';
import { Link } from 'react-router-dom';
import { PhoneCall, EnvelopeSimple, MapPin } from 'phosphor-react';
import ContactInformationImage from '../images/contact-information-bg.svg';
import ArrowImage from '../images/contact-form-plan.svg';
import ThemeButton from '../components/ThemeButton/ThemeButton';
import SectionTitle from '../components/SectionTitle/SectionTitle';

const ContactPage = () => {
    const filteredIcons = SocialLinkData.filter(({ id }) => id !== 'linkedin-logo');

    const ContactData = [
        { text: '(+01) 789 854 856', Icon: PhoneCall },
        { text: 'info@example.com', Icon: EnvelopeSimple },
        { text: '1234 Elm Street, Suite 567 Springfield, United States', Icon: MapPin },
    ];

    return (
        <>
            <InnerHeader 
                Heading="Contact Us" 
                CurrentPage="Contact Us" 
            />
            <section className="contact-page-sec pt-28 max-xl:pt-20 max-m:pt-12">
                <div className="container">
                    <div className="grid grid-cols-2 gap-6 p-12 border border-solid border-white/[20%] rounded-3xl relative max-xl:grid-cols-1 max-l:border-none max-l:p-0">
                        <div className="p-10 bg-secondary rounded-2xl relative max-l:p-5">
                            <div className="relative z-10">
                                <TitleComponent type="h2" className="text-white">
                                    Contact Information
                                </TitleComponent>
                                <TitleComponent size="base-normal" className="text-white mt-3">
                                    Say something to start a live chat!
                                </TitleComponent>
                                <ul className="flex flex-col gap-5 my-20 max-l:my-10 max-l:gap-4">
                                    {ContactData.map(({ Icon, text }, i) => (
                                        <li className="flex items-center gap-3" key={i}>
                                            <Icon className="text-white group-hover:text-primary duration-300 max-l:w-8" size={40} />
                                            <Link className="text-base font-medium text-white flex-1">{text}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center gap-6">
                                    {filteredIcons.map(({ Icon, to }, i) => (
                                        <Link key={i} to={to} className="flex group">
                                            <Icon className="text-white group-hover:text-primary duration-300" size={30} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <img className="absolute bottom-0 right-0" src={ContactInformationImage} alt="Contact Info" />
                        </div>
                        <form className="flex flex-col gap-6">
                            {['Full Name', 'Last Name', 'Email', 'Phone'].map((label, i) => (
                                <div className="grid grid-cols-2 gap-5 max-l:grid-cols-1" key={i}>
                                    <div className="flex flex-col gap-3 border-b border-secondary">
                                        <label className="text-base font-semibold text-white">{label}</label>
                                        <input
                                            className="text-base font-semibold py-2 bg-transparent outline-none placeholder:text-paragraphcolor focus:border-black"
                                            placeholder={`Enter Your ${label}`}
                                        />
                                    </div>
                                </div>
                            ))}
                            <div className="flex flex-col gap-3 border-b border-secondary">
                                <label className="text-base font-semibold text-white">Message</label>
                                <textarea
                                    className="text-base h-[200px] font-semibold py-2 bg-transparent outline-none resize-none placeholder:text-paragraphcolor focus:border-black"
                                    placeholder="Enter Your Message"
                                    rows="4"
                                />
                            </div>
                            <ThemeButton variant="primary">Send Message</ThemeButton>
                        </form>
                        <img className="absolute bottom-0 right-0 z-[-1] max-xl:hidden" src={ArrowImage} alt="Arrow" />
                    </div>
                </div>
            </section>
            <section className="pt-28 max-xl:pt-20 max-m:pt-12">
                <SectionTitle
                    wrapperStyles="max-w-[600px] mx-auto mb-12 max-m:mb-8"
                    title="Location"
                    titleWrapperStyles="animate-fade"
                    heading="How to reach our location"
                    headingStyles="cta-heading"
                    headingType="h2"
                />
                <div className="map-scale location-map">
                    <iframe
                        className="w-full h-[550px] max-l:h-[400px] max-m:h-[300px]"
                        loading="lazy"
                        src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                        title="London Eye, London, United Kingdom"
                        aria-label="London Eye, London, United Kingdom"
                    />
                </div>
            </section>
        </>
    );
};

export default ContactPage;
