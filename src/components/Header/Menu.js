import React from 'react';
import { Link } from 'react-router-dom';

import { menuData } from '../../Data';

const Menu = () => {
    return (
        <ul className="flex items-center gap-8 max-2xl:gap-6 max-xl:hidden">
            {menuData.map((item, index) => (
                <li 
                    className="relative group" 
                    key={index}
                >
                    <Link 
                        key={index}
                        className="inline-flex items-center text-sm font-semibold text-white gap-2 duration-300 hover:text-primary"
                        to={item.path}
                    >
                        {item.label}
                        {item.icon}
                    </Link>
                    {item.submenu && (
                        <div className="absolute top-28 start-0 opacity-0 invisible z-[9999] group-hover:top-full group-hover:opacity-100 group-hover:visible duration-300 pt-3">
                            <ul className="flex flex-col gap-2 p-5 w-[220px] bg-secondary rounded-2xl shadow-lg">
                                {item.submenu.map((subItem, subIndex) => (
                                    <li 
                                        className="relative group/submenu" 
                                        key={subIndex}
                                    >
                                        {subItem.submenu ? (
                                            <>
                                                <Link
                                                    className="inline-flex items-center justify-between w-full text-sm font-semibold text-white gap-2 duration-300 hover:text-primary"
                                                >
                                                    {subItem.label}{item.icon}
                                                </Link>
                                                <div className="absolute start-full top-28 pt-3 opacity-0 invisible group-hover/submenu:-top-6 group-hover/submenu:opacity-100 group-hover/submenu:visible duration-300">
                                                    <ul className="flex flex-col gap-2 p-5 w-[220px] bg-white rounded-2xl shadow-lg">
                                                        {subItem.submenu.map((secondSubItem, secondSubIndex) => (
                                                            <li 
                                                                className="relative" 
                                                                key={secondSubIndex}
                                                            >
                                                                <Link
                                                                    to={secondSubItem.path}
                                                                    className="inline-flex items-center text-sm font-semibold text-white gap-2 duration-300 hover:text-primary"
                                                                >
                                                                    {secondSubItem.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </>
                                        ) : (
                                            <Link 
                                                to={subItem.path}
                                                className="inline-flex items-center text-sm font-semibold text-white gap-2 duration-300 hover:text-primary"
                                            >
                                                {subItem.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default Menu;
