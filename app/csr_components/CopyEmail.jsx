"use client"

import { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { EnvelopeFill } from "react-bootstrap-icons";


export default function CopyEmail(){

    const delay = 2000

    const [copied, setCopied] = useState(false)

    const copy = () => {
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_EMAIL);
    }

    const onToggle = (show) => {
        if (!show)
            setCopied(false)
        else {
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, delay)
        }
    }

    const tooltip = (props) => (
        <Tooltip id="email-copied-tooltip" {...props}>
            Copied!
        </Tooltip>
    )

    return <>
        <OverlayTrigger
            placement="top"
            trigger="click"
            show={copied}
            delay={{show: 250, hide: 400}}
            overlay={tooltip}
            onToggle={(show) => onToggle(show)}
        >   
            <button className="nav-link d-flex align-items-center gap-2 lh-1 nav-link" onClick={copy}>
                <EnvelopeFill /><span className="h5 m-0">{process.env.NEXT_PUBLIC_EMAIL}</span>
            </button>  
        </OverlayTrigger>
    </>
}