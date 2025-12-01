import React from 'react';

const ArticleAbstract = ({id, title, summary}) => {
    return (
        <div className="pb-8">
            <p className="text-slate-800 font-bold">{title}</p>
            <p>{summary}</p>
            <p className="text-slate-200">Läs vidare</p>
            { id === 2 ? <img className="pt-5 pb-8 grayscale-100 mix-blend-multiply object-cover w-full" src="./img/church.png" /> : null}
        </div>
    );
};

export default ArticleAbstract;