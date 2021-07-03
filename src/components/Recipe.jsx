

const Recipe = ({ image, title, steps}) => {
    return ( 
        <div className='recipe-search'>
            {/* <Search /> */}
                <div className='recipe-card'>
                <img src={image} alt="img" />
                <h3 className='recipe-title'>{title}</h3>
                <ol className="details">
                    {steps.map(step => (
                        <li>{step.text}</li>
                    ))}
                </ol>
            </div> 
        </div>
    );
}

export default Recipe;