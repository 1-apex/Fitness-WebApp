import React from 'react';
import backgroundImage from '../assets/background.png';
import girlImage from '../assets/women-hero.png';

const Banner = () => {
    return (
        <div
            className="relative flex h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}>

            <div className="h-full flex flex-col">
                <div>H1</div>
                <div>H2</div>
            </div>

            <div className="absolute right-0 bottom-0 overflow-hidden">
                <img
                    src={girlImage}
                    className="w-full h-full rounded-l-lg object-cover"
                    alt="Workout"
                />
            </div>
        </div>
    );
};

export default Banner;