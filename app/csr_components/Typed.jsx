"use client"

import React from "react";
import Typed from "typed.js";

export default function TypedComponent(props){
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: props.strings,
            typeSpeed: 50,
            loop: true,
            backDelay: 1200,
            backSpeed: 20,
            smartBackspace: false
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return <>
        <span ref={el} />
    </>;
}