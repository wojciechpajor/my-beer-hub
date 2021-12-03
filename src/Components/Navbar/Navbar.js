import "./Navbar.css";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserEmail, setActiveUser} from '../../Features/userSlice';
import {useEffect, useState} from "react";
import Login from "../Authentication/Login/Login";
import {Button, Modal} from "react-bootstrap";
import Signup from "../Authentication/Signup/Signup";

const Navbar = () => {

    const dispatch = useDispatch()
    const userEmail = useSelector(selectUserEmail)
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('Login')

    useEffect(() => {
        let navButtons = document.getElementsByClassName("NavLinkStyle");
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].addEventListener("click", function () {
                let current = document.getElementsByClassName("active");
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }
                this.className += " active";
            });
        }
    }, [])

    const handleClick = () => {
        document.getElementById("hamburger").checked = false;
    }
    const handleLogin = () => {
        handleClick();
        setShowModal(true);
    }

    return (
        <nav className='hamNav'>
            <label for='hamburger'>&#9776;</label>
            <input type='checkbox' id='hamburger' className='hamburger'/>
            <div id='navbarContainer' className='hamItems'>
                <Link to='/' className="NavLinkStyle active" onClick={(e) => handleClick(e)}>Home</Link>
                <Link to='/gallery' className="NavLinkStyle" onClick={(e) => handleClick(e)}>Gallery</Link>
                <Link to='/addbeer' className="NavLinkStyle" onClick={(e) => handleClick(e)}>Add beer</Link>
                <Button onClick={() => handleLogin()} className='btn btn-warning ml-auto px-5 m-1' style={{color:"white"}}>Login</Button>
                {showModal
                    ?
                    modalType === "Login" ? <Login setShowModal={setShowModal} setModalType={setModalType} /> : <Signup setShowModal={setShowModal} setModalType={setModalType} />
                    :
                    ("")
                }
            </div>
        </nav>
    )

}

export default Navbar;