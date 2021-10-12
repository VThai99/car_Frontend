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
import Shopping from './pages/Shopping/Shopping';
import Product from './pages/Product/Product';
import Login from './pages/Login/Login';
import Category from './admin/pages/Category/Category';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Heart from './pages/Heart/Heart';
import Ninja from './pages/Ninja/Ninja';
function App() {
  return (
      <Router>
        <Switch>
          <Route path="/heart"><Heart></Heart></Route>
          <Route path='/about'><About></About></Route>
          <Route path='/blog'><Blog></Blog></Route>
          <Route path='/product/:id'><Product></Product></Route>
          <Route path='/contact'><Contact></Contact></Route>
          <Route path='/login'><Login></Login></Route>
          <Route path='/cart'><Cart></Cart></Route>
          <Route path='/admin'><Category></Category></Route>
          <Route path='/ninja'><Ninja></Ninja></Route>
          <Route path='/'><Shopping></Shopping></Route>
        </Switch>
      </Router>
  );
}

export default App;
