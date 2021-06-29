import React from 'react';
import { useState,useEffect } from 'react';


const Register = () => {

    const useForm = () => {
        const [values, setValues] = useState({
            fullname: '',
            email: '',
            password: '',
            confirmpassword: ''
        });
    
        const [errors, SetErrors] = useState({})
    
        const handleChange = (e) => {
            const { name, value } = e.target
            setValues({
                ...values,
            [name]: value
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault();
        }
    
        return { handleChange, values, handleSubmit }
    }

    const { handleChange, values, handleSubmit } = useForm();

    return (  
        <div className="signup-card">
            <h2 className='signup-title'>CREATE ACCOUNT</h2>
            <form action="#" className='signup-form' onSubmit={ handleSubmit }>
                <input type="text" name='fullname' id='fullname' placeholder='Full Name' value={values.fullname} onChange={handleChange} />
                <input type="email" name='email' id='email' placeholder='Email' value={values.email} onChange={handleChange} />
                <input type="password" name='password' id='password' placeholder='Password' value={values.password} onChange={handleChange} />
                <input type="password" name='confirmPassword' id='confirmPassword' placeholder='Confirm Password' value={values.confirmpassword} onChange={handleChange} />
                <button className= 'signup-btn' type='submit'>Sign Up</button>
            </form>

            <div className="signup-alt">
                Already have an account? <a href="#"> Sign In</a> 
            </div>
        </div>
    );
}

export default Register;