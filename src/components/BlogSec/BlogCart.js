import React from 'react'
import { Link } from 'react-router-dom'
import TitleComponent from '../TitleComponent/TitleComponent'

import { ArrowRight, CalendarX } from 'phosphor-react'
import ImageComponent from '../ImageConponent/ImageConponent'

const BlogCart = ({ data }) => {
    return (
        <div className='relative'>
            <Link to={`/blog/${data.id}`}>
                <ImageComponent 
                    ImageWrapper='rounded-[30px] max-xl:rounded-3xl max-l:rounded-2xl'
                    src={data.image}
                    alt={data.heading}
                />
            </Link>
            <div className='flex items-center gap-3 mb-4 mt-6'>
                <CalendarX 
                    size={20} 
                    weight="fill" 
                    className='text-paragraphcolor' 
                />
                <TitleComponent 
                    size='small-normal' 
                    className='text-paragraphcolor'
                >
                    {data.dateText || 'Date not available'}
                </TitleComponent>
            </div>
            <Link 
                className='text-xl font-semibold text-white capitalize duration-500 hover:text-primary max-l:text-lg'
                to={`/blog/${data.id}`}
            >
                {data.heading || 'Heading not available'}
            </Link>
            <Link className="flex items-center gap-3 mt-4 group" to={`/blog/${data.id}`}>
                <TitleComponent 
                    size='small-semibold' 
                    className='text-primary duration-300 group-hover:text-white'
                >
                    Read Story
                </TitleComponent>
                <div className='flex items-center justify-center w-[24px] h-[24px] bg-primary rounded-full text-white rotate-[-45deg] transition-all duration-500 group-hover:bg-white group-hover:text-primary group-hover:rotate-0'>
                    <ArrowRight 
                        size={16} 
                        weight='bold' 
                    />
                </div>
            </Link>
        </div>
    )
}

export default BlogCart
