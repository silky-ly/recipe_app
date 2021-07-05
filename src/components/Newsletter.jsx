
const Newsletter = () => {
    return ( 
        <div className='newsletter-container'>
            <h3>Want free recipes sent straight to your inbox? Sign up here.</h3>
            <form action="" className="newsletter-form">
                
                <input type="email" name='email' placeholder='Email' className='newsletter' />
                <button className="newsletter-btn">Submit</button>
            </form>
        </div> 
    );
}

export default Newsletter;