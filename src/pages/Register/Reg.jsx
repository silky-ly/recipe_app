import React from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Reg = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const history = useHistory();

    const registerUser = ({ email, password, confirmPassword}) => {

        if (!email) {
            return alert('Please return a valid email')
        }

        if (password !== confirmPassword) {
            return alert('Passwords don\'t match')
        }

        let userExist = localStorage.getItem(email)
        console.log(userExist)

        if (userExist) {
            return alert ('This user has already been registered')
        }

        const newUser = JSON.stringify({
            email: email, 
            password: password})

        localStorage.setItem(email, newUser)


        alert('Success')
        history.push('/login')
    }

    return (  
        <div className="sign-up">
            <div className="signup-card">
                <h2>Welcome</h2>
                <p className='signup-contents'>Let's create your account!</p>
                
                {/* <Blob size="100vh" style={{ color: "#7b7b7b", width: "35px", height: "35px" }} /> */}
                <form action="#" className='signup-form' onSubmit={handleSubmit(registerUser)}>
                    {/* <input type="text" name='fullname' id='fullname' placeholder='Full Name' value={fullname} /> */}
                    {/* {errors.fullname && <p>{errors.fullname}</p>} */}

                    <input type="email" name='email' id='email' placeholder='Email' { ...register('email', { required: true})} />

                    {/* {errors.email && <p>{errors.email}</p>} */}

                    <input type="password" name='password' id='password' placeholder='Password' { ...register('password', { required: true})}   />
                    {/* {errors.password && <p>{errors.password}</p>} */}

                    <input type="password" name='confirmpassword' id='confirmpassword' placeholder='Confirm Password' { ...register('confirmPassword', { required: true})}/>
                    {/* {errors.confirmpassword && <p>{errors.confirmpassword}</p>} */}

            
                    <button className= 'signup-btn' type='submit'>Sign Up</button>
                </form>

                <div className="signup-alt">
                    Already have an account? <a href="/login"> Sign In</a> 
                </div>
            </div>
        </div>
    );
}

export default Reg
