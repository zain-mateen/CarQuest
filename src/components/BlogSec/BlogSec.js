import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarX } from 'phosphor-react';
import SectionTitle from '../SectionTitle/SectionTitle';
import TitleComponent from '../TitleComponent/TitleComponent';

import Post1 from '../../images/post-1.webp';
import ImageComponent from '../ImageConponent/ImageConponent';
import { BlogPostData } from '../../Data';

const BlogSec = () => {
    return (
        <div className="py-24 max-xl:py-20 max-m:py-12">
            <div className="container">
                <SectionTitle
                    wrapperStyles="max-w-[650px] mx-auto mb-12 max-m:mb-8"
                    title="Latest Articles"
                    titleWrapperStyles="animate-fade"
                    heading="Stay informed and inspired for your next journey"
                    headingType="h2"
                    headingStyles="blog-heading"
                />
                <div className="animate-fade grid grid-cols-2 grid-rows-3 gap-[30px] max-xl:grid-cols-1">
                    <div className="relative rounded-[30px] row-span-3 overflow-hidden group max-m:overflow-visible">
                        <ImageComponent 
                            src={Post1}
                            imageStyles='h-full'
                            ImageWrapper='h-full max-m:h-auto max-m:rounded-[16px]'
                        />
                        <div className="absolute bottom-[40px] left-[50px] max-w-[350px] z-10 max-m:relative max-m:mt-6 max-m:left-0 max-m:bottom-0">
                            <div className="flex items-center gap-3 mb-[16px]">
                                <CalendarX size={20} weight="fill" className="text-white" />
                                <TitleComponent size="small-normal" className="text-white">
                                    August 5, 2024
                                </TitleComponent>
                            </div>
                            <TitleComponent
                                size="extra-large-semibold"
                                className="capitalize text-white"
                            >
                                Top tips for booking your car rental: what you need to know
                            </TitleComponent>
                            <Link
                                className="flex items-center justify-center w-[60px] h-[60px] bg-primary rounded-full text-white rotate-[-45deg] mt-4 transition-all group-hover:rotate-0 max-l:w-12 max-l:h-12"
                            >
                                <ArrowRight size={24} weight="bold" />
                            </Link>
                        </div>
                    </div>
                    {BlogPostData.map((post, index) => (
                        <Link
                            key={index}
                            className="flex items-center gap-[30px] group max-m:gap-[20px] max-m:flex-col"
                        >
                            <ImageComponent
                                ImageWrapper='rounded-[16px] max-m:w-full'
                                src={post.image}
                                imageStyles='!w-[200px] !h-[160px] object-cover rounded-[16px] max-m:!w-full max-m:!h-auto'
                                alt={post.title}
                            />
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-[16px]">
                                    <CalendarX className="text-paragraphcolor" size={20} weight="fill" />
                                    <TitleComponent size="small-normal" className="text-paragraphcolor">
                                        {post.date}
                                    </TitleComponent>
                                </div>
                                <TitleComponent
                                    size="extra-large-semibold"
                                    className="capitalize text-white"
                                >
                                    {post.title}
                                </TitleComponent>
                                <Link className="flex items-center gap-3 mt-4" to='/'>
                                    <TitleComponent
                                        size="small-semibold"
                                        className="text-primary group-hover:text-white"
                                    >
                                        Read Story
                                    </TitleComponent>
                                    <div className="flex items-center justify-center w-[24px] h-[24px] bg-primary rounded-full text-white rotate-[-45deg] transition-all group-hover:bg-white group-hover:text-primary group-hover:rotate-0">
                                        <ArrowRight size={16} weight="bold" />
                                    </div>
                                </Link>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSec;
