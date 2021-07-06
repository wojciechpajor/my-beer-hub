import userEvent from "@testing-library/user-event";
import {auth} from '../../firebase'
import "./Home.css"

const Home = () => {
    return (
        <div className="bannerStyle">
            <p>Welcome in Beer Hub !</p>
        </div>
    )
}

export default Home;