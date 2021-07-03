import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from "./pages/Welcome/Welcome";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import HamburgerMenu from "./components/HamburgerMenu";
import HomePage from "./pages/HomePage/HomePage";
import Category from "./pages/Category/Category";
import Cocktails from "./pages/Cocktails/Cocktails";
import Desserts from "./pages/Desserts/Desserts";
import Vegan from "./pages/Vegan/Vegan";
import Features from "./pages/Features/Features";
import productPage from "./components/productPage";
import About from "./pages/About/About";


function App() {
  return(
    <Router>
      <div>
          <Switch>
              <Route path='/welcome' component={ Welcome }/>
              <Route path='/register' component={ Register }/>
              <Route path='/login' component={ Login }/>
            </Switch>

            <HamburgerMenu />

            <Switch>
              <Route path='/' exact component={ HomePage }/>
              <Route path='/category' component={ Category }/>
              <Route path='/cocktails' component={ Cocktails }/>
              <Route path='/desserts' component={ Desserts }/>
              <Route path='/vegan' component={ Vegan }/>
              <Route path='/dessert/:id' component={ productPage }/>
              <Route path='/features' component={ Features }/>
              <Route path='/about' component={ About }/>
          </Switch>
      </div>
    </Router>
  )
}

export default App;