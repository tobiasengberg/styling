import React from 'react';

const ArticleCard = ({item}) => {
    return (
        <div className="p-5 pt-25 first:border-r-1 border-slate-400">
            <img className="object-cover w-full" src={item.src} alt={item.alt}/>
            <div className="pt-6">
                <h3 className=" text-slate-600 font-bold text-3xl pb-5">{item.title}</h3>
                <p className="font-medium text-md">{item.description}</p>
                <a href="#">Läs vidare</a>
            </div>
        </div>
    );
};

export default ArticleCard;