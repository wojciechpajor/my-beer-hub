import "./Navbar.css";
import {Link} from 'react-router-dom';
import {useState} from "react";
import Login from "../Authentication/Login/Login";
import {Button} from "react-bootstrap";
import Signup from "../Authentication/Signup/Signup";
import React from "react";
import {useLocation} from 'react-router-dom';

const Navbar = () => {

    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('Login')
    const location = useLocation();

    const handleLogin = () => {
        setShowModal(true);
    }

    const returnActiveClassIfLocation = (locationName: string) => {
        return 'NavLinkStyle' + (location.pathname == locationName ? ' active' : '');
    }

    return (
        <nav className='hamNav'>
            <label form='hamburger'>&#9776;</label>
            <input type='checkbox' id='hamburger' className='hamburger'/>
            <div id='navbarContainer' className='hamItems'>
                <Link to='/' className={returnActiveClassIfLocation('/')}>Home</Link>
                <Link to='/gallery' className={returnActiveClassIfLocation('/gallery')}>Gallery</Link>
                <Link to='/addbeer' className={returnActiveClassIfLocation('/addbeer')}>Add beer</Link>
                <Button onClick={() => handleLogin()} className='btn btn-warning ml-auto px-5 m-1 mx-5'
                        style={{color: "white"}}>Login</Button>
                {showModal
                    ?
                    modalType === "Login" ? <Login setShowModal={setShowModal} setModalType={setModalType}/> :
                        <Signup setShowModal={setShowModal} setModalType={setModalType}/>
                    :
                    ("")
                }
            </div>
        </nav>
    )

}

export default Navbar;