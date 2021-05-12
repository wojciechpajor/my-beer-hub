import "./Navbar.css"
import {Link} from 'react-router-dom';
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
        <Link to='/signup'>
        <button className = "navButtonStyle">Sign Up!</button>
        </Link>
        
    </div>
    )
    
}

export default Navbar;