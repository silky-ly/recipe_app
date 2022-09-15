import React from 'react';
import Newsletter from '../../components/Newsletter';
import DisplayMeals from './DisplayMeals';
import homepage from '../../data/homepage';
import Likes from '../../components/Likes';
import Layout from '../../components/Layout';

const Page = () => {
	return (
		<Layout>
			<div className="homepage_container">
				<div className="homepage_heading">
					<div className="homepage_line"></div>
					<h2 className="homepage_title">
						This Week's <span>Favourite</span>
					</h2>
				</div>

				<div className="homepage_hero">
					<div className="homepage_flex">
						<img
							src="/images/mint-and-lime-cocktail.jpg"
							alt=""
							className="hero_img"
						/>
						<p className="homepage_text">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Eum harum, odio minus quis, sequi corporis
							unde sapiente excepturi voluptates facilis quam
							quibusdam incidunt velit enim a, deserunt adipisci!
							Vel, excepturi.
						</p>
					</div>

					<Likes />

					<div className="hero_btn">
						<button id="prev">Prev</button>
						<button id="next">Next</button>
					</div>
				</div>

				<div className="homepage_main">
					<h3 className="homepage_subtext">
						Our lovingly prepared recipies.
					</h3>

					<div className="homepage_line1"></div>
				</div>

				<div className="cards">
					{homepage.map(dessert => (
						<DisplayMeals food={dessert} />
					))}
				</div>

				<Newsletter />
			</div>
		</Layout>
	);
};

export default Page;
