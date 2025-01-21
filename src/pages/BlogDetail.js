import React from 'react'
import InnerHeader from '../components/Header/InnerHeader'

import TitleComponent from '../components/TitleComponent/TitleComponent'
import { QuoteIcon } from '../components/SvgIcons/SvgIcons'
import { Link, useParams } from 'react-router-dom'
import { BlogDetailData, blogDetailFormData, SocialLinkData } from '../Data'

const ListData = [
    'Opt for well-known rental agencies like Hertz, Enterprise, Avis, or local firms.',
    'Most rental companies require drivers to be at least 21, with some having a minimum age of 25.',
    'Read the agreement carefully, noting the rental period, mileage limits, fuel policy.',
    'Choose a vehicle that suits your needs and budget. Compact cars are while larger vehicles.',
    'Ensure your rental comes with unlimited mileage if you plan on long-distance travel.',
];

export const TagsData = [
    { id: 1, label: 'Carrental', to: '/' },
    { id: 2, label: 'Travel', to: '/' },
    { id: 3, label: 'Travelplanning', to: '/' },
];

const BlogDetail = () => {
    const { id } = useParams();
    const BlogDetail = BlogDetailData.find((item) => item.id === id)

    const selectedIds = ['facebook-logo', 'instagram-logo', 'linkedin-logo'];
    const filteredIcons = SocialLinkData.filter((item) => selectedIds.includes(item.id));

    return (
        <>
            <InnerHeader 
                Heading={BlogDetail.heading}
                DateText={BlogDetail.dateText}
                RoutePageLink='/blog'
                RoutePageText='Uncategorized'
                InnerPageLink='/blog'
                InnerPageLinkText='Blog'
                InnerPageSlash='/'
                CurrentPage={BlogDetail.heading}
            />
            <div className='blog-details-page py-28 max-xl:py-20 max-m:py-12'>
                <div className="container">
                    <img 
                        className='rounded-[46px] w-full h-[600px] object-cover object-center max-xl:h-auto max-xl:rounded-3xl' 
                        src={BlogDetail.image} 
                        alt="Blog Car img" 
                    />
                    <div className='max-w-[1050px] mx-auto mt-6'>
                        <TitleComponent size='small-normal' className='text-paragraphcolor mb-6'>
                            Renting a car can be an essential part of travel, offering flexibility and convenience for exploring new destinations or navigating daily life when your own vehicle isn't available. Whether you're planning a vacation, business trip, or just need a temporary ride.
                        </TitleComponent>
                        <TitleComponent size='small-normal' className='text-paragraphcolor'>
                            The first step in the car rental process is selecting a reputable company. Major rental agencies like Hertz, Enterprise, Avis, and Budget are known for their extensive networks and reliability. However, don't overlook local rental companies, which can sometimes offer better rates or more personalized service. Always check reviews and compare prices online to find the best option for your needs.
                        </TitleComponent>
                        <div className='flex gap-6 my-6 p-8 bg-secondary rounded-3xl max-xl:p-6 max-xl:rounded-3xl max-l:flex-col max-l:gap-2'>
                            <QuoteIcon 
                                svgStyles='w-16 h-16'
                            />
                            <TitleComponent size='extra-large-semibold' className='flex-1 text-white'>
                                Renting a car opens up a world of possibilities, turning a simple journey into an adventure. It's not just about getting from point A to point B it's about the freedom to explore, the comfort of choice, and the ease of travel. Whether you're discovering new cities.
                            </TitleComponent>
                        </div>
                        <TitleComponent size='small-normal' className='text-paragraphcolor'>
                            Before booking, ensure you meet the rental company's requirements. Most agencies require drivers to be at least 21 years old, though some may have a minimum age of 25. Young drivers often face additional fees. A valid driver's license and a credit card in the driver's name are also essential. International travelers might need an International Driving Permit (IDP) in addition to their home country's license.
                        </TitleComponent>
                        <h2 className='text-4xl font-bold text-white my-6 max-l:text-2xl'>Understanding Rental Requirements</h2>
                        <TitleComponent size='small-normal' className='text-paragraphcolor'>
                            Car rental agencies offer a range of vehicles, from compact cars to luxury SUVs. Consider your needs and budget when choosing. For city travel, a compact car is economical and easy to park. If you're traveling with family or a group, an SUV or minivan may be more appropriate. Don't forget to check for special deals or discounts, such as weekend specials or packages that include GPS or child seats.
                        </TitleComponent>
                        <ul className='flex flex-col gap-4 my-6 pl-[18px]'>
                            {ListData.map((item, index) => (
                                <li className='list-disc text-white' key={index}>
                                    <TitleComponent size='large-medium'>
                                        {item}
                                    </TitleComponent>
                                </li>
                            ))}
                        </ul>
                        <TitleComponent size='small-normal' className='text-paragraphcolor'>
                            Insurance is a crucial aspect of car rental. Rental companies usually offer several coverage options, including Collision Damage Waiver (CDW), Theft Protection, and Third-Party Liability. Your personal car insurance or credit card may already cover rental cars, so check with your provider before purchasing additional coverage. It's important to understand what is covered and any potential deductibles or exclusions.
                        </TitleComponent>
                        <div className='flex items-center justify-between flex-wrap gap-6 border-t border-solid border-borderPrimary pt-8 mt-8'>
                            <div className="flex items-center gap-6 max-l:gap-2.5 flex-wrap max-l:gap-y-5">
                                <p className="text-[22px] font-semibold text-white">Tags:</p>
                                {TagsData.map(({ id, label, to }) => (
                                    <li key={id}>
                                        <Link
                                            className="text-lg font-medium text-white py-2.5 px-5 bg-primary rounded-full duration-500 hover:bg-white hover:text-primary"
                                            to={to}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                            <ul className='flex items-center gap-4'>
                                {filteredIcons.map(({id, Icon, to}) => (
                                    <li key={id}>
                                        <Link 
                                            className='flex items-center justify-center w-10 h-10 bg-primary rounded-full duration-500 hover:bg-black' 
                                            to={to}
                                            target='_blank'
                                        >
                                            <Icon size={24} weight='bold' className='text-white' />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-12">
                            <TitleComponent type="h4" className="text-white">
                                Leave a Reply
                            </TitleComponent>
                            <TitleComponent size="base-normal" className="text-paragraphcolor mt-2">
                                Your email address will not be published. Required fields are marked *
                            </TitleComponent>
                            <form>
                                <div className="grid grid-cols-3 gap-6 mt-8 max-m:flex max-m:flex-col max-m:gap-y-5">
                                    {blogDetailFormData.map(({ id, label, type, placeholder, className, wrapperClass }) => (
                                        <div key={id} className={wrapperClass}>
                                            <label htmlFor={id} className="text-lg font-medium text-paragraphcolor">
                                                {label}
                                            </label>
                                            {type === "textarea" ? (
                                                <textarea id={id} name={id} placeholder={placeholder} className={className} />
                                            ) : (
                                                <input id={id} name={id} type={type} placeholder={placeholder} className={className} />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <TitleComponent size="base-normal" className="my-8 text-paragraphcolor">
                                    <input className="mr-2" type="checkbox" name="check_form" id="check_form" value="yes" />
                                    <label htmlFor="check_form">
                                        Save my name, email, and website in this browser for the next time I comment.
                                    </label>
                                </TitleComponent>
                                <input
                                    className="text-base font-bold text-white py-3 px-6 bg-primary rounded-[8px] cursor-pointer duration-500 hover:bg-white hover:text-primary"
                                    type="submit"
                                    value="Post Comment"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetail
