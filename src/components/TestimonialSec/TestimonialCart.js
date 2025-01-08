import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import TitleComponent from '../TitleComponent/TitleComponent'

const TestimonialCart = ({ data }) => {
    const [expand, setExpand] = useState(false)

    return (
        <div className='p-8 border border-borderPrimary rounded-[20px] max-l:p-5'>
            <div className='pb-6 border-b border-borderPrimary mb-6 max-l:pb-5 max-l:mb-5'>
                <ul className='flex items-center gap-0.5 mb-6 max-l:mb-5'>
                    {data.stars.map((star, index) => (
                        <li key={index}>{star.icon}</li>
                    ))}
                </ul>
                <TitleComponent size='small-normal' className='text-paragraphcolor'>
                    {expand || data.message.length <= 150 
                    ? data.message 
                    : data.message.substring(0, 150)+"..."}{data.message.length > 150 && <button onClick={() => setExpand(!expand)} className="text-primary font-semibold">View {expand ? "Less" : "More"}</button>}
                </TitleComponent>
            </div>
            <Link className='inline-flex items-center gap-3 group'>
                <div className='relative overflow-hidden rounded-full before:absolute before:w-[200%] before:h-0 before:top-[50%] before:left-[50%] before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[-45deg] before:bg-white10 before:z-10 before:duration-500 before:ease-in-out group-hover:before:h-[200%] group-hover:before:rotate-0'>
                    <img className='w-[50px] h-[50px] rounded-full' src={data.authorImage} alt={`${data.name} img`} />
                </div>
                <div className='flex flex-col'>
                    <TitleComponent size='base-semibold' className='text-white duration-300 group-hover:text-primary'>
                        {data.name}
                    </TitleComponent>
                    <TitleComponent size='small-normal' className='text-paragraphcolor'>
                        {data.profession}
                    </TitleComponent>
                </div>
            </Link>
        </div>
    )
}

export default TestimonialCart





