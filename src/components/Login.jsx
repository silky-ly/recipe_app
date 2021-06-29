import { useRef } from 'react'


const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    return ( 
        <div className="signin-card">
            <h2 className='signin-title'>LOGIN</h2>
            <form action="#" className='signin-form'>
                <input type="email" name='email' placeholder='Email' ref={emailRef} />
                <input type="password" name='password' placeholder='Password' ref={passwordRef} />
                <button className= 'signin-btn' type='submit'>Sign In</button>
            </form>

            <div className="signin-alt">
                Don't have an account? <a href="#"> Create account</a> 
            </div>
        </div>
    );
}

export default Login;