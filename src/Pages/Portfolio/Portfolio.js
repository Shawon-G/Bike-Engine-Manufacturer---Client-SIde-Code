import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className='flex'>

            <div class="mockup-window border bg-base-300 w-1/2 mx-auto mt-8">
                <div class=" grid grid-cols-1 justify-center items-center px-2 py-8 bg-base-200">
                    <h1 className='text-2xl font-bold font-mono py-4'> Hi there. I'm <span className=' bg-red-600 font-bold text-white p-2 rounded-xl'>Shawon Mondal</span></h1>

                    <h1 className='text-2xl font-bold font-mono py-4'> You can contact with me at <span className=' bg-red-600 font-bold text-white p-2 rounded-xl'> shawonmg@gmail.com </span></h1>

                    <h1 className='text-2xl font-bold font-mono py-4'> Final year CSE student <span className=' bg-red-600 font-bold text-white p-2 rounded-xl'> National University BD </span></h1>
                    <div>
                        <h1 className='text-2xl font-bold font-mono pt-4'> List of technologies I know : </h1>
                        <ul class="steps steps-vertical">
                            <li class="step font-mono font-bold text-xl"> C++ </li>
                            <li class="step font-mono font-bold text-xl"> JavaScript</li>
                            <li class="step font-mono font-bold text-xl"> React </li>
                            <li class="step font-mono font-bold text-xl"> Node JS / Express JS</li>
                            <li class="step font-mono font-bold text-xl"> MongoDB </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card w-96 h-1/2 bg-base-200 shadow-xl mt-8">
                <div class="card-body">
                    <h2 class="card-title justify-center font-mono font-bold text-2xl">Some of my projects</h2>
                    <a class="card-title justify-center font-mono font-bold text-xl bg-red-600 py-2 rounded-xl text-white" href="https://shawon-mg.github.io/Personal-Finance-Management-assignment-5-/"> Finance Management </a>
                    <a class="card-title justify-center font-mono font-bold text-xl bg-red-600 py-2 rounded-xl text-white" href="https://cozy-lokum-d5d6a8.netlify.app/"> Book Review Website </a>
                    <a class="card-title justify-center font-mono font-bold text-xl bg-red-600 py-2 rounded-xl text-white" href="https://shawon-mg.github.io/Search-Phone-Online-assignment-6-/"> Phone Search Engine </a>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;