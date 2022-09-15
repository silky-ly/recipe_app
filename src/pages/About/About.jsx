import React from 'react';
import DisplayAbout from './DisplayAbout';
import abouts from '../../data/about';
import Layout from '../../components/Layout'

const About = () => {
	return (
		<Layout>
			<div className="about">
				<div className="about_heading">
					<div className="about_line"></div>
					<h3 className="about_title">About Us</h3>
				</div>

				<div className="about_main">
					{abouts.map((about) => (
					<DisplayAbout key={ about.id }about={ about } />
					))}
				</div>
			</div>
		</Layout>
	);
};

export default About;
