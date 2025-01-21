import React from 'react';
import InnerHeader from '../components/Header/InnerHeader';

import { ImageGalleryData } from '../Data';
import { Link } from 'react-router-dom';
import ImageComponent from '../components/ImageConponent/ImageConponent';

const ImageGallery = () => {
    return (
        <>
            <InnerHeader 
                Heading='Image Gallery'
                CurrentPage='Image Gallery'
            />
            <div className='py-28 max-xl:py-20 max-m:py-12'>
                <div className="container">
                    <div className="grid grid-cols-3 gap-8 max-2xl:gap-6 max-xl:grid-cols-2 max-m:grid-cols-1">
                        {ImageGalleryData.map((item, index) => (
                            <Link className="relative" key={index}>
                                <ImageComponent 
                                    imageStyles='rounded-3xl max-m:rounded-xl'
                                    src={item.Image}
                                    alt='Car img'
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageGallery
