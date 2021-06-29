import Menu from "./Menu";
import Page from "./Page";
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
                <Menu />
                <Switch>
                    <Route path='/page' component={ Page }/>
                    <Route path='/category' component={ Category }/>
                    <Route path='/contact' component={ Contact }/>
                    <Route path='/about' component={ About }/>
                    <Route path='/local' component={ Local }/>
                    <Route path='/vegan' component={ Vegan }/>
                </Switch>
            </div>
        </Router>
    );
}

export default Home;