import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainButton from '../Shared/MainButton';

const SingleItem = ({ product }) => {
    const { _id, name, img, description, minimumQuantity, availableQuantity, price } = product;

    const navigate = useNavigate();

    const handlePurchase = (id) => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title font-bold"> {name} </h2>
                    <p> {description} </p>
                    <h2 className='font-bold'> Minimum Quantity Have to Buy : {minimumQuantity}</h2>
                    <h2 className='font-bold'> Available Quantity Now : {availableQuantity}</h2>
                    <h2 className='font-bold'> Price Per Unit : {price}</h2>
                    <div class="card-actions justify-start">
                        <MainButton onClick={() => handlePurchase(_id)}> Purchase </MainButton>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleItem;