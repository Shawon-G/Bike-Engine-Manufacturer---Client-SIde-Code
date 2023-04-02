import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    console.log(user?.email);
    const [admin] = useAdmin(user);

    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center mt-4">
                {/* <!-- Page content here --> */}
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden"> Show More </label>

                <h2 className='text-4xl font-bold'> Dashboard </h2>
                <Outlet />

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 rounded-xl text-base-content">

                    {!admin && <li><Link className='font-bold my-1' to='/my-orders'> My Orders </Link></li>}

                    {!admin && <li><Link className='font-bold my-1' to='/my-review'> Add A Review </Link></li>}

                    <li><Link className='font-bold my-1' to='/my-profile'> My Profile </Link></li>

                    {admin && <li><Link className='font-bold my-1' to='/admin/add-products'> Add Products </Link></li>}

                    {admin && <li><Link className='font-bold my-1' to='/admin/manage-products'> Manage Products </Link></li>}

                    {admin && <li><Link className='font-bold my-1' to='/admin/manageAll-products'> Manage All Orders </Link></li>}

                    {admin && <li> <Link className='font-bold my-1' to='/admin/make-admin'> Make An Admin </Link></li>}

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;