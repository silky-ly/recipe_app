// import Vegan from './Vegan';
// import Dessert from './Dessert';
// import Local from './Local';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Category = () => {
    return ( 
        <div className="category-links">
            <h1>catsss</h1>
            <ul>
                <Link to='/local'> 
                    <li>Local Meals</li>
                </Link>

                <Link to='/vegan'>
                    <li>Vegan</li>
                </Link>

                <Link to='/dessert'>
                    <li>Dessert</li>
                </Link>
            </ul>
        </div>
    );
}

export default Category;