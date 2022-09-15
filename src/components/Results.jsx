import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Layout from './Layout';
import Recipe from './Recipe';

const Results = () => {
	const location = useLocation();
	const query = new URLSearchParams(location.search).get('query');
	const { slug } = useParams();

	const [recipies, setRecipies] = useState([]);

	// const color = ["#27AE60", "#3498DB", "#E67E22","red","#DAF7A6"];

	const APP_ID = 'cfdd6393';
	const APP_KEY = '03b9a8dd88fa6192220fe65f87729aea';

	const getRecipes = async () => {
		const res = await fetch(
			`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
		);
		const data = await res.json();
		console.log(data, data.count, 'hits', 'count');
		setRecipies(data.hits);
	};

	useEffect(() => {
		getRecipes();
	}, []);

	return (
		<Layout>
			<div className="recipe">
				<div className="recipe_heading">
					<div className="recipe_line"></div>
					<h1 className="recipe_title">recipe</h1>
				</div>

				<div className="recipe_container">
					{recipies.map(recipe => (
						<Recipe
							key={recipe.recipe.id}
							image={recipe.recipe.image}
							title={recipe.recipe.label}
							steps={recipe.recipe.ingredients}
						/>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Results;
