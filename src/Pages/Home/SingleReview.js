import React from 'react';

const SingleReview = ({ review }) => {
    const { rating, shortDescription } = review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">
                    <div class="rating gap-1">
                        <div class="rating">
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" checked />
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" />
                        </div>
                    </div>
                </h2>
                <h2 className='font-bold'> Rating : {rating}</h2>
                <p>{shortDescription}</p>

            </div>
        </div>
    );
};

export default SingleReview;