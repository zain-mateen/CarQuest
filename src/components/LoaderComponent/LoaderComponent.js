import React from 'react'

const LoaderComponent = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <div className="relative flex items-center justify-center">
                <div className="absolute w-16 h-16 rounded-full bg-white animate-ping" />
                <div className="relative w-12 h-12 rounded-full bg-primary" />
            </div>
        </div>
    )
}

export default LoaderComponent;
