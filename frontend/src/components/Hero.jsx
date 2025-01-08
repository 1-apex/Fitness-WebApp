import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/background.png';
import girlImage from '../assets/women-hero.png';
import boyImage from '../assets/boy-hero.jpg';

const slides = [
    {
        img: girlImage,
        text: "Achieve your fitness goal from the comfort of your home",
        title: "WORKOUT",
        subtitle: "ANYTIME, ANYWHERE",
    },
    {
        img: boyImage,
        title: {
            one: "BUILD",
            two: "BOOST"
        },
        subtitle: {
            one: "MUSCLES",
            two: "STAMINA",
        }
    },
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex h-screen overflow-hidden">
            <div
                className={`absolute inset-0 transition-transform duration-700 ease-in-out transform ${
                    currentIndex === 0 ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div
                    className="relative flex flex-col md:flex-row h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <div className="flex-1 flex flex-col justify-center items-center text-center p-5 md:p-10">
                        <h1 className="text-4xl md:text-7xl font-bold text-gray-800 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 mb-2 mt-10">
                            <span className="inline-block text-white">{slides[0].title}</span>
                        </h1>
                        <h2 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 animate-gradient-text">
                            <span className="relative inline-block animate-gradient-text">{slides[0].subtitle}</span>
                        </h2>
                        <h3 className="text-lg md:text-xl text-white my-4">
                            {slides[0].text}
                        </h3>
                        <a
                            href="#signup"
                            className="my-12 inline-block px-6 py-3 text-white bg-purple-600 hover:bg-purple-500 transition duration-300 rounded-full shadow-lg"
                        >
                            Join Us Now
                        </a>
                    </div>
                    <div className="flex-1 flex items-end justify-end relative">
                        <img
                            src={slides[0].img}
                            alt="Workout"
                            className="object-cover w-full h-full md:w-3/4 sm:h-auto opacity-100"
                        />
                    </div>
                </div>
            </div>

            <div
                className={`absolute inset-0 transition-transform duration-500 ease-in-out transform ${
                    currentIndex === 1 ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex flex-col md:flex-row h-full bg-cover bg-center">
                    <div className="flex justify-between relative">
                        <img
                            src={slides[1].img}
                            alt="Workout"
                            className="object-cover mt-10 w-full h-full md:w-3/4 sm:h-auto opacity-100"
                        />
                    </div>
                    <div className="flex-none flex flex-col items-center text-center p-5 mt-5 md:p-8">
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 mb-2 mt-10">
                            <span className="inline-block text-white">{slides[1].title.one}</span>
                        </h1>
                        <h2 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 animate-gradient-text">
                            <span className="relative inline-block animate-gradient-text">{slides[1].subtitle.one}</span>
                        </h2>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 mb-2 mt-10">
                            <span className="inline-block text-white">{slides[1].title.two}</span>
                        </h1>
                        <h2 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 animate-gradient-text">
                            <span className="relative inline-block animate-gradient-text">{slides[1].subtitle.two}</span>
                        </h2>
                        <a
                            href="#signup"
                            className="my-12 inline-block px-6 py-3 text-white bg-purple-600 hover:bg-purple-500 transition duration-300 rounded-full shadow-lg"
                        >
                            Join Us Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;