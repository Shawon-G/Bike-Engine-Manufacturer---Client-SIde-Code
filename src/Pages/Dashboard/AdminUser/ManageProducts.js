import React, { useEffect, useState } from 'react';
import MainButton from '../../Shared/MainButton';

const ManageProducts = () => {

    const [products, setProducts] = useState();
    useEffect(() => {
        fetch('https://enigmatic-anchorage-70082.herokuapp.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                console.log(data);

            });
    }, []);

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://enigmatic-anchorage-70082.herokuapp.com/products/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => setProducts(data))
    }
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mt-4'>Welcome Admin! You Can Completely Delete A Product </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    products?.map(product => <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img src={product?.img} alt="Shoes" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title font-bold"> {product?.name} </h2>
                            <p> {product?.description} </p>
                            <h2 className='font-bold'> Minimum Quantity Have to Buy : {product?.minimumQuantity}</h2>
                            <h2 className='font-bold'> Available Quantity Now : {product?.availableQuantity}</h2>
                            <h2 className='font-bold'> Price Per Unit : {product?.price}</h2>
                            <div class="card-actions justify-start">
                                <MainButton onClick={() => handleDelete(product?._id)}> Delete From Database </MainButton>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;