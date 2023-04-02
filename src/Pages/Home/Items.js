import React, { useEffect, useState } from 'react';
import SingleItem from './SingleItem';

const Items = () => {

    const [products, setProducts] = useState();
    useEffect(() => {
        fetch('https://enigmatic-anchorage-70082.herokuapp.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                console.log(data);

            });
    }, []);
    return (

        <div className='mt-16'>
            <h1 className='text-center text-2xl font-bold'>  Engine Parts Available Now </h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

                {
                    products?.map((product) => <SingleItem
                        key={product._id}
                        product={product}
                    ></SingleItem>)
                }

            </div>
        </div>
    );
};

export default Items;