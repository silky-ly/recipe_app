import React from 'react';
import { useState, useEffect } from 'react';
import Login from '../Login/Login';
// import { Link } from 'react-router-dom';


const Form = () => {
    
    const[isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    }

    return (
        <div>
            {!isSubmitted ? (<Register submitForm={ submitForm } />) : (<FormSuccess />)}
        </div>
    );
};


const FormSuccess = () => {
    return (
        <div className="form-content">
            <div className="form-success">
                <Login />
            </div>
        </div>
    )
}


const Register = ( { submitForm } ) => {

    const useForm = (callback, validate) => {
        const [values, setValues] = useState({
            fullname: '',
            email: '',
            password: '',
            confirmpassword: ''
        });
    
       
        const [errors, SetErrors] = useState({});
        const [isSubmit, setIsSubmit] = useState(false);
    
        const handleChange = (e) => {
            const { name, value } = e.target
            setValues({
                ...values,
            [name]: value
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault();

            SetErrors(validate(values));
            setIsSubmit(true);
        }

        useEffect(() => {
            if(Object.keys(errors).length === 0 && isSubmit) {
                callback();
            }
        }, [errors]);
    
        return { handleChange, values, handleSubmit, errors };
    }


    const validate = (values) => {
        let errors = {};

        if(!values.fullname.trim()) {
            errors.fullname = "Fullname required";
        }

        if(!values.email) {
            errors.email = "Email required";
        } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Email address is invalid"
        }

        if(!values.password) {
            errors.password = "Password is required";
        } else if(values.password.handleChange < 8) {
            errors.password = "Password needs to be 8 characters or more";
        }

        if(!values.confirmpassword) {
            errors.confirmpassword = "Password is required";
        } else if(values.confirmpassword !== values.password) {
            errors.confirmpassword = "Passwords do not match";
        }

        return errors;
    };

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);


    return (  
        <div className="sign-up">
            <div className="signup-card">
                <h2>Welcome</h2>
                <p className='signup-contents'>Let's create your account!</p>
                
                {/* <Blob size="100vh" style={{ color: "#7b7b7b", width: "35px", height: "35px" }} /> */}
                <form action="#" className='signup-form' onSubmit={ handleSubmit }>
                    <input type="text" name='fullname' id='fullname' placeholder='Full Name' value={values.fullname} onChange={handleChange} />
                    {errors.fullname && <p>{errors.fullname}</p>}

                    <input type="email" name='email' id='email' placeholder='Email' value={values.email} onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}

                    <input type="password" name='password' id='password' placeholder='Password' value={values.password} onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}

                    <input type="password" name='confirmpassword' id='confirmpassword' placeholder='Confirm Password' value={values.confirmpassword} onChange={handleChange} />
                    {errors.confirmpassword && <p>{errors.confirmpassword}</p>}

            
                    <button className= 'signup-btn' type='submit'>Sign Up</button>
                </form>

                <div className="signup-alt">
                    Already have an account? <a href="./login"> Sign In</a> 
                </div>
            </div>
        </div>
    );
}

export default Form;