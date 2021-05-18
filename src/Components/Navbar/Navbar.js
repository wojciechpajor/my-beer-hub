import "./Navbar.css"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import firebase from "../../firebase";

const Navbar = () => {
    return (
        <header className="MainNav">
            <Link to='/'>
                <li className="NavLink">Home</li>
            </Link>
            <Link to='/gallery'>
                <li className="NavLink">Gallery</li>
            </Link>
            <Link to='/addbeer'>
                <li className="NavLink">Add beer</li>
            </Link>
            <Link to='/login'>
                <button className="navButtonStyle">Login</button>
            </Link>
        </header>
    )

}

export default Navbar;