import React from 'react';

const Button = ({children}) => {
    return (
        <button className="border-2 border-yellow-100 hover:bg-orange-500 text-yellow-200 font-bold py-2 px-4 rounded">
            {children}
        </button>
    );
};

export default Button;