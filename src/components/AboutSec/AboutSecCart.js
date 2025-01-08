import React from 'react'
import { Link } from 'react-router-dom'
import TitleComponent from '../TitleComponent/TitleComponent'

const AboutSecCart = ({ icon: Icon, title, description, flexStyles, afterStyles, svgStyles }) => {
    return (
        <div 
            className={`flex gap-7 group ${flexStyles} [&:not(:last-child)]:border-b [&:not(:last-child)]:border-borderPrimary [&:not(:last-child)]:pb-5 max-m:gap-5`}
        >
            <div 
                className={`after:content-[""] after:absolute after:top-[-10px] after:left-[-10px] after:bg-primary after:rounded-full after:z-[-1] after:opacity-10 after:duration-300 relative group-hover:after:opacity-70 ${afterStyles}`}
            >
                <Icon svgStyles={svgStyles} />
            </div>
            <div className="box_body flex-1">
                <Link 
                    className='text-xl font-semibold text-white duration-300 hover:text-primary'
                    to='/'
                >
                    {title}
                </Link>
                <TitleComponent size='small-normal' className='mt-2.5 text-paragraphcolor' >
                    {description}
                </TitleComponent>
            </div>
        </div>
    )
}

export default AboutSecCart
