import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Why from './Components/WhyUs';
import What from './Components/WhatWeDo'



import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
    
    <Header />
    
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/why-us" component={Why}></Route>
          <Route path="/what-we-do" component={What}></Route>
        </Switch>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
