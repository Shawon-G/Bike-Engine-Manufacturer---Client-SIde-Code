import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset, isLoading } = useForm();


    const onSubmit = data => {
        const userData = {
            userEmail: user?.email,
            userName: user?.displayName,
            inputFieldData: data
        }
        fetch('https://enigmatic-anchorage-70082.herokuapp.com/profile-info', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(data => {
                toast("Your Profile Information Sent!");
                console.log(data)
            })

        reset();
    };

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <ToastContainer />
            <div className='flex justify-center items-center mt-4'>

                <div className="hero bg-base-200 rounded-xl p-2">
                    <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* --User's Information */}
                        <div className="card  w-full max-w-sm shadow-2xl bg-base-100 flex-1">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> You are logged in ! </span>
                                    </label>
                                    <input type="name" disabled value={user?.displayName} className="input input-bordered font-bold" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> With this email address </span>
                                    </label>
                                    <input type="email" disabled value={user?.email} className="input input-bordered font-bold" />
                                </div>
                            </div>
                        </div>

                        {/* ---form to add information about profile----  */}
                        <div className="card w-full max-w-sm shadow-2xl bg-base-100 flex-1">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text font-bold"> Your Education </span>
                                        </label>
                                        <textarea
                                            type="text"
                                            placeholder="Education"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("education", {
                                                required: {
                                                    value: true,
                                                    message: 'Add Your Educational Background'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.education?.type === 'required' && <span className="label-text-alt text-red-500 font-bold"> {errors.education.message} </span>}
                                        </label>
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text font-bold"> Your Location / Address </span>
                                        </label>
                                        <textarea
                                            type="text"
                                            placeholder="Location"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("location", {
                                                required: {
                                                    value: true,
                                                    message: 'Add Your Location or, Address'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.location?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.location.message}</span>}
                                        </label>
                                    </div>


                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text font-bold"> Your Phone Number</span>
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Phone"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("phone", {
                                                required: {
                                                    value: true,
                                                    message: 'Phone Number is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.phone.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text font-bold"> Your LinkeDin Profile </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your Linkedin Profile"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("linkedin", {
                                                required: {
                                                    value: true,
                                                    message: 'Add Your LinkeDin Profile'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.linkedin.message}</span>}
                                        </label>
                                    </div>

                                    <input className="btn w-full max-w-xs  btn-primary font-bold text-black bg-gradient-to-r from-secondary to-primary" value="Add Information" type="submit" />
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;