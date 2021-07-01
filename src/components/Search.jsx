import Recipe from "./Recipe";
import { useState, useEffect } from 'react';
import  { Redirect } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";


const Search = () => { 
    const APP_ID = 'cfdd6393';
    const APP_KEY = '03b9a8dd88fa6192220fe65f87729aea';

    const [recipies, setRecipies] = useState([]);
    const [search, setSearch] = useState('');
    const [act, setAct] = useState('');

    useEffect(() => {
        getRecipes();
    }, [act]);

    const getRecipes = async () => {
        const res = await fetch(`https://api.edamam.com/search?q=${act}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data =  await res.json();
        console.log(data.hits);
        setRecipies(data.hits)
    }

    const inputState = (e) => {
        setSearch(e.target.value);
        console.log(search)
    }

    const getAct = (e) => {
        e.preventDefault();
        (setAct(search))
        setSearch('')
    }


    return (
        <div className="search-field">
            <form action="#" className="search-form" onSubmit={getAct} placeholder='search'>
                <input type="text" className='search-bar' value={search} onChange={inputState} />
                < FaSearch style={{ color: "#000", width: "18px", height: "12px", marginLeft: '-30px', marginBottom: '10px' }} />
            </form>

            <div className='reee'>
                {recipies.map(recipe => <Recipe key={recipe.recipe.id} image={recipe.recipe.image} title={recipe.recipe.label} steps={recipe.recipe.ingredients}/>)}
            </div>
        </div>
    );
}

export default Search;