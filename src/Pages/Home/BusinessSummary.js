import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mt-16'> Our Business Summary at a Glance </h1>
            <div class="stats stats-vertical lg:stats-horizontal flex shadow-lg  p-6 bg-gradient-to-r from-secondary to-primary rounded-xl">

                <div class="stat justify-center">
                    <div class="stat-title font-bold"> Regular Customers </div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc font-bold">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-title font-bold"> Revenue  </div>
                    <div class="stat-value">4,20,00,000</div>
                    <div class="stat-desc font-bold"> ↗︎ 400 (22%) </div>
                </div>

                <div class="stat">
                    <div class="stat-title font-bold"> Collaborations with other businesses </div>
                    <div class="stat-value"> 480 </div>
                    <div class="stat-desc font-bold"> ↗︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;