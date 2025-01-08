import React from 'react'
import CollectionCart from './CollectionCart'
import { CarTypeData } from '../../Data'

const CollectionSec = () => {
    return (
        <div className="collection">
            <div className="container">
                <div className='grid grid-cols-4 items-center gap-5 max-xl:grid-cols-2 max-m:grid-cols-1'>
                    {CarTypeData.slice(0, 4).map((data, index) => (
                        <CollectionCart key={index} data={data} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CollectionSec;
