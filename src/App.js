import './App.css';
import react from 'react';
import Navbar from './Components/Navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Home from './Components/Home/Home.js';
import AddBeer from './Components/AddBeer/AddBeer.js';
import Login from './Components/Login/Login'
import SignUp from './Components/Login/SignUp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <main role="main" className="App container-fluid">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/addbeer" component={AddBeer} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
