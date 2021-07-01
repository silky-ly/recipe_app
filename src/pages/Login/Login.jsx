import { Link } from 'react-router-dom';


const Login = () => {

    return ( 
        <div className="signin-card">
            <h2 className='signin-title'>LOGIN</h2>
            <form action="#" className='signin-form'>
                <input type="email" name='email' placeholder='Email' />
                <input type="password" name='password' placeholder='Password' />

                <Link to='/homepage'>
                    <button className= 'signin-btn' type='submit'>Sign In</button>
                </Link>
            </form>

            <div className="signin-alt">
                Don't have an account? <a href="#"> Create account</a> 
            </div>
        </div>
    );
}

export default Login;
