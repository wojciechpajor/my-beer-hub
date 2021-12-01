import "./Navbar.css"
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { selectUserEmail, setActiveUser } from '../../Features/userSlice'
import {useState} from "react";


const Navbar = () => {

    const [activeUrl,setActiveUrl] = useState("http://localhost:3000/");
    const dispatch = useDispatch()
    const userEmail = useSelector(selectUserEmail)

    const handleLogOut = () => {
        dispatch(setActiveUser({
            userName: null,
            userEmail: null
          }))
    }

    const toggleHam = (e) => {
        document.getElementById("hamburger").checked = false;
        setActiveUrl(e.target.href);
    }

    return (
        <nav className='hamNav'>
            <label form='hamburger'>&#9776;</label>
            <input type='checkbox' id='hamburger' className='hamburger' />
            <div className='hamItems'>
                <Link to='/' className={activeUrl==="http://localhost:3000/"?"NavLinkStyleActive":"NavLinkStyle"} onClick={(e) => toggleHam(e)}>Home</Link>
                <Link to='/gallery' className={activeUrl==="http://localhost:3000/gallery"?"NavLinkStyleActive":"NavLinkStyle"} onClick={(e) => toggleHam(e)}>Gallery</Link>
                <Link to='/addbeer' className={activeUrl==="http://localhost:3000/addbeer"?"NavLinkStyleActive":"NavLinkStyle"} onClick={(e) => toggleHam(e)}>Add beer</Link>
                {
                    userEmail ? (
                        <div className='hamNavLog'>
                            <a className='loginInfo'>Logged as {userEmail}</a>
                            <Link to ='/' className='NavLinkStyle' onClick={handleLogOut}>Log Out</Link>
                        </div>
                    ) : (
                        <Link to='/login' className={activeUrl==="http://localhost:3000/login"?"NavLinkStyleActive":"NavLinkStyle"} onClick={(e) => toggleHam(e)}>Login</Link>
                    )
                }
            </div>
        </nav>
    )

}

export default Navbar;