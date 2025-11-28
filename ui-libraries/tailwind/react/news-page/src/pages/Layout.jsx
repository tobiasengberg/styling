import React from 'react';
import Navigation from "../components/Navigation.jsx";

const Layout = ({children}) => {
    return (
        <div className="text-slate-900 bg-slate-400">
            <div className="border-b-1 border-slate-500">
                <Navigation />
            </div>
            <div className="">
                <div className="pt-5 container mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;