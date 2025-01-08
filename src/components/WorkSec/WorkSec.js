import React from 'react'
import { Plus } from 'phosphor-react';

import SectionTitle from '../SectionTitle/SectionTitle'
import Accordion from '../Accordion/Accordion';
import TitleComponent from '../TitleComponent/TitleComponent'
import { FaqData } from '../../Data';

import WorkImg from '../../images/work-img.webp'
import Author1 from '../../images/author-1.webp';
import Author2 from '../../images/author-2.webp';
import Author3 from '../../images/author-3.webp';

const WorkSec = () => {
    const WorkSecDropdownData = FaqData.WorkSecDropdownData;

    return (
        <div className='py-12'>
            <div className="container">
                <div className="flex items-center gap-6 max-xl:flex-col">
                    <div className='w-1/2 max-xl:w-full'>
                        <SectionTitle 
                            left={true}
                            title='How It Work'
                            titleWrapperStyles="animate-fade"
                            heading='Streamlined processes for a hassle-free experience'
                            headingType='h2'
                            headingStyles="work-heading"
                            description='Our streamlined process ensures a seamless car rental experience from start to finish. With easy online booking, flexible pick-up and drop-off options.'
                            descriptionStyles='animate-fade text-paragraphcolor'
                            descriptionType='small-normal'
                        />
                        <Accordion item={WorkSecDropdownData} variant='default' />
                    </div>
                    <div className='animate-scale flex justify-center relative w-1/2 max-m:w-full'>
                        <img src={WorkImg} alt="Work img" />
                        <div className="absolute right-0 bottom-0 animate-slideRightLeft">
                            <div className='w-[200px] p-5 bg-primary rounded-[16px]'>
                                <div className="border-b border-white pb-2 mb-3">
                                    <TitleComponent size='extra-large-semibold' className='text-white'>5m+</TitleComponent>
                                    <TitleComponent size='extra-large-semibold' className='text-white'>Trusted world wide global clients</TitleComponent>
                                </div>
                                <ul className='flex items-center'>
                                    {[ Author1, Author2, Author3 ].map((author, index) => (
                                        <img 
                                            key={index}
                                            className='w-10 h-10 rounded-full relative ml-[-10px] duration-300 hover:z-10 hover:translate-y-[-5px]' 
                                            src={author} 
                                            alt="Author img" 
                                        />
                                    ))}
                                    <div 
                                        className='flex items-center justify-center w-10 h-10 bg-white rounded-full ml-[-12px] relative duration-300 hover:z-10 hover:translate-y-[-5px]'
                                    >
                                        <Plus size={16} weight='bold' className='text-primary' />
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkSec
