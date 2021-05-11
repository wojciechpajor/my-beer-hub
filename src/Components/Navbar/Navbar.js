import "./Navbar.css"
import {Link} from 'react-router-dom';
import Login from "./Login";
import { useEffect, useState } from "react";
import firebase from "../../firebase";

const Navbar = () => {


    return( 
    <div className = "MainNav">
        <Link to='/'>
        <li className = "NavLink">Home</li>
        </Link>
        <Link to='/gallery'>
        <li className = "NavLink">Gallery</li>
        </Link>
        <Link to='/addbeer'>
        <li className = "NavLink">Add beer</li>
        </Link>
        <button className = "navButtonStyle">Login</button>
    </div>
    )
    
}

export default Navbar;