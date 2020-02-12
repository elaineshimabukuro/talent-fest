import React, { useState, useEffect } from 'react';
import Home from '../src/home/home';
import Nav from '../src/components/nav/nav'
import Simulator from './components/simulator/simulator';
import Register from './pages/register/register';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  fetch('https://laboratoria-2020-backend.herokuapp.com/estados/')
        .then(results => {
            return results.json()
        })
        .then(data => console.log(data))
  return (
    <Router>
      <Nav />
      <Simulator />
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/register'><Register /></Route>
      </Switch>
    </Router>
  )
}

export default App;
