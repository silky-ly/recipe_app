import React from 'react';


const Page = () => {
    return (
        <div className='top-ordered-container'>
            
            <h2 className='homepage-title'>OUTSTANDING RECIPES</h2>

            <div className='homepage-hero'>
                <div className='hero-img'>
                    <div><img src="https://afrotourism.com/wp-content/uploads/2018/06/ofada-sauce1.jpg" alt="" /></div>
                    <div><img src="https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/ora-soup.jpg" alt="" /></div>
                </div>

                <div className="hero-btn">
                    <button id='prev'>Prev</button>
                    <button id='next'>Next</button>
                </div>
            </div>

            <div className="homepage-card">
                <div className='homepage-img'>
                    <img src="https://afrotourism.com/wp-content/uploads/2018/06/ofada-sauce1.jpg" alt="" />
                </div>

                <div className='homepage-contents'>
                    <h3>Lorem</h3>
                    <p>Deliciously baked</p>
                    {/* <span>To get recipies, click here </span> */}
                </div>
            </div>
        </div>
    )
}

export default Page;