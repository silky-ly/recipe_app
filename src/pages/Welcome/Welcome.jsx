import React from 'react';
import { Link } from 'react-router-dom';


const Welcome = () => {
    return (  
        <div className='welcome-page' style={{backgroundColor: 'green'}}>
            <div className="welcome-details">
                <div className='welcome-img'>
                </div>
            </div>

            <div className="welcome-btns">
                <Link to='/login' exact>
                    <button className="login-btn btn">Login</button>
                </Link>

                <Link to='/reg' exact>
                    <button className="register-btn btn">Register</button>
                </Link>
            </div>
        </div>
    );
}

export default Welcome;