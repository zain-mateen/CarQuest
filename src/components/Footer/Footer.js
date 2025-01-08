import { Link } from 'react-router-dom';
import { FooterSocialData } from '../../Data';
import TitleComponent from '../TitleComponent/TitleComponent';
import brandLogo from '../../images/brand-logo.svg'

const Footer = () => {
    return (
        <footer className='bg-secondary pt-12 bg-footer-bg bg-center bg-no-repeat bg-cover max-m:pt-10'>
            <div className='flex flex-col items-center gap-6 max-w-[700px] mx-auto text-center px-4'>
                <Link to='/' className='flex'>
                    <img className='w-auto h-[24px] max-m:h-[32px] object-contain' src={brandLogo} alt="Brand Logo" />
                </Link>
                <TitleComponent size='small-normal' className='text-white/[75%]'>
                    Experience the ease and convenience of renting a car with Novaride.
                </TitleComponent>
                <div className='flex items-center gap-5'>
                    {FooterSocialData.map(({ Icon, to }, index) => (
                        <Link key={index} to={to} target='_blank' className='flex group'>
                            <Icon className='text-white group-hover:text-primary duration-300' size={32} />
                        </Link>
                    ))}
                </div>
            </div>
            <div className='py-3 px-3 text-center mt-9 border-t-2 border-paragraphcolor'>
                <TitleComponent size='small-normal' className='text-white/[75%]'>
                    © 2024 
                    <Link className='inline mx-1 font-bold text-white hover:text-primary' to='/'>
                        NovaRide.
                    </Link>
                    All rights reserved.
                </TitleComponent>
            </div>
        </footer>
    );
}

export default Footer;
