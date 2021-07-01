import React from "react";
import HamburgerMenu from "./components/HamburgerMenu";
import Welcome from "./pages/Welcome/Welcome";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import HomePage from "./pages/HomePage/HomePage";
import Category from "./pages/Category/Category";
import Cocktails from "./pages/Cocktails/Cocktails";
import Desserts from "./pages/Desserts/Desserts";
import Vegan from "./pages/Vegan/Vegan";
import Features from "./pages/Features/Features";
import About from "./pages/About/About";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return(
    <Router>
      <HamburgerMenu />
      <div>
          <Switch>
              <Route path='/hamburdermenu' component={ HamburgerMenu }/>
              <Route path='/register' component={ Register }/>
              <Route path='/login' component={ Login }/>
              <Route path='/homepage' component={ HomePage }/>
              <Route path='/category' component={ Category }/>
              <Route path='/cocktails' component={ Cocktails }/>
              <Route path='/desserts' component={ Desserts }/>
              <Route path='/vegan' component={ Vegan }/>
              <Route path='/features' component={ Features }/>
              <Route path='/about' component={ About }/>
          </Switch>
      </div>
    </Router>
  )
}

export default App;