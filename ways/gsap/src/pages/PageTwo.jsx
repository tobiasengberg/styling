import React, {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

const PageTwo = () => {
    const container = useRef();
    useGSAP(() => {
        gsap.to(".box", { x: 200 });
        gsap.from(".ax", { y: 200 });
        }, {scope: container}
    );
    return (
        <div ref={container}>
            <div className="h-60" >
                <p className="box">Page two content</p>
            </div>
            <div >
                <p className="ax">Birds</p>
            </div>
        </div>
    );
};

export default PageTwo;