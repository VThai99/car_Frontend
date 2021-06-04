// import logo from './i1.png';
import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-animated-slider/build/horizontal.css";
import Blog from './Layout/Blog';
import Contact from './Layout/Contact';
import About from './Layout/About';
import Pluss from './Layout/Pluss';
import Shopping from './pages/Shopping/Shopping';
import Product from './pages/Product/Product';
function App() {
  return (
      <Router>
        <Switch>
          <Route path='/plus'><Pluss></Pluss></Route>
          <Route path='/about'><About></About></Route>
          <Route path='/blog'><Blog></Blog></Route>
          <Route path='/product/:id'><Product></Product></Route>
          <Route path='/contact'><Contact></Contact></Route>
          <Route path='/'><Shopping></Shopping></Route>
        </Switch>
      </Router>
  );
}

export default App;
