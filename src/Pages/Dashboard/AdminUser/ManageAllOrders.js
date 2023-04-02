import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import MainButton from '../../Shared/MainButton';
import { toast, ToastContainer } from 'react-toastify';


const ManageAllOrders = () => {

    const { data: myOrders, isLoading, refetch } = useQuery('users', () => fetch('https://enigmatic-anchorage-70082.herokuapp.com/purchase', {
        method: 'GET'
    })
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://enigmatic-anchorage-70082.herokuapp.com/purchase/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                toast.success('Successfully Deleted!')
                refetch();
            });
    }

    return (
        <div>
            <h1 className='text-center text-2xl font-bold mt-4'>Welcome Admin! You Can Manage All Ordered product </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    myOrders.map(order => <div class="card card-compact w-96 bg-base-100 shadow-2xl">
                        <div class="card-body">
                            <h2 class="bg-[#9ca3af] font-bold rounded-xl p-2 text-center text-2xl">   {order?.productName} </h2>
                            <h2 className='font-bold text-lg'> Your Order Quantity : {order?.inputFieldData?.order}</h2>
                            <h2 className='bg-[#9ca3af] font-bold text-center p-1 rounded-xl' > Your detail information  </h2>
                            <h2 className='font-bold text-lg'> Your Name : {order?.userName}</h2>
                            <h2 className='font-bold text-lg'> Your Address:  {order?.inputFieldData?.address}</h2>
                            <h2 className='font-bold text-lg'> Your Email : {order?.userEmail}</h2>
                            <h2 className='font-bold text-lg'> Your Phone Number : {order?.inputFieldData?.phone}</h2>

                            <div class="card-actions justify-center">
                                <MainButton> Ship Item </MainButton>
                            </div>

                            <div class="card-actions justify-center">
                                <MainButton onClick={() => handleDelete(order._id)} > Cancel Item </MainButton>
                            </div>

                        </div>
                    </div>)
                }
            </div>
            <ToastContainer />
        </div >
    );
};

export default ManageAllOrders;