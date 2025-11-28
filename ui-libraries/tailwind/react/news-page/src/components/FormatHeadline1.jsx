import React from 'react';

const FormatHeadline1 = ({children}) => {
    return (
        <h1 className="text-slate-700 font-semibold text-4xl leading-tight font-[Merriweather]">
            {children}
        </h1>
    );
};

export default FormatHeadline1;