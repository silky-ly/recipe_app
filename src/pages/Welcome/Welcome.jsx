import React from 'react';
import { Link } from 'react-router-dom';


const Welcome = () => {
    return (  
        <div className='welcome-page'>
            <div className="welcome-details">
                <div className='welcome-img'>
                </div>
            </div>

            <div className="welcome-btns">
                <Link to='/login' exact>
                    <button className="login btns">Login</button>
                </Link>

                <Link to='/register' exact>
                    <button className="register btns">Register</button>
                </Link>
            </div>
        </div>
    );
}

export default Welcome;