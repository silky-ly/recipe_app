import React from 'react';
import DisplayAbout from '../../components/DisplayAbout';
import abouts from '../../about';

const About = () => {
	return (
		<>
			<div className="about-us">
				<h1 className="aboutus-title">About Us</h1>
				{abouts.map((about) => (
					<DisplayAbout key={ about.id }about={ about } />
				))}
			</div>
		</>
	);
};

export default About;
