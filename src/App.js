import './App.css';
import './colors.css';
import Navbar from './Components/Navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Home from './Components/Home/Home.js';
import AddBeer from './Components/AddBeer/AddBeer.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
    return (
        <Router>
            <main role="main" className="App">
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/addbeer" component={AddBeer}/>
                </Switch>
                <Footer/>
            </main>
        </Router>
    );
}

export default App;
