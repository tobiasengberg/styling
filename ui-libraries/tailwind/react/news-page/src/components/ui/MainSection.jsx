import React from 'react';

const MainSection = ({children}) => {
    return (
        <div className="border-b-1 border-slate-400 relative">
            { children }
        </div>
    );
};

export default MainSection;