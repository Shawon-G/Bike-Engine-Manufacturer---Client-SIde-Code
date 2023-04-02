import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import AdminDataTable from './AdminDataTable';

const MakeAdmin = () => {

    const { data: allUsers, isLoading, refetch } = useQuery('users', () => fetch('https://enigmatic-anchorage-70082.herokuapp.com/all-users', {
        method: 'GET'
    })
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody className="">

                        {
                            allUsers.map(user => <AdminDataTable
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></AdminDataTable>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;