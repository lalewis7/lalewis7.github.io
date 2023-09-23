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
            <InputGroup className="mb-3">
                <Form.Control
                    aria-label="Email"
                    value={process.env.NEXT_PUBLIC_EMAIL}
                    readOnly
                />
                <Button variant="outline-secondary" onClick={copy}>
                    <span className="h5">
                    {copied ? <ClipboardCheckFill /> : <Clipboard /> }
                    </span>
                </Button>
            </InputGroup>
        </div>
    </>
}