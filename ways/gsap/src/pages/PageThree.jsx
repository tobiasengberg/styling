import React, {useRef} from 'react';
import {useGSAP} from "@gsap/react";


const PageThree = () => {
    const container = useRef();
    useGSAP(() => {
        gsap.to(".box", { x: 200 })
    })
    return (
        <div ref={container}>

        </div>
    );
};

export default PageThree;