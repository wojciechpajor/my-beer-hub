import './App.css';
import './colors.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavigationBar } from "./Components/NavigationBar/NavigationBar";
import { Home } from "./Components/Home/Home";
import { Gallery } from "./Components/Gallery/Gallery";
import { AddBeer } from "./Components/AddBeer/AddBeer";
import { DetailedBeerView } from "./Components/DetailedBeerView/DetailedBeerView";
import { Footer } from "./Components/Footer/Footer";


export const App = () =>
    <div className="App">


<Router>
    <NavigationBar/>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/addbeer" component={AddBeer}/>
        <Route path="/beer/:beerID" component={DetailedBeerView}/>
    </Switch>
    <Footer/>
</Router>
    </div>
