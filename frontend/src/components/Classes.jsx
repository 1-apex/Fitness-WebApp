import React from 'react';
import Card from './Card';
import img1 from '../assets/01.jpg';
import img2 from '../assets/02.jpg';
import img3 from '../assets/03.png';
import img4 from '../assets/04.png';
import img5 from '../assets/05.jpg';
import img6 from '../assets/06.jpg';

const content = [
    {
        img: img1,
        title: "Fitness Class",
        description: "Transform your body and mind with expert-led fitness classes."
    },
    {
        img: img2,
        title: "Yoga Class",
        description: "Find your inner peace and flexibility with our calming yoga sessions."
    },
    {
        img: img3,
        title: "Zumba Class",
        description: "Dance your way to fitness—Zumba fun awaits you!"
    },
    {
        img: img4,
        title: "Boxing Training",
        description: "Unleash your power and relieve stress with dynamic boxing training."
    },
    {
        img: img5,
        title: "Gym Training",
        description: "Achieve your fitness goals with personalized gym training—no equipment, no problem!"
    },
    {
        img: img6,
        title: "MMA Training",
        description: "Build strength, confidence, and discipline with expert MMA training."
    },
];

const Classes = () => {
    return (
        <div className="flex flex-col items-center m-20">
            <h2 className="text-5xl font-thin">Our</h2> 
            <h2 className="text-6xl font-bold mb-10 text-center">Featured Classes</h2>
            <div className="grid justify-around grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-20">
                {content.map((item, index) => (
                    <Card 
                        key={index} 
                        title={item.title} 
                        description={item.description} 
                        imageUrl={item.img} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Classes;