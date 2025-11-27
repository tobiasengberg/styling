import React from 'react';

const Navigation = () => {
    return (
        <div className="border-l-1  border-gray-200 container mx-auto flex justify-between py-3 ">
            <nav className="flex justify-between w-80">
                <a href="#">links</a>
                <a href="#">links</a>
                <a href="#">links</a>
            </nav>
            <div className="flex justify-between w-60">
                <a href="#">links</a>
                <a href="#">links</a>
            </div>
        </div>
    );
};

export default Navigation;