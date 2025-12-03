import React from 'react';

const TwoThreeContent = ({children}) => {
    return (
        <div className="grid grid-cols-12  first:col-span-4 last:col-span-8">
            {children}
        </div>
    );
};

export default TwoThreeContent;