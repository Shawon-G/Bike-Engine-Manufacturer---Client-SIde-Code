import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import MainButton from '../../Shared/MainButton';

const PayOrder = () => {
    const { id } = useParams();
    console.log(id);


    // const { _id, productName, userEmail, userName, inputFieldData } = myOrder;
    // console.log(myOrders);

    const { data: myOrders, isLoading, } = useQuery('users', () => fetch(`https://enigmatic-anchorage-70082.herokuapp.com/purchase/${id}`, {
        method: 'GET'
    })
        .then(res => res.json())
    )
    console.log(myOrders);

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='flex  justify-center mt-12'>
            <div class="card card-compact w-96 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h2 class="bg-[#9ca3af] font-bold rounded-xl p-2 text-center text-2xl">    {myOrders?.productName} </h2>
                    <h2 className='font-bold text-lg'> Your Order Quantity :  {myOrders?.inputFieldData.order}</h2>
                    <h2 className='bg-[#9ca3af] font-bold text-center p-1 rounded-xl' > Your detail information  </h2>
                    <h2 className='font-bold text-lg'> Your Name : {myOrders?.userName}</h2>
                    <h2 className='font-bold text-lg'> Your Address:  {myOrders?.inputFieldData.address}</h2>
                    <h2 className='font-bold text-lg'> Your Email : {myOrders?.userEmail}</h2>
                    <h2 className='font-bold text-lg'> Your Phone Number : {myOrders?.inputFieldData.phone}</h2>

                    <div class="card-actions justify-center">
                        <MainButton> Confirm </MainButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayOrder;