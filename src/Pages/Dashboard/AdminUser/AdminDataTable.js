import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AdminDataTable = ({ user, refetch }) => {
    const { email, role } = user;

    const handleMakeAdmin = () => {
        console.log('clicked');

        fetch(`https://enigmatic-anchorage-70082.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Successfully made an admin!')
                refetch();
            })
    }

    return (
        <tr>
            <th>1</th>
            <td className='font-bold'> {email} </td>
            <td>
                {
                    role !== 'admin'
                        ? <button onClick={handleMakeAdmin} class="btn btn-xs font-bold text-black bg-gradient-to-r from-secondary to-primary"> Make Admin </button>
                        : <p className='font-bold text-red-600 '>  Already an admin </p>
                }
            </td>
            <td>
                <button class="btn btn-xs font-bold text-black bg-gradient-to-r from-secondary to-primary"> Remove </button>
            </td>
            <ToastContainer />
        </tr >
    );
};

export default AdminDataTable;