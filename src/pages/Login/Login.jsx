import React from "react";
import { useForm } from "react-hook-form";


const Login = () => {

    const { register, handleSubmit} = useForm()

    const login = ({ email, password }) => {
        const user = localStorage.getItem(email)

        if(!user) {
            return alert('An account for this email was not found')
        }

        const userdata = JSON.parse(user)

        if(password !== userdata.password) {
            alert ('email or password is incorrect')
        }

        alert('Login successful')
    }


    return ( 
        <div className="signin-card">
            <h2 className='signin-title'>LOGIN</h2>
            <form action="#" className='signin-form' onSubmit={handleSubmit(login)}>
                <input type="email" name='email' placeholder='Email'  { ...register('email')} />
                <input type="password" name='password' placeholder='Password' { ...register('password')} />

                <button className= 'signin-btn' type='submit'>Sign In</button>
            </form>

            <div className="signin-alt">
                Don't have an account? <a href="./hompage"> Create account</a> 
            </div>
        </div>
    );
}

export default Login;
