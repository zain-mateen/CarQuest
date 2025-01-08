import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'phosphor-react'
import TitleComponent from '../TitleComponent/TitleComponent'

const CollectionCart = ({ data }) => {
    return (
        <div key={data.index} className='animate-fade relative group overflow-hidden rounded-3xl'>
            <div className='relative'>
                <span className='after:absolute after:bg-custom-gradient after:top-0 after:left-0 after:w-full after:h-full after:z-10' />
                <img className='w-full duration-500 group-hover:scale-110' src={data.image} alt={`{data.title} img`} />
            </div>
            <div className='absolute top-0 left-0 w-full h-full z-10'>
                <TitleComponent type='h3' className='text-white absolute top-10 left-10 right-10 max-xl:top-7 max-xl:left-7'>
                    {data.title}
                </TitleComponent>
                <div className='absolute right-10 bottom-10 max-xl:right-7 max-xl:bottom-7'>
                    <Link className='flex items-center justify-center w-14 h-14 bg-primary rounded-full text-white rotate-[-45deg] mt-4 transition-all duration-500 group-hover:bg-white group-hover:text-primary group-hover:rotate-0 max-3xl:w-12 max-3xl:h-12 max-xl:w-10 max-xl:h-10'>
                        <ArrowRight size={24} weight='bold' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CollectionCart;