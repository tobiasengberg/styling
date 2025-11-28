import React from 'react';

const Navigation = () => {
    return (
        <div className="container mx-auto flex justify-between py-3 ">
            <p className="text-4xl font-bold text-slate-700">place.software</p>
            <nav className="flex justify-between w-80">
                <a className="text-white text-xl font-bold" href="#">Contextualism</a>
                <a className="text-white text-xl font-bold" href="#">System</a>
                <a className="text-white text-xl font-bold" href="#">Place</a>
            </nav>
            <div className="flex justify-between w-60">
                <a className="text-xl font-bold text-yellow-300" href="#">Contact</a>
                <a className="text-white text-xl font-bold" href="#">About</a>
            </div>
        </div>
    );
};

export default Navigation;