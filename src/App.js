import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from "./pages/Welcome/Welcome";
import Reg from "./pages/Register/Reg"
import Login from "./pages/Login/Login";
import HamburgerMenu from "./components/HamburgerMenu";
import HomePage from "./pages/HomePage/HomePage";
import Category from "./pages/Category/Category";
import Cocktails from "./pages/Cocktails/Cocktails";
import Desserts from "./pages/Desserts/Desserts";
import Locals from "./pages/Locals/Locals";
import Vegans from "./pages/Vegans/Vegans";
import Features from "./pages/Features/Features";
import CocktailScreen from "./pages/ProductScreen/CocktailScreen"
import ProductPage from "./pages/ProductScreen/ProductPage"
import LocalScreen from "./pages/ProductScreen/LocalScreen"
import VeganScreen from "./pages/ProductScreen/VeganScreen"
import About from "./pages/About/About";
// import DarkModeToggle from "./components/DarkModeToggle";
import styled, { ThemeProvider } from 'styled-components';
import Darktheme from "./components/Darktheme";
import { Global, lightTheme, darkTheme } from "./components/Global";
import Toggle from "./components/Toggle";
import Results from "./components/Results";

const Container = styled.div``

function App() {

    const [ theme, toggleTheme ] = Darktheme()
    const themeMode = theme === 'light' ? lightTheme : darkTheme

  return(
    <Router>
          <div>
            <Switch>
            <ThemeProvider theme={ themeMode}>
            <Container>
            <Global />
            <Toggle theme={ theme} toggleTheme={ toggleTheme }/>
            <HamburgerMenu />
                <Route exact path='/' component={ Welcome }/>
                <Route path='/reg' component={ Reg }/>
                <Route exact path='/login' component={ Login }/> 
                <Route path='/homepage' exact component={ HomePage }/>
                <Route path='/category' component={ Category }/>
                <Route path='/cocktails' component={ Cocktails }/>
                <Route path='/desserts' component={ Desserts }/>
                <Route path='/locals' component={ Locals }/>
                <Route path='/vegans' component={ Vegans }/>
                <Route path='/features' component={ Features }/>
                <Route path='/about' component={ About }/>
                <Route path='/cocktail/:id' component={ CocktailScreen }/>
                <Route path='/dessert/:id' component={ ProductPage }/>
                <Route path='/local/:id' component={ LocalScreen }/>
                <Route path='/vegan/:id' component={ VeganScreen }/>
                <Route path='/results' component={ Results }/>
            </Container>
     </ThemeProvider>
            </Switch>
          </div>
        </Router>
  )
}

export default App;