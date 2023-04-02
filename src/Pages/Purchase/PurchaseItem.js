import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Pages/Shared/Loading';

const PurchaseProduct = () => {

    // Getting a specefic product information : 
    const { id } = useParams();

    const [singleItem, setSingleItem] = useState({})
    useEffect(() => {
        fetch(`https://enigmatic-anchorage-70082.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setSingleItem(data))
    }, [singleItem]);

    const { name, img, description, minimumQuantity, availableQuantity, price } = singleItem;

    const [user] = useAuthState(auth);



    // Posting purchased information : 
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset, isLoading } = useForm();
    const onSubmit = data => {
        const userData = {
            userEmail: user.email,
            userName: user.displayName,
            productName: name,
            inputFieldData: data
        }

        fetch('https://enigmatic-anchorage-70082.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(result => {
                console.log('result', result);
            })
        reset();
        navigate('/dashboard');
    };

    if (isLoading) {
        return <Loading />
    }
    return (

        <div className='flex justify-center items-center mt-8'>

            <div class="hero bg-base-200 rounded-xl p-2">
                <div class="hero-content grid grid-cols-1 lg:grid-cols-3 gap-16">


                    {/* ----Single product's information------ */}
                    <div class="card card-compact w-96 bg-base-100 shadow-xl flex-1">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title font-bold"> {name} </h2>
                            <p> {description} </p>
                            <h2 className='font-bold'> Minimum Quantity Have to Buy : {minimumQuantity}</h2>
                            <h2 className='font-bold'> Available Quantity Now : {availableQuantity}</h2>
                            <h2 className='font-bold'> Price Per Unit : {price}</h2>
                        </div>
                    </div>


                    {/* Input field for user address, phone number and increase/decrease order's quantity */}
                    <div class="card  w-full max-w-sm shadow-2xl bg-base-100 flex-1">
                        <div className="card-body">
                            <h2 className="text-center text-xl font-bold"> The product you choose : {name} </h2>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-bold"> Your Address </span>
                                    </label>
                                    <textarea
                                        type="text"
                                        placeholder="Address"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'Address is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500 font-bold"> {errors.address.message} </span>}
                                    </label>
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-bold"> Your Phone Number </span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Phone"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'Phone Number is Required'
                                            },
                                            minLength: {
                                                value: 9,
                                                message: 'Don not give wrong number'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.phone.message}</span>}
                                        {errors.phone?.type === 'minLength' && <span className="label-text-alt text-red-500 font-bold">{errors.phone.message}</span>}
                                    </label>
                                </div>


                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-bold"> Your Order Quantity </span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Order Quantity"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("order", {
                                            required: {
                                                value: true,
                                                message: 'Order Amount Is Required'
                                            },
                                            min: {
                                                value: `${minimumQuantity}`,
                                                message: `You Have to Buy More Than ${minimumQuantity}`
                                            },
                                            max: {
                                                value: `${availableQuantity}`,
                                                message: `You Can Buy ${availableQuantity} Pisces Only`
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.order?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.order.message}</span>}
                                        {errors.order?.type === 'min' && <span className="label-text-alt text-red-500 font-bold">{errors.order.message}</span>}
                                        {errors.order?.type === 'max' && <span className="label-text-alt text-red-500 font-bold">{errors.order.message}</span>}
                                    </label>
                                </div>

                                <input className="btn w-full max-w-xs  btn-primary font-bold text-black bg-gradient-to-r from-secondary to-primary" value="Purchase" type="submit" />
                            </form>

                        </div>
                    </div>


                    {/*------- Logged in user email and name------- */}
                    <div class="card  w-full max-w-sm shadow-2xl bg-base-100 flex-1">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text"> You are logged in ! </span>
                                </label>
                                <input type="name" disabled value={user.displayName} class="input input-bordered font-bold" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text"> With this email address </span>
                                </label>
                                <input type="email" disabled value={user.email} class="input input-bordered font-bold" />
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PurchaseProduct;
