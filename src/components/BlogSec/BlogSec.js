import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarX } from 'phosphor-react';
import SectionTitle from '../SectionTitle/SectionTitle';
import TitleComponent from '../TitleComponent/TitleComponent';

import Post1 from '../../images/post-1.webp';
import Post2 from '../../images/post-2.webp';
import Post3 from '../../images/post-3.webp';
import Post4 from '../../images/post-4.webp';
import ImageComponent from '../ImageConponent/ImageConponent';

const BlogSec = () => {
    const posts = [
        {
            id: 1,
            image: Post2,
            date: 'August 5, 2024',
            title: 'Exploring your rental car options: sedan, suv, or convertible?'
        },
        {
            id: 2,
            image: Post3,
            date: 'August 5, 2024',
            title: 'The pros and cons of renting a car vs. using rideshare services'
        },
        {
            id: 3,
            image: Post4,
            date: 'August 5, 2024',
            title: 'Why you should consider renting a luxury car for your next trip'
        }
    ];

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
                    <div className="relative rounded-[30px] row-span-3 overflow-hidden group">
                        <ImageComponent 
                            src={Post1}
                            imageStyles='h-full'
                            ImageWrapper='h-full'
                        />
                        <div className="absolute bottom-[40px] left-[50px] max-w-[350px] z-10">
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
                                className="flex items-center justify-center w-[60px] h-[60px] bg-primary rounded-full text-white rotate-[-45deg] mt-4 transition-all group-hover:rotate-0"
                            >
                                <ArrowRight size={24} weight="bold" />
                            </Link>
                        </div>
                    </div>
                    {posts.map(({ id, image, date, title }) => (
                        <Link
                            key={id}
                            className="flex items-center gap-[30px] group max-m:gap-[20px] max-m:flex-col"
                        >
                            <ImageComponent
                                ImageWrapper='rounded-[16px]'
                                src={image}
                                imageStyles='!w-[200px] !h-[160px] object-cover rounded-[16px] max-m:w-full'
                                alt={title}
                            />
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-[16px]">
                                    <CalendarX className="text-paragraphcolor" size={20} weight="fill" />
                                    <TitleComponent size="small-normal" className="text-paragraphcolor">
                                        {date}
                                    </TitleComponent>
                                </div>
                                <TitleComponent
                                    size="extra-large-semibold"
                                    className="capitalize text-white"
                                >
                                    {title}
                                </TitleComponent>
                                <Link className="flex items-center gap-3 mt-4">
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
