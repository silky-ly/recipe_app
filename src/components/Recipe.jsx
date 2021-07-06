import React from "react";

const Recipe = ({ image, title, steps}) => {
    return ( 
        <div className='recipe-card'>
            <img src={image} alt="img" />
            <h4 className='recipe-title'>{title}</h4>
            <ol className="details">
                {steps.map(step => (
                    <li>{step.text}</li>
                ))}
            </ol>
        </div> 
    );
}

export default Recipe;
