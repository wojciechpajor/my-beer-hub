import "./Navbar.css"
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { selectUserEmail, setActiveUser } from '../../Features/userSlice'


const Navbar = () => {

    const dispatch = useDispatch()
    const userEmail = useSelector(selectUserEmail)

    const handleLogOut = () => {
        dispatch(setActiveUser({
            userName: null,
            userEmail: null
          }))
    }

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
            {
            userEmail ? (
                <div className = "accPanelStyle">
                <li className="NavAccName" >Logged as {userEmail}</li>
                <button className="navButtonStyle" onClick = {handleLogOut}>Log Out</button>
                </div>
            ) : (
            <Link to='/login'>
            <button className="navButtonStyle">Login</button>
            </Link>
            )
            }
        </header>
    )

}

export default Navbar;