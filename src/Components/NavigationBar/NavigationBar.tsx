import "./NavigationBar.css";
import React from "react";
import { useState } from "react";
import { Nav, Navbar, NavLink, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Signup } from "../Authentication/Signup/Signup";
import { Login } from "../Authentication/Login/Login";

export const NavigationBar = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('Login')

    const handleLogin = () => {
        setShowModal(true);
    }

    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav style={{width: "100%"}}>
                    <NavLink eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink eventKey="2" as={Link} to="/gallery">Gallery</NavLink>
                    <NavLink eventKey="3" as={Link} to="/addbeer">Add beer</NavLink>
                    <Button onClick={handleLogin} className='btn btn-warning px-5 m-1 mx-5 ms-auto' style={{color: "white"}}>
                        Login
                    </Button>
                    {showModal
                        ? modalType === "Login"
                            ? <Login setShowModal={setShowModal} setModalType={setModalType}/>
                            : <Signup setShowModal={setShowModal} setModalType={setModalType}/>
                        : ("")
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
