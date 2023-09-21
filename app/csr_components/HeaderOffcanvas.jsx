"use client"

import Link from "next/link"
import { useState } from "react";
import { Button, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { FiletypePdf, Github, Linkedin, List, Medium } from "react-bootstrap-icons";
import { Roboto_Mono } from 'next/font/google'

const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    weight: ['400', '700']
  })

export default function HeaderOffcanvas(props){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleToggle = () => setShow(prev => !prev);

    return <>
        <Button className={`d-${props.breakpoint}-none`} variant=""  onClick={handleToggle}>
            <List width="1.6em" height="1.5em" />
        </Button>
        <Offcanvas show={show} onHide={handleClose} className={`d-${props.breakpoint}-none bg-primary`} responsive={props.breakpoint} placement="end">
            <Offcanvas.Header closeButton className="pb-0 px-4">
                <Offcanvas.Title className={`${roboto_mono.className} text-white fw-bold`}>
                    &lt; Arthur Lewis &#47;&gt;
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="pt-0 p-4">
                <hr />
                <Nav as="nav" className="flex-row flex-wrap">
                    {[
                        {"name": "Home", "link": "/"},
                        {"name": "About", "link": "/about"},
                        {"name": "Projects", "link": "/portfolio"},
                    ].map((val, i) => <>
                        <Nav.Item className="col-6" key={i}>
                            <Nav.Link as={Link} href={val.link} className="px-0 text-reset">
                            {val.name}
                            </Nav.Link>
                        </Nav.Item>
                    </>)}
                </Nav>
                <hr />
                <Nav as="ul" className="flex-row flex-wrap">
                    {[
                        {"name": "LinkedIn", "link": "https://www.linkedin.com/in/arthur-lewis/", "icon": <Linkedin />},
                        {"name": "GitHub", "link": "https://github.com/lalewis7", "icon": <Github />},
                        {"name": "Medium", "link": "https://medium.com/@arthur.lewis", "icon": <Medium />},
                        {"name": "Resume", "link": "https://drive.google.com/file/d/1hu3biR2yxbPmyK9TpuIm4Ps99NtufUKK/view?usp=sharing", "icon": <FiletypePdf />},
                    ].map((val, i) => <>
                        <Nav.Item className="col-6" key={i}>
                            <Nav.Link as={Link} target="_blank" rel="noopener noreferrer" href={val.link} className="d-inline-flex align-items-center gap-2 px-0 text-reset">
                            {val.icon}{val.name}
                            </Nav.Link>
                        </Nav.Item>
                    </>)}
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    </>
}