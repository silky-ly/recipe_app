import React from 'react';
import Newsletter from '../../components/Newsletter';
import DisplayMeals from '../../components/DisplayMeals';
import homepage from '../../homepage'


const Page = () => {
    return (
        <div className='homepage-container'>
            <h2 className='homepage-title'><span>Meal</span> of the week</h2>

            <div className='homepage-hero'>
                <img src="http://images.summitmedia-digital.com/yummyph/images/november_2015/chocolatatableatorte-645.jpg" alt="" className='hero-img' />
                <div className="hero-btn">
                    <button id='prev'>Prev</button>
                    <button id='next'>Next</button>
                </div>
            </div>

            <div>
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