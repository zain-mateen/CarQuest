import React from 'react'
import InnerHeader from '../components/Header/InnerHeader'
import BlogCart from '../components/BlogSec/BlogCart'
import { BlogData } from '../Data'

const Blog = () => {
    return (
        <>
            <InnerHeader 
                Heading= 'Blog'
                CurrentPage='Blog'
            />
            <div className='blog-page-sec py-28 max-xl:py-20 max-m:py-12'>
                <div className="container">
                    <div className="grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-xl:gap-6 max-m:grid-cols-1">
                        {BlogData.map((data, index) => (
                            <BlogCart key={index} data={data} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
