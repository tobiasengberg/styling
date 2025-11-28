import React from 'react';

const Button = ({children}) => {
    return (
        <button className="border-2 border-cyan-500 hover:bg-orange-500 text-sky-500 font-bold py-2 px-4 rounded">
            {children}
        </button>
    );
};

export default Button;