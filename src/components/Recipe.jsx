import React from 'react';

const Recipe = ({ image, title, steps }) => {
	return (
		<div className="recipe-card">
			<h4 className="recipe-title">{title}</h4>
			<div className="recipe-wrap">
				<img src={image} alt="img" />
				<ol className="details">
					{steps.map(step => (
						<li>{step.text}</li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default Recipe;
