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

    const excludeIcon = ['linkedin-logo', 'youtube-logo'];
    const filteredIcons = SocialLinkData.filter((item) => !excludeIcon.includes(item.id));

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
                    <div className='max-w-[1050px] mx-auto'>
                        <img 
                            className='rounded-[46px] mb-10 w-full max-h-[600px] object-cover object-center max-xl:h-auto max-xl:rounded-3xl max-l:mb-6' 
                            src={BlogDetail.image} 
                            alt="Blog Car img" 
                        />
                        <TitleComponent size='small-normal' className='text-paragraphcolor mb-3'>
                            Renting a car can be an essential part of travel, offering flexibility and convenience for exploring new destinations or navigating daily life when your own vehicle isn't available. Whether you're planning a vacation, business trip, or just need a temporary ride.
                        </TitleComponent>
                        <TitleComponent size='small-normal' className='text-paragraphcolor'>
                            The first step in the car rental process is selecting a reputable company. Major rental agencies like Hertz, Enterprise, Avis, and Budget are known for their extensive networks and reliability. However, don't overlook local rental companies, which can sometimes offer better rates or more personalized service. Always check reviews and compare prices online to find the best option for your needs.
                        </TitleComponent>
                        <div className='flex gap-4 my-6 p-4 bg-secondary rounded-3xl max-xl:p-6 max-xl:rounded-3xl max-l:flex-col max-l:gap-2 max-m:px-4 max-m:py-5'>
                            <QuoteIcon 
                                svgStyles='w-14 h-14 max-m:w-10 max-m:h-10'
                            />
                            <TitleComponent size='base-semibold' className='flex-1 text-white'>
                                Renting a car opens up a world of possibilities, turning a simple journey into an adventure. It's not just about getting from point A to point B it's about the freedom to explore, the comfort of choice, and the ease of travel. Whether you're discovering new cities.
                            </TitleComponent>
                        </div>
                        <TitleComponent size='small-normal' className='text-paragraphcolor'>
                            Before booking, ensure you meet the rental company's requirements. Most agencies require drivers to be at least 21 years old, though some may have a minimum age of 25. Young drivers often face additional fees. A valid driver's license and a credit card in the driver's name are also essential. International travelers might need an International Driving Permit (IDP) in addition to their home country's license.
                        </TitleComponent>
                        <h2 className='text-4xl font-bold text-white mt-6 mb-3 max-l:text-2xl'>Understanding Rental Requirements</h2>
                        <TitleComponent size='small-normal' className='text-paragraphcolor'>
                            Car rental agencies offer a range of vehicles, from compact cars to luxury SUVs. Consider your needs and budget when choosing. For city travel, a compact car is economical and easy to park. If you're traveling with family or a group, an SUV or minivan may be more appropriate. Don't forget to check for special deals or discounts, such as weekend specials or packages that include GPS or child seats.
                        </TitleComponent>
                        <ul className='flex flex-col gap-2 my-4 pl-[18px]'>
                            {ListData.map((item, index) => (
                                <li className='list-disc text-white' key={index}>
                                    <TitleComponent size='base-semibold'>
                                        {item}
                                    </TitleComponent>
                                </li>
                            ))}
                        </ul>
                        <TitleComponent size='small-normal' className='text-paragraphcolor'>
                            Insurance is a crucial aspect of car rental. Rental companies usually offer several coverage options, including Collision Damage Waiver (CDW), Theft Protection, and Third-Party Liability. Your personal car insurance or credit card may already cover rental cars, so check with your provider before purchasing additional coverage. It's important to understand what is covered and any potential deductibles or exclusions.
                        </TitleComponent>
                        <div className='flex items-center justify-between flex-wrap gap-6 border-y border-borderPrimary py-4 my-10 max-m:my-6'>
                            <div className="flex flex-wrap items-center gap-3 max-l:gap-2.5">
                                <TitleComponent size='base-semibold' className="text-white">Tags:</TitleComponent>
                                <ul className='flex flex-wrap items-center gap-3 max-l:gap-2.5'>
                                    {TagsData.map(({ id, label, to }) => (
                                        <li key={id} className='flex'>
                                            <Link
                                                className="text-sm font-bold text-white py-1.5 px-3 bg-primary rounded-full duration-500 hover:bg-white hover:text-primary"
                                                to={to}
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <ul className='flex items-center gap-4'>
                                {filteredIcons.map(({id, Icon, to}) => (
                                    <li key={id}>
                                        <Link 
                                            className='flex items-center justify-center w-10 h-10 bg-primary rounded-full duration-500 hover:bg-white group' 
                                            to={to}
                                            target='_blank'
                                        >
                                            <Icon size={24} weight='bold' className='text-white group-hover:text-primary' />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className='flex flex-col gap-2 mb-4'>
                                <TitleComponent type="h4" className="text-white">
                                    Leave a Reply
                                </TitleComponent>
                                <TitleComponent size="base-normal" className="text-paragraphcolor">
                                    Your email address will not be published. Required fields are marked *
                                </TitleComponent>
                            </div>
                            <form>
                                <div className="grid grid-cols-3 gap-6 max-m:flex max-m:flex-col max-m:gap-y-5">
                                    {blogDetailFormData.map(({ id, label, type, placeholder, className, wrapperClass }) => (
                                        <div key={id} className={wrapperClass}>
                                            <label htmlFor={id} className="text-lg font-medium text-white">
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
