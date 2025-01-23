import React from 'react'
import InnerHeader from '../components/Header/InnerHeader'
import TitleComponent from '../components/TitleComponent/TitleComponent';
import { ArrowUpRight } from 'phosphor-react';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Accordion from '../components/Accordion/Accordion';
import { FaqData } from '../Data';

// class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }

//     static getDerivedStateFromError(error) {
//         return { hasError: true };
//     }

//     componentDidCatch(error, errorInfo) {
//         console.error("Error caught in ErrorBoundary: ", error, errorInfo);
//     }

//     render() {
//         if (this.state.hasError) {
//             return <h1>Something went wrong.</h1>;
//         }

//         return this.props.children; 
//     }
// }

const ServiceBoxData = [
    { faqText: 'General Information', faqLink: '#general_information' },
    { faqText: 'Booking and Reservations', faqLink: '#booking_and_reservations' },
    { faqText: 'Pricing and Payment', faqLink: '#pricing_and_payment' },
    { faqText: 'Vehicle Information', faqLink: '#vehicle_information' },
];

const FaqPage = () => {
    const FaqGeneralInformationData = FaqData.FaqGeneralInformationData.slice(0, 3);
    const FaqBookingAndReservationsData = FaqData.FaqBookingAndReservationsData;
    const FaqPricingAndPaymentData = FaqData.FaqPricingAndPaymentData;
    const FaqVehicleInformationData = FaqData.FaqVehicleInformationData;

    const faqSections = [
        { title: 'General Information', FaqId: 'general_information', data: FaqGeneralInformationData },
        { title: 'Booking and Reservations', FaqId: 'booking_and_reservations', data: FaqBookingAndReservationsData },
        { title: 'Pricing and Payment', FaqId: 'pricing_and_payment', data: FaqPricingAndPaymentData },
        { title: 'Vehicle Information', FaqId: 'vehicle_information', data: FaqVehicleInformationData },
    ];

    return (
        <>
            <InnerHeader 
                Heading='Faqs'
                CurrentPage='Faqs'
            />
            <div className='about-page-sec py-28 max-xl:py-20 max-m:py-12'>
                <div className="container">
                    <div className='grid grid-cols-3 gap-8 max-xl:grid-cols-1 max-xl:gap-x-0'>
                        <div className="relative">
                            <div className='sticky top-[80px] left-0 p-6 rounded-3xl bg-secondary'>
                                <ul className='flex flex-col gap-5'>
                                    {ServiceBoxData.map(({ faqText, faqLink }, index) => (
                                        <a 
                                            key={index} 
                                            className="[&:not(:last-child)]:border-b [&:not(:last-child)]:border-white/[20%] [&:not(:last-child)]:pb-5 flex justify-between items-center group"
                                            href={faqLink}
                                        >
                                            <TitleComponent size='base-normal' className='text-white duration-300 group-hover:text-primary'>{faqText}</TitleComponent>
                                            <ArrowUpRight size={24} weight='bold' className='text-primary duration-300 group-hover:rotate-45' />
                                        </a>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-2">
                            {faqSections.map(({ title, FaqId, data }, index) => (
                                <div 
                                    key={index}
                                    className='[&:not(:last-child)]:mb-12'
                                    id={FaqId}
                                >
                                    <SectionTitle 
                                        left={true}
                                        title='FAQs'
                                        heading={title}
                                        headingType='h2'
                                    />
                                    <div className="mt-10">
                                        <Accordion item={data} variant='secondary' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqPage
