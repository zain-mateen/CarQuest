import React from 'react';

const ThemeInput = ({ label, type, id, placeholder, additionalClasses }) => {
    return (
        <div className={`flex flex-col gap-2 ${additionalClasses}`}>
            <label className="text-base font-semibold text-white" htmlFor={id}>
                {label}
            </label>
            <input 
                className="text-sm font-semibold py-2 px-3 duration-300 rounded-full outline-none bg-black text-white placeholder:text-paragraphcolor focus:outline-none focus:border-white/[20%]" 
                type={type} 
                id={id} 
                placeholder={placeholder} 
            />
        </div>
    );
};

export default ThemeInput;
