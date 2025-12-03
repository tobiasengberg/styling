import React from 'react';

const TopSecondary = ({item}) => {
    return (
        <div className="col-span-5 p-5 pt-25 first:border-r-1 border-slate-400">
            <img className="grayscale-100 mix-blend-plus-lighter object-cover w-full" src={item.src} alt={item.alt}/>
            <div className="p-6">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="font-medium text-md">{item.description}</p>
                <a href="#">Läs vidare</a>
            </div>
        </div>
    );
};

export default TopSecondary;