import React from 'react';
import Myorder from './Myorder';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const MyOrders = () => {

    const { data: myOrders, isLoading, refetch } = useQuery('users', () => fetch('https://enigmatic-anchorage-70082.herokuapp.com/purchase', {
        method: 'GET'
    })
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
            {
                myOrders?.map(myOrder => <Myorder
                    key={myOrder._id}
                    myOrder={myOrder}
                    // setDeleteOrder={setDeleteOrder}
                    refetch={refetch}
                >
                </Myorder>)
            }
        </div>
    );
};

export default MyOrders;