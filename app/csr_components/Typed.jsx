"use client"

import React from "react";
import Typed from "typed.js";

export default function TypedComponent({ strings }){
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        let typed

        setTimeout(() => {
            typed = new Typed(el.current, {
                strings: [...strings.slice(0, strings.length-1)],
                typeSpeed: 50,
                loop: true,
                backDelay: 1200,
                backSpeed: 30,
                smartBackspace: false,
                onLastStringBackspaced: () => typed.strPos = 0
            });
        }, 1200)

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            if (typed)
                typed.destroy();
        };
    }, []);

    return <>
        <span ref={el} >{strings.slice(-1)}</span>
    </>;
}