import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'phosphor-react';

import TitleComponent from '../TitleComponent/TitleComponent';

import doorIcon from '../../images/icon-door.svg';
import passengerIcon from '../../images/icon-passengers.svg';

const CarCart = ({ data }) => {
    const specifications = [
        { label: 'Doors', icon: doorIcon, value: data.DoorText },
        { label: 'Passengers', icon: passengerIcon, value: data.PassengerText },
    ];

    return (
        <div className="border border-borderPrimary rounded-3xl p-5">
            <img src={data.image} alt={data.heading} className="w-full h-auto rounded-lg mb-4" />
            <Link className="inline-flex py-2.5 px-5 bg-borderPrimary rounded-full text-xs font-bold text-white uppercase tracking-wide mb-4">
                {data.tagText}
            </Link>
            <Link 
                to={`/cars/${data.id}`}
                className="block text-xl font-semibold text-white my-4 hover:text-primary transition-colors"
            >
                {data.heading}
            </Link>
            <ul className="flex flex-col gap-4 border-t border-borderPrimary pt-6">
                {specifications.map((spec, index) => (
                    <li key={index} className="flex items-center justify-between">
                        <label className="flex items-center gap-2">
                            <img className="w-5" src={spec.icon} alt={`${spec.label} icon`} />
                            <TitleComponent size="base-normal" className="text-paragraphcolor">
                                {spec.label}
                            </TitleComponent>
                        </label>
                        <TitleComponent size="base-normal" className="text-paragraphcolor">
                            {spec.value}
                        </TitleComponent>
                    </li>
                ))}
            </ul>
            <div className="flex items-center justify-between border-t border-borderPrimary mt-6 pt-6">
                <TitleComponent type="h4" className="text-white">
                    ${data.price}
                    <TitleComponent size="small-normal" className="inline text-white">
                        /Per Day
                    </TitleComponent>
                </TitleComponent>
                <Link 
                    to={`/cars/${data.id}`}
                    className="flex items-center justify-center w-10 h-10 bg-primary rounded-full text-white rotate-[-45deg] transition-all duration-500 hover:bg-white hover:text-primary hover:rotate-0"
                >
                    <ArrowRight size={20} weight="bold" />
                </Link>
            </div>
        </div>
    );
};

export default CarCart;