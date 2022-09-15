import React from 'react';
import { Link } from 'react-router-dom';

const DisplayFeatures = ({ feature }) => {
	return (
		<div className="feature-cards">
			<Link to={`/feature/${feature._id}`}>
				<h1 className="feature-title">{feature.name}</h1>
				<img src={feature.image} alt="#" className="feature-img" />
			</Link>
		</div>
	);
};

export default DisplayFeatures;
