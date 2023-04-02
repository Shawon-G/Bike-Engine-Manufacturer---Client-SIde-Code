import React from 'react';
import MainButton from '../../Shared/MainButton';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Myorder = ({ myOrder }) => {
    const { _id, productName, userEmail, userName, inputFieldData, refetch } = myOrder;

    const handleCancel = (_id) => {
        fetch(`https://enigmatic-anchorage-70082.herokuapp.com/purchase/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast("Your Selected Product Is Deleted!");
                refetch();
                // window.location.reload();
                // console.log(data);
            })
    };

    const navigate = useNavigate();

    const handlePayment = (id) => {
        navigate(`/payment/${id}`);
    }

    return (
        <div>
            <ToastContainer />
            <div class="card card-compact w-96 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h2 class="bg-[#9ca3af] font-bold rounded-xl p-2 text-center text-2xl">   {productName} </h2>
                    <h2 className='font-bold text-lg'> Your Order Quantity : {inputFieldData?.order}</h2>
                    <h2 className='bg-[#9ca3af] font-bold text-center p-1 rounded-xl' > Your detail information  </h2>
                    <h2 className='font-bold text-lg'> Your Name : {userName}</h2>
                    <h2 className='font-bold text-lg'> Your Address:  {inputFieldData?.address}</h2>
                    <h2 className='font-bold text-lg'> Your Email : {userEmail}</h2>
                    <h2 className='font-bold text-lg'> Your Phone Number : {inputFieldData?.phone}</h2>

                    <div class="card-actions justify-center">
                        <MainButton onClick={() => handleCancel(_id)}> Cancel </MainButton>
                    </div>

                    <div class="card-actions justify-center">
                        <MainButton onClick={() => handlePayment(_id)} > Pay your order </MainButton>
                    </div>

                </div>
            </div>

        </div >
    );
};

export default Myorder;
