import React from 'react';
import { Link } from 'react-router-dom';
import TitleComponent from '../TitleComponent/TitleComponent';
import { Calendar, Tag } from 'phosphor-react';

const InnerHeader = ({ Heading, InnerPageLink, InnerPageLinkText, InnerPageSlash, CurrentPage, DateText, RoutePageLink, RoutePageText, PagesLinkList }) => {
    return (
        <>
            <div className='inner-header bg-header-bg bg-center bg-cover bg-no-repeat py-[80px] mt-16 relative max-2xl:py-24 max-xl:py-20 max-m:py-12'>
                <span className='absolute top-0 left-0 w-full h-full bg-black opacity-40' />
                <div className="container">
                    <div className=" flex items-center flex-col text-center relative z-10 gap-2 max-w-[800px] mx-auto">
                        <TitleComponent 
                            type='h2' 
                            className='inner-header-heading text-white mb-6 max-xl:mb-4 max-m:mb-2 max-m:text-3xl'
                        >
                            {Heading}
                        </TitleComponent>
                        <ul className='flex items-center gap-x-8 gap-y-4 justify-center flex-wrap max-m:gap-3'>
                            {DateText && 
                                <li className='flex items-center gap-2'>
                                    <Calendar 
                                        size={24} 
                                        weight='fill' 
                                        className='text-primary max-m:w-[18px]' 
                                    />
                                    <TitleComponent 
                                        size='large-semibold' 
                                        className='text-white max-m:!text-sm'
                                    >
                                        {DateText}
                                    </TitleComponent>
                                </li>
                            }
                            {RoutePageText && 
                                <li className='flex items-center gap-2'>
                                    <Tag 
                                        size={24} 
                                        weight='fill' 
                                        className='text-primary max-m:w-[18px]' 
                                    />
                                    <Link 
                                        className='text-lg font-semibold text-white duration-500 hover:text-primary max-m:text-sm' 
                                        to={RoutePageLink}
                                    >
                                        {RoutePageText}
                                    </Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bread-crumbs py-3 border-b-[1px] border-b-borderPrimary'>
                <div className='container'>
                    <ul className={`flex items-center gap- flex-wrap ${PagesLinkList}`}>
                        <li className='px-2'>
                            <Link 
                                to='/' 
                                className='text-sm font-medium text-white duration-300 hover:text-primary'
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <p className='text-xl font-medium text-white/[35%]'>/</p>
                        </li>
                        {InnerPageLink && (
                            <li className='px-2'>
                                <Link 
                                    to={InnerPageLink} 
                                    className='text-base font-medium text-white duration-300 hover:text-primary'
                                >
                                    {InnerPageLinkText}
                                </Link>
                            </li>
                        )}
                        {InnerPageSlash && (
                            <li>
                                <p className='text-xl font-medium text-white/[35%]'>{InnerPageSlash}</p>
                            </li>
                        )}
                        {CurrentPage && (
                            <li className='px-2'>
                                <TitleComponent 
                                    size='small-normal' 
                                    className='text-white/[45%]'
                                >
                                    {CurrentPage}
                                </TitleComponent>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default InnerHeader;