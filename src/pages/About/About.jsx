import React from 'react';
import DisplayAbout from './DisplayAbout';
import abouts from '../../data/about';

const About = () => {
	return (
		<>
			<div className="about-us">
				<h3 className="aboutus-title">About Us</h3>
				{abouts.map((about) => (
					<DisplayAbout key={ about.id }about={ about } />
				))}
			</div>
		</>
	);
};

export default About;
