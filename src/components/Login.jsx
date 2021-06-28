import { useRef } from 'raect';

const Login = () => {
    return ( 
        <div className="signin-card">
            <h2 className='signin-title'>LOGIN</h2>
            <form action="#" className='signup-form'>
                <input type="email" name='email' placeholder='Email' ref={emailRef} />
                <input type="password" name='password' placeholder='Password' ref={passwordRef} />
                <button className= 'signin-btn' type='submit'>Sign In</button>
            </form>

            <div className="signup-alt">
                Already have an account? <a href="#"> Sign In</a> 
            </div>
        </div>
    );
}
 
export default Login;