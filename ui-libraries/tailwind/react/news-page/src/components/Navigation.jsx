import React from 'react';

const Navigation = () => {
    return (
        <div className="container mx-auto flex justify-between py-3 ">
            <p className="text-4xl font-black text-slate-800">place.software</p>
            <nav className="flex justify-between w-80">
                <a className="text-slate-200 text-xl font-bold" href="#">Contextualism</a>
                <a className="text-slate-200 text-xl font-bold" href="#">System</a>
                <a className="text-slate-200 text-xl font-bold" href="#">Place</a>
            </nav>
            <div className="flex justify-between w-60">
                <a className="text-xl font-bold text-yellow-300" href="#">Kontakta</a>
                <a className="text-slate-200 text-xl font-bold" href="#">About</a>
            </div>
        </div>
    );
};

export default Navigation;