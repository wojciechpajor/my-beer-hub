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
        <nav className='hamnav'>
            <label for='hamburger'>&#9776;</label>
            <input type='checkbox' id='hamburger' className='hamburger' />
            <div className='hamItems'>
                <Link to='/'>Home</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/addbeer'>Add beer</Link>
                {
                    userEmail ? (
                        <div className='hamnavLog'>
                            <a className='loginInfo'>Logged as {userEmail}</a>
                            <Link to ='/' onClick = {handleLogOut}>Log Out</Link>
                        </div>
                    ) : (
                        <Link to='/login'>Login</Link>
                    )
                }
            </div>
        </nav>
    )

}

export default Navbar;