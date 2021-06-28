import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (  
        <div className='welcome-page'>
            <div className="welcome-details">
                <header className='welcome-img'></header>
            </div>

            <div className="welcome-btns">
                <button className="login btn">Login</button>
                <button className="register btn">Register</button>
            </div>
        </div>
    );
}

export default Welcome;