"use client"

import { Clipboard, ClipboardCheckFill } from 'react-bootstrap-icons';
import { Button, Form, InputGroup } from "react-bootstrap";
import { useState } from 'react';

export default function CopyTextInput(){

    const [copied, setCopied] = useState(false)

    const copy = () => {
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_EMAIL);
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    return <>
        <div>
            <InputGroup>
                <Form.Control
                    aria-label="Email"
                    type="text"
                    size="sm"
                    value={process.env.NEXT_PUBLIC_EMAIL}
                    className={`border-light focus-ring focus-ring-light`}
                    readOnly
                />
                <Button variant="outline-light" onClick={copy}>
                    <span className="h5 lh-1">
                    {copied ? <ClipboardCheckFill /> : <Clipboard /> }
                    </span>
                </Button>
            </InputGroup>
        </div>
    </>
}