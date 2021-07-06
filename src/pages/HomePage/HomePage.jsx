import React, { Component } from 'react';
import Newsletter from '../../components/Newsletter';
import DisplayMeals from './DisplayMeals';
import homepage from '../../data/homepage'
import Likes from '../../components/Likes';
// import Ratings from '../../components/Ratings';
// import { Carousel } from 'react-responsive-carousel';


const Page = () => {


    return (
        <div className='homepage-container'>
            <h2 className='homepage-title'>This Week's <span>Favourite</span></h2>

            <div className='homepage-hero'>
                <img src="/images/mint-and-lime-cocktail.jpg" alt="" className='hero-img' />
                <Likes />

                <div className="hero-btn">
                    <button id='prev'>Prev</button>
                    <button id='next'>Next</button>
                </div>
            </div>

                <h3 className='homepage-text'>Our lovingly prepared recipies.</h3>
            <div className='cards'>
                {homepage.map((dessert) => (
                    <DisplayMeals food= { dessert } />
                ))}
            </div>
            
            <Newsletter />
            <hr />
        </div>
    )
}

export default Page;