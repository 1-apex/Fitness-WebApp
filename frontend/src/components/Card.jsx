import React from 'react';

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="relative flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 border border-white border-opacity-40 backdrop-filter backdrop-blur-lg hover:border-opacity-40 hover:shadow-2xl hover:shadow-slate-700 w-96">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-10"></div>
            <div className="h-64 flex items-center justify-center mb-4">
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="rounded-lg object-contain w-full h-full z-10"
                />
            </div>
            <h2 className="text-3xl font-bold z-20 mb-4 text-center">{title}</h2>
            <p className="text-sm text-gray-300 z-20 mb-4 text-center">{description}</p>
        </div>
    );
};

export default Card;