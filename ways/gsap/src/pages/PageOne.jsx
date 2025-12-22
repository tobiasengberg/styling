import React, {useRef} from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const PageOne = () => {
    const container = useRef();
    useGSAP(() => {
        gsap.to(".box", { x: 200 })
    }, {scope: container});
    return (
        <div className="h-screen bg-gray-300 flex flex-col justify-end" ref={container}>
            <p className="box text-4xl p-12 border-2 border-gray-700">Page One Content</p>
        </div>
    );
};

export default PageOne;