import React from 'react';
import { useForm } from "react-hook-form";


const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('https://enigmatic-anchorage-70082.herokuapp.com/reviews', {
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
        <div className='flex justify-center mt-12 '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold"> Add A Review </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold"> Your Review </span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Give your thought"
                                className="input input-bordered w-full max-w-xs"
                                {...register("shortDescription", {
                                    required: {
                                        value: true,
                                        message: "Give some words. It's required"
                                    },
                                    maxLength: {
                                        value: 250,
                                        message: 'You can not write more than that!'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.shortDescription?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.shortDescription.message}</span>}
                                {errors.shortDescription?.type === 'maxLength' && <span className="label-text-alt text-red-500 font-bold">{errors.shortDescription.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold"> Rating </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your valuable rating"
                                className="input input-bordered w-full max-w-xs"
                                {...register("rating", {
                                    required: {
                                        value: true,
                                        message: 'Rate Our Work'
                                    },
                                    maxLength: {
                                        value: 5,
                                        message: 'Rate our works out of 5'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.rating.message}</span>}
                                {errors.rating?.type === 'minLength' && <span className="label-text-alt text-red-500 font-bold">{errors.rating.message}</span>}
                            </label>
                        </div>

                        <input className="btn w-full max-w-xs bg-gradient-to-r from-secondary to-primary font-bold text-black" value="Add" type="submit" />
                    </form>

                </div>
            </div >
        </div >
    );
};

export default AddReview;