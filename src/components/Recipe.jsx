const Recipe = ({ image, title, steps}) => {
    return ( 
        <div>
            <img src={image} alt="img" />
            <h3>{title}</h3>
            <ol className="details">
                {steps.map(step => (
                    <li>{step.text}</li>
                ))}
            </ol>
        </div> 
    );
}

export default Recipe;