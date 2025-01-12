import { Link } from 'react-router-dom';
import { SocialLinkData } from '../../Data';
import TitleComponent from '../TitleComponent/TitleComponent';
import brandLogo from '../../images/brand-logo.svg'
import MarqueeSlider from '../MarqueeSlider/MarqueeSlider';

const Footer = () => {
    return (
        <div className='bg-secondary'>
            <footer className='relative pt-12 pb-10 bg-footer-bg bg-center bg-no-repeat bg-cover max-m:pt-10 max-m:pb-6'>
                <div className='flex flex-col gap-2 absolute top-1/2 -translate-y-1/2 w-full overflow-hidden max-m:hidden'>
                    <MarqueeSlider 
                        MarqueeText='carquest'
                        initialDirection={1}
                        MarqueeTextStyles='text-[200px] font-black leading-[200px] opacity-5'
                    />
                </div>
                <div className='relative z-10'>
                    <div className='flex flex-col items-center gap-6 max-w-[700px] mx-auto text-center px-4'>
                        <Link to='/' className='flex'>
                            <img className='w-auto h-[24px] max-m:h-[32px] object-contain' src={brandLogo} alt="Brand Logo" />
                        </Link>
                        <TitleComponent size='small-normal' className='text-white/[75%]'>
                            Experience the ease and convenience of renting a car with CarQuest.
                        </TitleComponent>
                        <div className='flex items-center gap-5'>
                            {SocialLinkData.map(({ Icon, to }, index) => (
                                <Link key={index} to={to} target='_blank' className='flex group'>
                                    <Icon className='text-white group-hover:text-primary duration-300' size={32} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
            <div className='py-3 px-3 text-center border-t-2 border-paragraphcolor'>
                <TitleComponent size='small-normal' className='text-white/[75%]'>
                    © 2024 
                    <Link className='inline mx-1 font-bold text-white hover:text-primary' to='/'>
                        CarQuest.
                    </Link>
                    All rights reserved.
                </TitleComponent>
            </div>
        </div>
    );
}

export default Footer;
