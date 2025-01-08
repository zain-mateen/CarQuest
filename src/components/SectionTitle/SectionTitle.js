import React from 'react';
import TitleComponent from '../TitleComponent/TitleComponent'

const SectionTitle = ({left, wrapperStyles, titleWrapperStyles, title, titleStyles, heading, headingType, headingStyles, description, descriptionType, descriptionStyles, titleBg, titleText}) => {
    return (
        <div className={`${left ? "text-left" : "text-center"} ${wrapperStyles}`}>
            {title && <div className={`inline-flex items-center overflow-hidden ${left ? "justify-start" : "justify-center"}`}> 
                <div className={`inline-flex items-center gap-3 mb-4 py-2 px-3  backdrop-blur rounded ${titleBg ? "bg-white/[20%]" : "bg-white/[20%]"} ${left ? "justify-start" : "justify-center"} ${titleWrapperStyles}`}>
                    <p className={`text-sm font-semibold ${titleText ? "text-white" : "text-white" } ${titleStyles}`}>
                        {title}
                    </p>
                </div>
            </div>}
            {heading && TitleComponent && 
                <TitleComponent type={headingType} className={`${headingStyles} text-white`}>
                    {heading}
                </TitleComponent>
            }
            {description && TitleComponent &&
                <TitleComponent size={descriptionType} className={`mt-6 mb-10 ${descriptionStyles}`}>
                    {description}
                </TitleComponent>
            }
        </div>
    );
}

export default SectionTitle;