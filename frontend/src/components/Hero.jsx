import React from 'react';
import backgroundImage from '../assets/background.png';
import girlImage from '../assets/women-hero.png';

const Banner = () => {
    return (
        <div
            className="relative flex flex-col md:flex-row h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex-1 flex flex-col justify-center items-center text-center p-5 md:p-10">
                <h1 className="text-4xl md:text-7xl font-bold text-gray-800 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 mb-2 mt-10">
                    <span className="inline-block text-white">WORKOUT</span>
                </h1>
                <h2 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 animate-gradient-text">
                    <span className="relative inline-block animate-gradient-text">ANYTIME, ANYWHERE</span>
                </h2>
                <h3 className="text-lg md:text-xl text-white my-4">
                    Achieve your fitness goal from the comfort of your home
                </h3>
                <a
                    href="#signup"
                    className="my-12 inline-block px-6 py-3 text-white bg-purple-600 hover:bg-purple-500 transition duration-300 rounded-full shadow-lg right-0 bottom-0"
                >
                    Join us now
                </a>
            </div>

            <div className="flex-1 flex items-end justify-end">
                <img
                    src={girlImage}
                    alt="Workout"
                    className="object-cover w-full h-full md:w-3/4 sm:h-auto opacity-100"
                />
            </div>
        </div>
    );
};

export default Banner;