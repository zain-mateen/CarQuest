import React from 'react';

const ImageComponent = ({ src, ImageWrapper, imageStyles, hoverStyles, alt }) => {
    return (
        <div className={`relative overflow-hidden h-auto group ${ImageWrapper}`}>
            <span className={`before:absolute before:w-[200%] before:h-0 before:top-[50%] before:left-[50%] before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[-45deg] before:bg-white10 before:z-10 before:duration-500 group-hover:before:h-[200%] group-hover:before:rotate-0 ${hoverStyles}`}/>
            <img className={`w-full h-auto object-cover ${imageStyles}`} src={src} alt={alt} />
        </div>
    );
}

export default ImageComponent;
