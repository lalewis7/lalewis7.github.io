"use client"

import Link from "next/link"
import { useState } from "react";
import { Button, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { List } from "react-bootstrap-icons";

export default function HeaderOffcanvas(props){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleToggle = () => setShow(prev => !prev);

    return <>
        <Button className={`d-${props.breakpoint}-none`} variant=""  onClick={handleToggle}>
            <List width="1.6em" height="1.5em" />
        </Button>
        <Offcanvas show={show} onHide={handleClose} className={`d-${props.breakpoint}-none`} responsive={props.breakpoint} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Arthur Lewis
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav as="nav">
                    <Nav.Link as={Link} href="/">
                    Home
                    </Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    </>
}