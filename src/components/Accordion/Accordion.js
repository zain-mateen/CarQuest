import React, { useState, useRef, useEffect } from 'react';
import TitleComponent from '../TitleComponent/TitleComponent';

const Accordion = ({ item, variant = 'default' }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);
    const [contentHeights, setContentHeights] = useState([]);

    const toggleCollapse = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        const heights = contentRefs.current.map(ref => ref?.scrollHeight || 0);
            setContentHeights(heights);
    }, []);

    const getVariantStyles = (styleKey, isActive = false) => {
        const variantStyles = {
            default: {
                accordionStyles: '[&:not(:last-child)]:border-b [&:not(:last-child)]:border-solid [&:not(:last-child)]:border-white/[20%] pb-5',
                titleStyles: 'text-white text-left',
                iconStyles: 'text-2xl font-medium text-white',
                bodyStyles: 'pt-[5px] px-[36px]',
                contentBodyStyles: 'pt-3 pl-8',
                contentStyles: 'text-paragraphcolor',
            },
            primary: {
                accordionStyles: '[&:not(:last-child)]:border-b [&:not(:last-child)]:border-solid [&:not(:last-child)]:border-white/[20%] pb-5',
                titleStyles: 'text-white text-left',
                iconStyles: 'text-2xl font-medium text-white',
                contentStyles: 'text-paragraphcolor',
            },
            secondary: {
                accordionStyles: 'border border-solid border-white/[20%] rounded-xl overflow-hidden',
                activeAccordionStyles: 'pb-3 bg-primary',
                buttonStyles: 'py-3 px-5',
                activeButtonStyles: 'mb-3 border-b border-white/[20%]',
                titleStyles: 'text-left text-white',
                iconStyles: 'text-2xl font-medium text-white',
                activeContentBodyStyles: 'px-5',
                contentStyles: 'text-white',
            }
        };
        const styles = variantStyles[variant] || variantStyles.default;
        return styles[styleKey] + (isActive ? ` ${styles[`active${styleKey.charAt(0).toUpperCase() + styleKey.slice(1)}`]}` : '');
    };

    return (
        <div className="animate-fade flex flex-col gap-5">
            {item.map((data, index) => (
                <div
                    className={`${getVariantStyles('accordionStyles', openIndex === index)}`}
                    key={index}
                >
                    <button
                        className={`flex items-center justify-between gap-5 w-full ${getVariantStyles('buttonStyles', openIndex === index)}`}
                        onClick={() => toggleCollapse(index)}
                    >
                        <div className="flex items-center">
                            {data.number && (
                                <TitleComponent size="extra-large-semibold" className="text-white mr-5 text-left">
                                    {data.number}
                                </TitleComponent>
                            )}
                            <TitleComponent size="extra-large-semibold" className={`${getVariantStyles('titleStyles', openIndex === index)}`}>
                                {data.title}
                            </TitleComponent>
                        </div>
                        <span className={`${getVariantStyles('iconStyles', openIndex === index)}`}>
                            {openIndex === index ? '−' : '+'}
                        </span>
                    </button>
                    <div
                        ref={(el) => (contentRefs.current[index] = el)}
                        className="overflow-hidden transition-all duration-300 ease-in-out"
                        style={{ 
                            height: openIndex === index ? `${contentHeights[index]}px` : "0px",
                        }}
                    >
                        <div className={`${getVariantStyles('contentBodyStyles', openIndex === index)}`}>
                            <TitleComponent size="small-normal" className={`${getVariantStyles('contentStyles', openIndex === index)}`}>
                                {data.content}
                            </TitleComponent>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
