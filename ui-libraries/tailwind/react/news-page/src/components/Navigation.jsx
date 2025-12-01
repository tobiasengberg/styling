import React from 'react';

const Navigation = () => {
    return (
        <div className="container mx-auto flex justify-between py-3 px-6 ">
            <p className="text-3xl font-black text-slate-300">place.software</p>
            <nav className="flex justify-between w-110">
                <a className="text-slate-300 text-xl font-bold" href="#">Contextualism</a>
                <a className="text-slate-300 text-xl font-bold" href="#">System</a>
                <a className="text-slate-300 text-xl font-bold" href="#">Place</a>
            </nav>
            <div className="flex justify-between w-60">
                <a className="text-xl font-bold text-yellow-300" href="#">Kontakta</a>
                <a className="text-slate-300 text-xl font-bold" href="#">Om</a>
            </div>
        </div>
    );
};

export default Navigation;