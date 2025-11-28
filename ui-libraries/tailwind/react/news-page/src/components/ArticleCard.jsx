import React from 'react';

const ArticleCard = ({item}) => {
    return (
        <div className="first:col-span-2 p-5 first:border-r-1 border-slate-500">
            <img className="grayscale-100 mix-blend-multiply object-cover w-full" src={item.src} alt={item.alt}/>
            <div className="p-1">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="font-medium text-md">{item.description}</p>
                <a className="text-slate-300" href="#">Read More</a>
            </div>
        </div>
    );
};

export default ArticleCard;