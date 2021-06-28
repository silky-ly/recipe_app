import React from 'react';
import { useRef } from 'react';
// import { useAuth } from '../contexts/Auth';

const Register = () => {

    const fullnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    // let { signup } = useAuth();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     signup(emailRef.current.value, passwordRef.current.value);
    // }

    return (  
        <div className="signup-card">
            <h2 className='signup-title'>CREATE ACCOUNT</h2>
            <form action="#" className='signup-form'>
                <input type="text" name='fullname' placeholder='Full Name' ref={fullnameRef}  />
                <input type="email" name='email' placeholder='Email' ref={emailRef} />
                <input type="password" name='password' placeholder='Password' ref={passwordRef} />
                <input type="password" name='confirm-password' placeholder='Confirm Password' ref={confirmPasswordRef} />
                <button className= 'signup-btn' type='submit'>Sign Up</button>
            </form>

            <div className="signup-alt">
                Already have an account? <a href="#"> Sign In</a> 
            </div>
        </div>
    );
}

export default Register;