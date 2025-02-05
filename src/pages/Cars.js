import React, { useState } from 'react';
import InnerHeader from '../components/Header/InnerHeader';
import TitleComponent from '../components/TitleComponent/TitleComponent';
import ThemeButton from '../components/ThemeButton/ThemeButton';
import CarCart from '../components/FleetSec/CarCart';
import { CarData } from '../Data';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';

const CartCartData = [
    'Convertible',
    'Coupe',
    'Electric',
    'Luxury',
    'Sedan',
    'Sport',
];

const Cars = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(CarData.length / itemsPerPage);

    const currentData = CarData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (pageNumber) => {
        setIsLoading(true);

        setTimeout(() => {
            setCurrentPage(pageNumber);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <>
            <InnerHeader Heading="Cars" CurrentPage="Cars" />
            <div className="car-page-sec py-28 max-xl:py-20 max-m:py-12">
                <div className="container">
                    <div className="grid grid-cols-4 gap-8 max-xl:grid-cols-1 max-xl:gap-x-0">
                        <div className="relative">
                            <div className="sticky top-20 left-0 p-6 rounded-3xl bg-secondary">
                                <div className="mb-6 border-b border-solid border-borderPrimary">
                                    <input
                                        type="text"
                                        placeholder="Search ..."
                                        className="border-none outline-none rounded-full py-3 px-5 w-full bg-black text-white"
                                    />
                                </div>
                                <TitleComponent
                                    size="extra-large-semibold"
                                    className="text-white mb-6"
                                >
                                    Car Types
                                </TitleComponent>
                                <div className="flex flex-col gap-2.5">
                                    {CartCartData.map((type, index) => (
                                        <label
                                            key={index}
                                            className="flex items-center text-paragraphcolor text-base font-medium"
                                        >
                                            <input
                                                className="w-4 h-4 mr-2"
                                                type="checkbox"
                                                name={type}
                                            />
                                            {type} Car
                                        </label>
                                    ))}
                                </div>
                                <div className="pt-6 mt-6 border-t border-solid border-borderPrimary">
                                    <ThemeButton variant="primary">Search</ThemeButton>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            {isLoading ? (
                                <LoaderComponent />
                            ) : (
                                <>
                                    <div className="grid grid-cols-3 gap-6 max-l:grid-cols-2 max-m:grid-cols-1">
                                        {currentData.map((car, index) => (
                                            <CarCart key={index} data={car} />
                                        ))}
                                    </div>

                                    <div className="mt-8 flex justify-center items-center">
                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handlePageChange(index + 1)}
                                                className={`mx-2 px-4 py-2 rounded-lg duration-300 hover:bg-primary hover:text-white ${
                                                    currentPage === index + 1
                                                        ? 'bg-primary text-white'
                                                        : 'bg-white text-black'
                                                }`}
                                            >
                                                {index + 1}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cars;