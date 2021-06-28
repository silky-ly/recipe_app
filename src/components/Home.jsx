import Menu from "./Menu";
import Category from "./Category";
import Contact from "./Contact";
import About from "./About";
import Local from './Local';
import Vegan from './Vegan';
import Dessert from './Dessert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = () => {
    return ( 
        <Router>
            <div>
                <Menu />
                <Switch>
                    <Route path='/category' component={Category}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/about' component={About}/>
                    <Route path='/local' component={Local}/>
                    <Route path='/vegan' component={Vegan}/>
                    <Route path='/dessert' component={Dessert}/>
                </Switch>
            </div>
        </Router>
    );
}

export default Home;