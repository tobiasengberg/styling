import React from 'react';
import Navigation from "../components/Navigation.jsx";

const Layout = ({children}) => {
    return (
        <div className="text-slate-900 bg-slate-400 font-[Roboto]">
            <div className="border-b-1 border-slate-500">
                <Navigation />
            </div>
            <div>
                <div className="container mx-auto border-x-1 border-slate-500 min-h-screen">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;