import React from 'react'
import { useState } from 'react';

const Reg = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    return (  
        <div className="sign-up">
            <div className="signup-card">
                <h2>Welcome</h2>
                <p className='signup-contents'>Let's create your account!</p>
                
                {/* <Blob size="100vh" style={{ color: "#7b7b7b", width: "35px", height: "35px" }} /> */}
                <form action="#" className='signup-form' onSubmit={ handleSubmit }>
                    <input type="text" name='fullname' id='fullname' placeholder='Full Name' value={values.fullname} onChange={handleChange} />
                    {errors.fullname && <p>{errors.fullname}</p>}

                    <input type="email" name='email' id='email' placeholder='Email' value={email} onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}

                    <input type="password" name='password' id='password' placeholder='Password' value={password} onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}

                    <input type="password" name='confirmpassword' id='confirmpassword' placeholder='Confirm Password' value={confirmpassword} onChange={handleChange} />
                    {errors.confirmpassword && <p>{errors.confirmpassword}</p>}

            
                    <button className= 'signup-btn' type='submit'>Sign Up</button>
                </form>

                <div className="signup-alt">
                    Already have an account? <a href="#"> Sign In</a> 
                </div>
            </div>
        </div>
    );
}

export default Reg
