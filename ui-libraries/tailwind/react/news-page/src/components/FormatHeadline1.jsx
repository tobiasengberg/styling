import React from 'react';

const FormatHeadline1 = ({children}) => {
    return (
        <h1 className="font-semibold text-4xl leading-tight font-[Merriweather]">
            {children}
        </h1>
    );
};

export default FormatHeadline1;