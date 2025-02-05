import { CaretDown, FacebookLogo, InstagramLogo, LinkedinLogo, Star, TwitterLogo, YoutubeLogo } from "phosphor-react"
import { ServiceIcon1, ServiceIcon2, ServiceIcon3, ServiceIcon4, ServiceIcon5, ServiceIcon6, ServiceIcon7, ServiceIcon8, ChooseUsIcon1, ChooseUsIcon2, ChooseUsIcon3, ChooseUsIcon4, PhoneIcon, CarIcon } from "./components/SvgIcons/SvgIcons";

import companyLogo1 from './images/client-logo-1.svg';
import companyLogo2 from './images/client-logo-2.svg';
import companyLogo3 from './images/client-logo-3.svg';
import companyLogo4 from './images/client-logo-4.svg';
import companyLogo5 from './images/client-logo-5.svg';
import companyLogo6 from './images/client-logo-6.svg';

import ParterIcon1 from './images/partner-logo-1.svg';
import ParterIcon2 from './images/partner-logo-2.svg';
import ParterIcon3 from './images/partner-logo-3.svg';
import ParterIcon4 from './images/partner-logo-4.svg';


export const menuData = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'About Us',
        path: '/about',
    },
    {
        label: 'Service',
        path: '/service',
    },
    {
        label: 'Cars',
        icon: <CaretDown size={12} weight="bold" />,
        submenu: [
            { label: 'Car Lists', path: '/cars' },
            { label: 'Car Type', path: '/car-type' },
        ],
    },
    {
        label: 'Pages',
        icon: <CaretDown size={12} weight="bold" />,
        submenu: [
            { label: 'Blog', path: '/blog' },
            { label: 'Pricing', path: '/pricing' },
            { label: 'Image Gallery', path: '/image-gallery' },
            { label: 'Video Gallery', path: '/video-gallery' },
            { label: 'Testimonials', path: '/testimonials' },
            { label: 'Faqs', path: '/faqs' },
            { label: 'Drivers', path: '/drivers', },
        ],
    },
    {
        label: 'Contact Us',
        path: '/contact',
    },
];
export const HeroFormData = [
    {
        label: 'Full Name',
        type: 'text',
        id: 'name',
        placeholder: 'Enter Full Name',
        additionalClasses: 'border-s border-gray-300 ps-5 max-2xl:border-s-0 max-2xl:ps-0',
    },
    {
        label: 'Number',
        type: 'number',
        id: 'number',
        placeholder: 'Enter Number',
        additionalClasses: 'border-s border-gray-300 ps-5 max-xl:p-0 max-xl:border-none',
    },
    {
        label: 'Pickup Location',
        type: 'text',
        id: 'location',
        placeholder: 'Enter Location',
        additionalClasses: 'border-s border-gray-300 ps-5 max-xl:border-0 max-xl:p-0',
    },
    {
        label: 'Pickup Date',
        type: 'date',
        id: 'date',
        placeholder: 'Enter Date',
        additionalClasses: 'w-full border-x border-gray-300 px-5 max-xl:p-0 max-xl:border-none',
    },
];
export const blogDetailFormData = [
    {
        id: "comment",
        label: "Comment *",
        type: "textarea",
        placeholder: "Enter your comment",
        className: "text-base font-medium text-white py-3 px-5 bg-secondary rounded-lg border-none outline-none resize-none h-60",
        wrapperClass: "flex flex-col gap-1 col-span-3",
    },
    {
        id: "name",
        label: "Name *",
        type: "text",
        placeholder: "Enter your name",
        className: "text-base font-medium text-white py-3 px-5 bg-secondary rounded-lg border-none outline-none w-full",
        wrapperClass: "flex flex-col gap-1",
    },
    {
        id: "email",
        label: "Email *",
        type: "email",
        placeholder: "Enter your email",
        className: "text-base font-medium text-white py-3 px-5 bg-secondary rounded-lg border-none outline-none w-full",
        wrapperClass: "flex flex-col gap-1",
    },
    {
        id: "website",
        label: "Website *",
        type: "text",
        placeholder: "Enter your website",
        className: "text-base font-medium text-white py-3 px-5 bg-secondary rounded-lg border-none outline-none w-full",
        wrapperClass: "flex flex-col gap-1",
    },
];
export const features = [
    {
        icon: PhoneIcon,
        title: "Easy Booking Process",
        description: "We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service",
    },
    {
        icon: CarIcon,
        title: "Easy Booking Process",
        description: "We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service",
    }
];
export const SocialLinkData = [
    { id:'youtube-logo', Icon: YoutubeLogo, to: 'https://www.youtube.com/' },
    { id:'facebook-logo', Icon: FacebookLogo, to: 'https://www.facebook.com/', },
    { id:'twitter-logo', Icon: TwitterLogo, to: 'https://x.com/' },
    { id:'instagram-logo', Icon: InstagramLogo, to: 'https://www.instagram.com/' },
    { id:'linkedin-logo', Icon: LinkedinLogo, to: 'https://www.linkedin.com/' }
];
export const CarData = [
    {
        id: 'voyager-hybrid',
        image: require('./images/Voyager-Hybrid.webp'),
        category: 'Electric Car',
        heading: 'Voyager Hybrid',
        DoorText: '4',
        PassengerText: '2',
        price: '248',
    },
    {
        id: 'saphire-convertible',
        image: require('./images/Sapphire-Convertible.webp'),
        category: 'Coupe Car',
        heading: 'Sapphire Convertible',
        DoorText: '4',
        PassengerText: '2',
        price: '219',
    },
    {
        id: 'harrier-wagon',
        image: require('./images/Harrier-Wagon.webp'),
        category: 'Coupe Car',
        heading: 'Harrier Wagon',
        DoorText: '4',
        PassengerText: '2',
        price: '169',
    },
    {
        id: 'eclipse-sedan',
        image: require('./images/Eclipse-Sedan.webp'),
        category: 'Coupe Car',
        heading: 'Eclipse Sedan',
        DoorText: '4',
        PassengerText: '2',
        price: '139',
    },
    {
        id: 'breeze-compact',
        image: require('./images/Breeze-Compact.webp'),
        category: 'Convertible Car',
        heading: 'Breeze Compact',
        DoorText: '4',
        PassengerText: '2',
        price: '139',
    },
    {
        id: 'voyager-gt',
        image: require('./images/Voyager-GT.webp'),
        category: 'luxury Car',
        heading: 'Voyager GT',
        DoorText: '4',
        PassengerText: '2',
        price: '259',
    },
    {
        id: 'viper-sxt',
        image: require('./images/Viper-SXT.webp'),
        category: 'Coupe Car',
        heading: 'Viper SXT',
        DoorText: '4',
        PassengerText: '2',
        price: '329',
    },
    {
        id: 'skyline-elite',
        image: require('./images/Skyline-Elite.webp'),
        category: 'Convertible Car',
        heading: 'Skyline Elite',
        DoorText: '4',
        PassengerText: '2',
        price: '29',
    },
    {
        id: 'nova-glide',
        image: require('./images/Nova-Glide.webp'),
        category: 'Convertible Car',
        heading: 'Nova Glide',
        DoorText: '4',
        PassengerText: '2',
        price: '19',
    },
    {
        id: 'meteor-gt',
        image: require('./images/Meteor-GT.webp'),
        category: 'Sedan Car',
        heading: 'Meteor GT',
        DoorText: '4',
        PassengerText: '2',
        price: '219',
    },
    {
        id: 'gladiator-lx',
        image: require('./images/Gladiator-LX.webp'),
        category: 'Convertible Car',
        heading: 'Gladiator LX',
        DoorText: '4',
        PassengerText: '2',
        price: '165',
    },
    {
        id: 'cobra-classic',
        image: require('./images/Cobra-Classic.webp'),
        category: 'Luxury Car',
        heading: 'Cobra Classic',
        DoorText: '4',
        PassengerText: '2',
        price: '349',
    },
    {
        id: 'aurora-lx',
        image: require('./images/Aurora-LX.webp'),
        category: 'Convertible Car',
        heading: 'Aurora LX',
        DoorText: '4',
        PassengerText: '2',
        price: '129',
    },
    {
        id: 'turbomax-speedster',
        image: require('./images/TurboMax-Speedster.webp'),
        category: 'Convertible Car',
        heading: 'TurboMax Speedster',
        DoorText: '4',
        PassengerText: '2',
        price: '169',
    },
    {
        id: 'pioneer-compact',
        image: require('./images/Pioneer-Compact.webp'),
        category: 'Luxury Car',
        heading: 'Pioneer Compact',
        DoorText: '4',
        PassengerText: '2',
        price: '189',
    },
    {
        id: 'phantom-drive',
        image: require('./images/Phantom-Drive.webp'),
        category: 'Coupe Car',
        heading: 'Phantom Drive',
        DoorText: '4',
        PassengerText: '2',
        price: '149',
    },
    {
        id: 'falcon-x-cruiser',
        image: require('./images/Falcon-X-Cruiser.webp'),
        category: 'Sedan Car',
        heading: 'Falcon X Cruiser',
        DoorText: '4',
        PassengerText: '2',
        price: '349',
    },
    {
        id: 'desert-storm',
        image: require('./images/Desert-Storm.webp'),
        category: 'Convertible Car',
        heading: 'Desert Storm',
        DoorText: '4',
        PassengerText: '2',
        price: '249',
    },
    {
        id: 'eclipse-sport-3000',
        image: require('./images/Eclipse-Sport-3000.webp'),
        category: 'Sport Car',
        heading: 'Eclipse Sport 3000',
        DoorText: '4',
        PassengerText: '2',
        price: '128',
    },
];
export const CarSingleData = [
    {
        id: "voyager-hybrid",
        heading: "Voyager Hybrid",
    },
    {
        id: "saphire-convertible",
        heading: "Saphire Convertible",
    },
    {
        id: "harrier-wagon",
        heading: "Harrier Wagon",
    },
    {
        id: "eclipse-sedan",
        heading: "Eclipse Sedan",
    },
    {
        id: "breeze-compact",
        heading: "Breeze Compact",
    },
    {
        id: "voyager-gt",
        heading: "Voyager GT",
    },
    {
        id: "viper-sxt",
        heading: "Viper SXT",
    },
    {
        id: "skyline-elite",
        heading: "Skyline ELite",
    },
    {
        id: "novaglide",
        heading: "NovaGLide",
    },
    {
        id: "meteor-gt",
        heading: "Meteor GT",
    },
    {
        id: "galiator-lx",
        heading: "Galiator LX",
    },
    {
        id: "cobra-classic",
        heading: "Cobra Classic",
    },
    {
        id: "aurora-lx",
        heading: "Aurora LX",
    },
    {
        id: "turbomax-speedster",
        heading: "TurboMax Speedster",
    },
    {
        id: "pioneer-compact",
        heading: "Pioneer Compact",
    },
    {
        id: "phantom-drive",
        heading: "Phantom Drive",
    },
    {
        id: "falcon-x-cruiser",
        heading: "Falcon X Cruiser",
    },
    {
        id: "desert-storm",
        heading: "Desert Storm",
    },
    {
        id: "eclipse-sport-3000",
        heading: "Eclipse Sport 3000",
    },
]
export const CompanyLogos = [
    { logoImage: companyLogo1, logoText: 'Mercedes-Benz', },
    { logoImage: companyLogo2, logoText: 'Audi', },
    { logoImage: companyLogo3, logoText: 'Jaquar', },
    { logoImage: companyLogo4, logoText: 'Volkswagon', },
    { logoImage: companyLogo5, logoText: 'Acura', },
    { logoImage: companyLogo6, logoText: 'Honda', },
    { logoImage: companyLogo1, logoText: 'Mercedes-Benz', },
    { logoImage: companyLogo2, logoText: 'Audi', },
    { logoImage: companyLogo3, logoText: 'Jaquar', },
    { logoImage: companyLogo4, logoText: 'Volkswagon', },
    { logoImage: companyLogo5, logoText: 'Acura', },
    { logoImage: companyLogo6, logoText: 'Honda', },
];
export const TestimonialData = [
    {
        message: 'Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive. Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.',
        authorImage: require('./images/author-1.webp'),
        name: 'Floyd Miles',
        profession: 'Rental Sales Agent',
        stars: [
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> }
        ]
    },
    {
        message: 'Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive. Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.',
        authorImage: require('./images/author-2.webp'),
        name: 'Annette Black',
        profession: 'Service Representative',
        stars: [
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> }
        ]
    },
    {
        message: 'Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive. Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.',
        authorImage: require('./images/author-3.webp'),
        name: 'Leslie Alexander',
        profession: 'Project Manager',
        stars: [
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> }
        ]
    },
    {
        message: 'Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive. Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.',
        authorImage: require('./images/author-4.webp'),
        name: 'Alis White',
        profession: 'Counter Agent',
        stars: [
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> }
        ]
    },
    {
        message: 'Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive. Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.',
        authorImage: require('./images/author-5.webp'),
        name: 'Sophia Thompson',
        profession: 'Service Representative',
        stars: [
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> }
        ]
    },
    {
        message: 'Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive. Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.',
        authorImage: require('./images/author-6.webp'),
        name: 'Luna Vega',
        profession: 'Branch Representative',
        stars: [
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> }
        ]
    },
    {
        message: 'Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive. Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.',
        authorImage: require('./images/author-7.webp'),
        name: 'Aurora Wynn',
        profession: 'Relations Coordinator',
        stars: [
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> }
        ]
    },
    {
        message: 'Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive. Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.',
        authorImage: require('./images/author-8.webp'),
        name: 'Juniper Monroe',
        profession: 'Experience Manager',
        stars: [
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> }
        ]
    },
    {
        message: 'Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive. Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.',
        authorImage: require('./images/author-9.webp'),
        name: 'Daisy Meadows',
        profession: 'Service Desk Associate',
        stars: [
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> },
            { icon: <Star size={20} weight="fill" className="text-primary" /> }
        ]
    },
];
export const ChooseUsSecLeftData = [
    {
        icon: ChooseUsIcon1,
        title:'Extensive Fleet Options',
        description:'Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa',
    },
    {
        icon: ChooseUsIcon2,
        title:'Exceptional Customer Service',
        description:'Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa',
    },
];
export const ChooseUsSecRightData = [
    {
        icon: ChooseUsIcon3,
        title:'Convenient Locations',
        description:'Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa',
    },
    {
        icon: ChooseUsIcon4,
        title:'Reliability And Safety',
        description:'Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa',
    },
];
export const CarTypeData = [
    {
        title: 'Sport Car',
        image: require('./images/luxury-collection-img-1.webp'),
        link: '/'
    },
    {
        title: 'Convertible Car',
        image: require('./images/luxury-collection-img-2.webp'),
        link: '/'
    },
    {
        title: 'Sedan Car',
        image: require('./images/luxury-collection-img-3.webp'),
        link: '/'
    },
    {
        title: 'Luxury Car',
        image: require('./images/luxury-collection-img-4.webp'),
        link: '/'
    },
    {
        title: 'Electric Car',
        image: require('./images/luxury-collection-img-5.webp'),
        link: '/'
    },
    {
        title: 'Coupe Car',
        image: require('./images/luxury-collection-img-6.webp'),
        link: '/'
    },
];
export const TeamSocialLinks = [
    { Icon: FacebookLogo, link: '' },
    { Icon: YoutubeLogo, link: '' },
    { Icon: InstagramLogo, link: '' },
    { Icon: TwitterLogo, link: '' },
];
export const ServiceData = [
    {
        id: 'car-rental-with-driver',
        icon: ServiceIcon1,
        svgStyles: 'relative z-10 max-l:w-[46px] max-l:h-[54px]',
        heading: 'Car Rental With Driver',
        to: '/',
        description: 'Enhance your rental experience with additional options.',
    },
    {
        id: 'business-car-rental',
        icon: ServiceIcon2,
        svgStyles: 'relative z-10 max-l:w-[46px] max-l:h-[54px]',
        heading: 'Business Car Rental',
        to: '/',
        description: 'Enhance your rental experience with additional options.',
    },
    {
        id: 'airport-transfer',
        icon: ServiceIcon3,
        svgStyles: 'relative z-10 max-l:w-[46px] max-l:h-[54px]',
        heading: 'Airport Transfer',
        to: '/',
        description: 'Enhance your rental experience with additional options.',
    },
    {
        id: 'chauffeur-servies',
        icon: ServiceIcon4,
        svgStyles: 'relative z-10 max-l:w-[46px] max-l:h-[54px]',
        heading: 'Chauffeur Services',
        to: '/',
        description: 'Enhance your rental experience with additional options.',
    },
    {
        id: 'private-transfer',
        icon: ServiceIcon5,
        svgStyles: 'relative z-10 max-l:w-[46px] max-l:h-[54px]',
        heading: 'Private Transfer',
        to: '/',
        description: 'Enhance your rental experience with additional options.',
    },
    {
        id: 'vip-transfer',
        icon: ServiceIcon6,
        svgStyles: 'relative z-10 max-l:w-[46px] max-l:h-[54px]',
        heading: 'VIP Transfer',
        to: '/',
        description: 'Enhance your rental experience with additional options.',
    },
    {
        id: 'roadside-assistance',
        icon: ServiceIcon7,
        svgStyles: 'relative z-10 max-l:w-[46px] max-l:h-[54px]',
        heading: 'Roadside Assistance',
        to: '/',
        description: 'Enhance your rental experience with additional options.',
    },
    {
        id: 'event-transportation',
        icon: ServiceIcon8,
        svgStyles: 'relative z-10 max-l:w-[46px] max-l:h-[54px]',
        heading: 'Event Transportation',
        to: '/',
        description: 'Enhance your rental experience with additional options.',
    },
];
export const ServiceDetailData = [
    {
        id: 'car-rental-with-driver',
        heading: 'Car Rental With Driver',
    },
    {
        id: 'business-car-rental',
        heading: 'Business Car Rental',
    },
    {
        id: 'airport-transfer',
        heading: 'Airport Transfer',
    },
    {
        id: 'chauffeur-services',
        heading: 'Chauffeur Services',
    },
    {
        id: 'private-transfer',
        heading: 'Private Transfer',
    },
    {
        id: 'vip-transfer',
        heading: 'VIP Transfer',
    },
    {
        id: 'roadside-assistance',
        heading: 'Roadside Assistance',
    },
    {
        id: 'event-transportation',
        heading: 'Event Transportation',
    },
];
export const FaqData = {
    WorkSecDropdownData: [
        {
            number: '1.',
            title: 'Browse And Select',
            content: 'Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs',
        },
        {
            number: '2.',
            title: 'Book And Confirm',
            content: 'Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs',
        },
        {
            number: '3.',
            title: 'Book And Enjoy',
            content: 'Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs',
        },
    ],
    FaqSecDropdownData: [
        {
            title: 'What Do I Need To Rent A Car?',
            content: 'Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs',
        },
        {
            title: 'How Old Do I Need To Be To Rent A Car?',
            content: 'Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs',
        },
        {
            title: 'can I Rent A Car With A Debit Card?',
            content: 'Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs',
        },
    ],
    ServiceFaqData: [
        {
            title: "Driver's License Requirements",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            title: "Insurance and Converage Policy",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            title: "Available payment Methods",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            title: "Cancellation and Modification policy",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
    ],
    FaqGeneralInformationData: [
        {
            title: "What types of vehicles are available for rent?",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            title: "Where are your rental locations?",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            title: "What are your hours of operation?",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            title: "Cancellation and Modification policy",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
    ],
    FaqBookingAndReservationsData: [
        {
            title: "How do I make a reservation?",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            title: "Can I modify or cancel my reservation?",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            title: "What is your cancellation policy?",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
    ],
    FaqPricingAndPaymentData: [
        {
            title: "What forms of payment do you accept?",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            title: "Are there any hidden fees?",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            title: "Do you require a deposit?",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
    ],
    FaqVehicleInformationData: [
        {
            title: "Are your vehicles insured?",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            title: "Do you offer vehicles with automatic transmission?",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            title: "Can I choose a specific vehicle model?",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
    ],
    PolicyAndAgreementData: [
        {
            title: "Driver's License Requirements",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            title: "Insurance and Coverage policy",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            title: "Available payment Methods",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            title: "Cancellation and Modification policy",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            title: "Smoking and Pet Policies",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            title: "The minimum age Requirements",
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
    ],
};
export const BlogPostData = [
    {
        image: require('./images/post-2.webp'),
        date: 'August 5, 2024',
        title: 'Exploring your rental car options: sedan, suv, or convertible?'
    },
    {
        image: require('./images/post-3.webp'),
        date: 'August 5, 2024',
        title: 'The pros and cons of renting a car vs. using rideshare services'
    },
    {
        image: require('./images/post-4.webp'),
        date: 'August 5, 2024',
        title: 'Why you should consider renting a luxury car for your next trip'
    }
];
export const BlogData = [
    {
        id: 'top-tips-for-booking-your-car-rental-what-you-need-to-know',
        image: require('./images/post-1.webp'),
        dateText: ' August 5, 2024',
        heading: 'Top tips for booking your car rental: what you need to know',
    },
    {
        id: 'exploring-your-rental-car-options-sedan-suv-or-convertible',
        image: require('./images/post-2.webp'),
        dateText: ' August 5, 2024',
        heading: 'Exploring your rental car options: sedan, suv, or convertible?',
    },
    {
        id: 'the-pros-and-cons-of-renting-a-car-vs-using-rideshare-services',
        image: require('./images/post-3.webp'),
        dateText: ' August 5, 2024',
        heading: 'The pros and cons of renting a car vs. using rideshare services',
    },
    {
        id: 'why-you-should-consider-renting-a-luxury-car-for-your-next-trip',
        image: require('./images/post-4.webp'),
        dateText: ' August 5, 2024',
        heading: 'Why you should consider renting a luxury car for your next trip',
    },
    {
        id: 'what-to-expect-when-renting-a-car-for-the-first-time',
        image: require('./images/post-5.webp'),
        dateText: ' August 5, 2024',
        heading: 'What to expect when renting a car for the first time',
    },
    {
        id: 'the-best-apps-for-managing-your-car-rental-experience',
        image: require('./images/post-6.webp'),
        dateText: ' August 5, 2024',
        heading: 'The best apps for managing your car rental experience',
    },
];
export const BlogDetailData = [
    {
        id: 'top-tips-for-booking-your-car-rental-what-you-need-to-know',
        image: require('./images/post-1.webp'),
        dateText: ' August 5, 2024',
        heading: 'Top tips for booking your car rental: what you need to know',
    },
    {
        id: 'exploring-your-rental-car-options-sedan-suv-or-convertible',
        image: require('./images/post-2.webp'),
        dateText: ' August 5, 2024',
        heading: 'Exploring your rental car options: sedan, suv, or convertible?',
    },
    {
        id: 'the-pros-and-cons-of-renting-a-car-vs-using-rideshare-services',
        image: require('./images/post-3.webp'),
        dateText: ' August 5, 2024',
        heading: 'The pros and cons of renting a car vs. using rideshare services',
    },
    {
        id: 'why-you-should-consider-renting-a-luxury-car-for-your-next-trip',
        image: require('./images/post-4.webp'),
        dateText: ' August 5, 2024',
        heading: 'Why you should consider renting a luxury car for your next trip',
    },
    {
        id: 'what-to-expect-when-renting-a-car-for-the-first-time',
        image: require('./images/post-5.webp'),
        dateText: ' August 5, 2024',
        heading: 'What to expect when renting a car for the first time',
    },
    {
        id: 'the-best-apps-for-managing-your-car-rental-experience',
        image: require('./images/post-6.webp'),
        dateText: ' August 5, 2024',
        heading: 'The best apps for managing your car rental experience',
    },
];
export const DriversData = [
    { id: 'john-smith', image: require('./images/team-1.webp'), heading: 'John Smith', text: 'Senior Chauffeur', },
    { id: 'taylor-smith', image: require('./images/team-2.webp'), heading: 'Taylor Smith', text: 'City Tour Guide', },
    { id: 'jordan-brown', image: require('./images/team-3.webp'), heading: 'Jordan Brown', text: 'Distance Driver', },
    { id: 'davis-casey', image: require('./images/team-4.webp'), heading: 'Davis Casey', text: 'Travel Specialist', },
    { id: 'morgan-lee', image: require('./images/team-5.webp'), heading: 'Morgan Lee', text: 'Travel Consultant', },
    { id: 'carlos-mendes', image: require('./images/team-6.webp'), heading: 'Carlos Mendes', text: 'Airport Transfer', },
    { id: 'riley-walker', image: require('./images/team-7.webp'), heading: 'Riley Walker', text: 'Executive Chauffeur', },
    { id: 'avery-hall', image: require('./images/team-8.webp'), heading: 'Avery Hall', text: 'Shuttle Driver', },
];
export const DriversDetailData = [
    { 
        id: 'john-smith', 
        image: require('./images/team-1.webp'), 
        heading: 'John Smith', 
        firstName: 'John',
        text: 'Senior Chauffeur', 
    },
    { 
        id: 'taylor-smith', 
        image: require('./images/team-2.webp'), 
        heading: 'Taylor Smith', 
        firstName: 'Taylor',
        text: 'City Tour Guide', 
    },
    { 
        id: 'jordan-brown', 
        image: require('./images/team-3.webp'), 
        heading: 'Jordan Brown',
        firstName: 'Jordan', 
        text: 'Distance Driver', 
    },
    { 
        id: 'davis-casey', 
        image: require('./images/team-4.webp'), 
        heading: 'Davis Casey',
        firstName: 'Davis', 
        text: 'Travel Specialist', 
    },
    { 
        id: 'morgan-lee', 
        image: require('./images/team-5.webp'), 
        heading: 'Morgan Lee',
        firstName: 'Morgan', 
        text: 'Travel Consultant', 
    },
    { 
        id: 'carlos-mendes', 
        image: require('./images/team-6.webp'), 
        heading: 'Carlos Mendes',
        firstName: 'Carlos', 
        text: 'Airport Transfer', 
    },
    { 
        id: 'riley-walker', 
        image: require('./images/team-7.webp'), 
        heading: 'Riley Walker',
        firstName: 'Riley', 
        text: 'Executive Chauffeur', 
    },
    { 
        id: 'avery-hall', 
        image: require('./images/team-8.webp'), 
        heading: 'Avery Hall',
        firstName: 'Avery', 
        text: 'Shuttle Driver', 
    },
];
export const partnerSecData = [
    { icon: ParterIcon1, },
    { icon: ParterIcon2, },
    { icon: ParterIcon3, },
    { icon: ParterIcon4, },
    { icon: ParterIcon3, },
    { icon: ParterIcon4, },
    { icon: ParterIcon1, },
    { icon: ParterIcon2, },
];
export const PricingData = [
    {
        carImage: require('./images/Viper-SXT.webp'),
        heading: 'Luxury Car',
        description: 'Specifies the type or model of the car available for rent.',
        price: '29',
    },
    {
        pricingCartStyles: 'bg-primary border-none',
        carImage: require('./images/Viper-SXT.webp'),
        heading: 'Convertible Car',
        headingStyles: 'text-white',
        description: 'Specifies the type or model of the car available for rent.',
        descriptionStyles: 'text-white',
        price: '49',
        priceStyles: 'text-white',
        buttonVariant: 'tertiary',
    },
    {
        carImage: require('./images/Viper-SXT.webp'),
        heading: 'Sport Car',
        description: 'Specifies the type or model of the car available for rent.',
        price: '79',
    },
];
export const ImageGalleryData = [
    { Image: require('./images/gallery-1.webp'), },
    { Image: require('./images/gallery-2.webp'), },
    { Image: require('./images/gallery-3.webp'), },
    { Image: require('./images/gallery-4.webp'), },
    { Image: require('./images/gallery-5.webp'), },
    { Image: require('./images/gallery-6.webp'), },
    { Image: require('./images/gallery-7.webp'), },
    { Image: require('./images/gallery-8.webp'), },
    { Image: require('./images/gallery-9.webp'), },
];
export const VideoGalleryData = [
    { Image: require('./images/video-gallery-img-1.webp') },
    { Image: require('./images/video-gallery-img-2.webp') },
    { Image: require('./images/video-gallery-img-3.webp') },
    { Image: require('./images/video-gallery-img-4.webp') },
    { Image: require('./images/video-gallery-img-5.webp') },
    { Image: require('./images/video-gallery-img-6.webp') },
    { Image: require('./images/video-gallery-img-7.webp') },
    { Image: require('./images/video-gallery-img-8.webp') },
    { Image: require('./images/video-gallery-img-9.webp') },
];