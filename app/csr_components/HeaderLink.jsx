"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderLink(props){

    const pathname = usePathname()

    return <>
        <Link className={`nav-link ${pathname.startsWith(props.route) ? "active" : ""}`} href={props.route} tabIndex={0} role="link" aria-label={props.label}>
            {props.label}
        </Link>
    </>
}