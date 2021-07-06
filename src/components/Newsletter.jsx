import React from "react";
import { useForm } from "react-hook-form";


const Newsletter = () => {

    const { register, handleSubmit} = useForm()

    const getNews = ({ email, password }) => {

        if(email) {
            alert ('Thank you for subscribing')
        }
    }
    return ( 
        <div className='newsletter-container'>
            <h3>Want free recipes sent straight to your inbox? Sign up here.</h3>
            <form action="" className="newsletter-form" onSubmit={handleSubmit(getNews)}>
                
                <input type="email" name='email' placeholder='Email' className='newsletter' { ...register('email')} />
                <button className="newsletter-btn">Submit</button>
            </form>
        </div> 
    );
}

export default Newsletter;