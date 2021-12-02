import "./Navbar.css";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { selectUserEmail, setActiveUser } from '../../Features/userSlice';
import {useEffect} from "react";

const Navbar = () => {

    const dispatch = useDispatch()
    const userEmail = useSelector(selectUserEmail)

    useEffect( () => {
        let navButtons = document.getElementsByClassName("NavLinkStyle");
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].addEventListener("click", function() {
                let current = document.getElementsByClassName("active");
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }
                this.className += " active";
            });
        }
    }, [])

    const handleLogOut = () => {
        dispatch(setActiveUser({
            userName: null,
            userEmail: null
          }))
    }



    const handleClick = () => {
        document.getElementById("hamburger").checked = false;
    }

    return (
        <nav className='hamNav'>
            <label for='hamburger'>&#9776;</label>
            <input type='checkbox' id='hamburger' className='hamburger' />
            <div id='navbarContainer' className='hamItems'>
                <Link to='/' className="NavLinkStyle active" onClick={(e) => handleClick(e)}>Home</Link>
                <Link to='/gallery' className="NavLinkStyle" onClick={(e) => handleClick(e)}>Gallery</Link>
                <Link to='/addbeer' className="NavLinkStyle" onClick={(e) => handleClick(e)}>Add beer</Link>
                {
                    userEmail ? (
                        <div className='hamNavLog'>
                            <a className='loginInfo'>Logged as {userEmail}</a>
                            <Link to ='/' className='NavLinkStyle' onClick={handleLogOut}>Log Out</Link>
                        </div>
                    ) : (
                        <Link to='/login' className="NavLinkStyle" onClick={(e) => handleClick(e)}>Login</Link>
                    )
                }
            </div>
        </nav>
    )

}

export default Navbar;