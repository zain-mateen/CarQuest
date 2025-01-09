import { Link } from 'react-router-dom';
import { List, X } from 'phosphor-react';
import Menu from './Menu';

import brandLogo from '../../images/brand-logo.svg';
import ThemeButton from '../ThemeButton/ThemeButton';
import { SocialLinkData, menuData } from '../../Data';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <>
            <header className='header fixed top-0 left-0 z-[9999] w-full bg-black shadow-md py-5 max-xl:py-4 border-b-[1px] border-borderPrimary'>
                <div className="container">
                    <div className='flex items-center justify-between'>
                        <Link to='/'>
                            <img className='w-auto h-[24px] object-contain' src={brandLogo} alt="Brand Logo" />
                        </Link>
                        <Menu />
                        <div 
                            className='hidden max-xl:flex items-center justify-center w-10 h-10 bg-primary text-white rounded-lg cursor-pointer duration-300 hover:bg-white hover:text-primary'
                            onClick={toggleMenu}
                        >
                            <List size={24} weight='bold' />
                        </div>
                    </div>
                </div>
            </header>
            <div
                className={`bg-black px-3 fixed top-0 ${
                    isOpen ? 'left-0 opacity-100 visible' : '-left-full opacity-0 invisible'
                } w-full max-w-full h-screen z-[9999] duration-500`}
            >
                <div className='flex items-center justify-between my-6'>
                    <Link to='/'>
                        <img className='w-auto h-[24px] object-contain' src={brandLogo} alt="Brand Logo" />
                    </Link>
                    <div 
                        className='flex items-center justify-center w-10 h-10 bg-primary text-white rounded-lg cursor-pointer duration-300 hover:bg-white hover:text-primary'
                        onClick={toggleMenu}
                    >
                        <X size={24} />
                    </div>
                </div>
                <ul className="flex flex-col gap-2">
                    {menuData.map((item, index) => (
                        <li key={index} className="relative">
                            {item.submenu ? (
                                <>
                                    <button
                                        onClick={() => toggleDropdown(index)}
                                        className={`flex items-center justify-between w-full text-sm font-semibold duration-300 ${
                                            openDropdown === index ? "text-primary" : "text-white"
                                        } hover:text-primary group`}
                                    >
                                        {item.label}
                                        {item.icon && (
                                            <span
                                                className={`duration-300 group-hover:text-primary ${
                                                    openDropdown === index ? "text-primary rotate-[540deg]" : "text-white"
                                                }`}
                                            >
                                                {item.icon}
                                            </span>
                                        )}
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            openDropdown === index ? "max-h-screen mt-2" : "max-h-0"
                                        }`}
                                    >
                                        <ul className="flex flex-col gap-2 px-3">
                                            {item.submenu.map((submenuItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link
                                                        href={submenuItem.path}
                                                        className="inline-block text-sm font-semibold text-white w-full duration-300 hover:text-primary"
                                                    >
                                                        {submenuItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={item.path}
                                    className="inline-block text-sm font-semibold text-white w-full duration-300 hover:text-primary"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                <div className='flex flex-wrap items-center gap-5 my-6'>
                    <ThemeButton variant='primary'>Book a Rental</ThemeButton>
                    <ThemeButton variant='secondary'>Book a Rental</ThemeButton>
                </div>
                <div className='flex items-center gap-5'>
                    {SocialLinkData.map(({ Icon, to }, index) => (
                        <Link key={index} to={to} target='_blank' className='flex group'>
                            <Icon className='text-white group-hover:text-primary duration-300' size={32} />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Header;
