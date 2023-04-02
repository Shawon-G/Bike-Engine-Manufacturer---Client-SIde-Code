import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('https://enigmatic-anchorage-70082.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })

        reset();
    };

    return (
        <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold"> Add A Product</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold"> Live Image Link </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Live Link of An Image"
                                className="input input-bordered w-full max-w-xs"
                                {...register("img", {
                                    required: {
                                        value: true,
                                        message: "Give Live Link of An Image!"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.img?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.img.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold"> Product </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Product's name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Give The Product's name"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.rating.name}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold"> Product Description </span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Give your thought"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: "Give The Description About The Product"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.description.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold"> Minimum Order Quantity </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your valuable rating"
                                className="input input-bordered w-full max-w-xs"
                                {...register("minimumQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Minimum Amount of Pisces Customer Can Buy'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.minimumQuantity?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.minimumQuantity.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold"> Available Quantity </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your valuable rating"
                                className="input input-bordered w-full max-w-xs"
                                {...register("availableQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Available Amount Right Now In Stock'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.availableQuantity.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold"> Price Per Unit </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your valuable rating"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: "Unite Per Unit's Charge"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.price.message}</span>}

                            </label>
                        </div>

                        <input className="btn w-full max-w-xs bg-gradient-to-r from-secondary to-primary font-bold text-black" value="Add" type="submit" />
                    </form>

                </div>
            </div >
        </div >
    );
};

export default AddProducts;