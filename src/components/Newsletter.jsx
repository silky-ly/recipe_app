
const Newsletter = () => {
    return ( 
        <div className='newsletter-container'>
            <h3>Subscribe to our Newsletter.</h3>
            <form action="" className="newsletter-form">
                
                <input type="email" name='email' placeholder='Email' className='newsletter' />
                <button className="newsletter-btn">Submit</button>
            </form>
        </div> 
    );
}

export default Newsletter;