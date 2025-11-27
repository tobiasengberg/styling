import React from 'react';
import Navigation from "../components/Navigation.jsx";

const Layout = ({children}) => {
    return (
        <div className="text-slate-500">
            <div className="border-b-1  border-gray-200 mb-5">
                <Navigation />
            </div>
            <div>
                <div className="container mx-auto border-l-1  border-gray-200">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;