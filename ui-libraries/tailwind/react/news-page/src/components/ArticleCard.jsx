import React from 'react';

const ArticleCard = ({item}) => {
    return (
        <div className="shadow-sm first:col-span-2 first:row-span-2 border-1 border-slate-300">
            <img className="grayscale-100 mix-blend-multiply" src={item.src} alt={item.alt}/>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="font-medium text-md">{item.description}</p>
            <a className="text-slate-200" href="#">Read More</a>
        </div>
    );
};

export default ArticleCard;