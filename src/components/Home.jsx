import Welcome from './Welcome';
import Form from './Register';
import Login from './Login';
import Page from "./Page";
import Menu from "./Menu";
import Category from "./Category";
import Contact from "./Features";
import About from "./About";
import Local from './Local';
import Vegan from './Vegan';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Home = () => {
    return ( 
        <Router>
            <div>
                <Welcome />
                <Switch>
                    <Route path='/welcome' component={ Welcome }/>
                    <Route path='/register' component={ Form }/>
                    <Route path='/login' component={ Login }/>
                    <Route path='/page' component={ Page }/>
                    <Route path='/menu' component={ Menu }/>
                    <Route path='/category' component={ Category }/>
                    <Route path='/contact' component={ Contact }/>
                    <Route path='/about' component={ About }/>
                    <Route path='/local' component={ Local }/>
                    <Route path='/vegan' component={ Vegan }/>
                    
                    {/* <Route path='/vegan' component={ Vegan }/> */}
                </Switch>
            </div>
        </Router>
    );
}

export default Home;