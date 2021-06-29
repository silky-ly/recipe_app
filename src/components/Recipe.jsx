
const Recipe = ({ image, title, steps}) => {
    return ( 
        <div className='recipe-card'>
            <img src={image} alt="img" />
            <h3 className='recipe-title'>{title}</h3>
            <ol className="details">
                {steps.map(step => (
                    <li>{step.text}</li>
                ))}
            </ol>
        </div> 
    );
}

export default Recipe;