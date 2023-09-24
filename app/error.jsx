"use client" // Error components must be Client Components

import Link from "next/link";

export default function Error(){
    return <>
        <div className="container">
            <h1 className="display-4">500: Internal Server Error</h1>
            <p>
                Sorry, it looks like something went wrong. Return to <Link href="/">Homepage</Link>.
            </p>
        </div>
    </>
}