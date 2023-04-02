import React from 'react';

const OurPeople = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mt-16'> Our People With excellency! </h1>
            <div class="stats shadow flex">

                <div class="stat gap-10">
                    <div class="stat-figure text-secondary">
                        <div class="avatar online">
                            <div class="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?w=128&h=128" />
                            </div>
                        </div>
                    </div>
                    <div class="stat-title font-bold"> CTO </div>
                    <div class="stat-value"> Greck Brockman </div>
                    <div class="stat-desc text-secondary"> From Washington </div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <div class="avatar online">
                            <div class="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?w=128&h=128" />
                            </div>
                        </div>
                    </div>
                    <div class="stat-title font-bold"> CFO </div>
                    <div class="stat-value">Jeremy Barnum </div>
                    <div class="stat-desc text-secondary"> From California </div>
                </div>

                <div class="stat ">
                    <div class="stat-figure text-secondary">
                        <div class="avatar online">
                            <div class="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?w=128&h=128" />
                            </div>
                        </div>
                    </div>
                    <div class="stat-title font-bold">VP of Engineering</div>
                    <div class="stat-value">James Burn</div>
                    <div class="stat-desc text-secondary"> From New York </div>
                </div>

            </div>
        </div>
    );
};

export default OurPeople;