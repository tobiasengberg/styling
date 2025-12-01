import React from 'react';
import Navigation from "../components/Navigation.jsx";

const Layout = ({children}) => {
    return (
        <div className="text-slate-800 bg-linear-to-b from-slate-500 to-slate-200 font-[Roboto]">
            <div className="border-b-1 border-slate-400">
                <Navigation />
            </div>
            <div>
                <div className="container mx-auto border-x-1 border-slate-400 min-h-screen">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;