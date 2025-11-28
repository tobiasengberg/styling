import React from 'react';

const TwoThreeContent = ({children}) => {
    return (
        <div className="grid grid-cols-5  first:col-span-2 last:col-span-3">
            {children}
        </div>
    );
};

export default TwoThreeContent;