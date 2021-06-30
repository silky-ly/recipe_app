import React from 'react';
import Menu from './Menu';
import Likes from './Likes';


const Page = () => {
    return (
        <div>
            <Menu />
            <div className='top-ordered-container'>
            
                <h2 className='homepage-title'>Our <span>Favourites</span></h2>

                <div className='homepage-hero'>
                    <div className='hero-img'>
                        <div><img src="https://gbc-cdn-public-media.azureedge.net/img82550.1426x713.jpg" alt="" /></div>
                        <div><img src="https://www.brit.co/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMzMwNTIwMC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY4MTAyMTI4N30.NcYolQhAwDvJafgWYQUUFR2VaFzjVFgJXdRDFBgstzE/image.jpg?width=600&quality=85&coordinates=0%2C87%2C0%2C87&height=600" alt="" /></div>
                        {/* <div><img src="https://www.brit.co/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMzMwNTIwMC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY4MTAyMTI4N30.NcYolQhAwDvJafgWYQUUFR2VaFzjVFgJXdRDFBgstzE/image.jpg?width=600&quality=85&coordinates=0%2C87%2C0%2C87&height=600" alt="" /></div> */}
                        {/* <div><img src="https://www.brit.co/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMzMwNTIwMC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY4MTAyMTI4N30.NcYolQhAwDvJafgWYQUUFR2VaFzjVFgJXdRDFBgstzE/image.jpg?width=600&quality=85&coordinates=0%2C87%2C0%2C87&height=600" alt="" /></div> */}
                    </div>

                    <div className="hero-btn">
                        <button id='prev'>Prev</button>
                        <button id='next'>Next</button>
                    </div>
                </div>

                <div className="homepage-card">
                    <div className='homepage-img'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXFYKnonHX-UeffOe78zhDTrcsNBzvoeIPSQ&usqp=CAU" alt="" />
                    </div>

                    <div className='homepage-contents'>
                        <h3>Lorem</h3>
                        <p>Deliciously baked</p>
                        <Likes />
                    </div>
                </div>

                <hr />

                <div className="homepage-card">
                    <div className='homepage-img'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3luXY0a7XXovDIyfmzZ9GaK8YnmmYDw-kfLwooNNfgcSNggAFodY41TiApq5JKjkgNCQ&usqp=CAU" alt="" />
                    </div>

                    <div className='homepage-contents'>
                        <h3>Lorem</h3>
                        <p>Deliciously baked</p>
                        {/* <span>To get recipies, click here </span> */}
                    </div>
                </div>

                <hr />

                <div className="homepage-card">
                    <div className='homepage-img'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFNrz6ijcYSs_oOLpt627pW13lsHVuuLk8g&usqp=CAU" alt="" />
                    </div>

                    <div className='homepage-contents'>
                        <h3>Lorem</h3>
                        <p>Deliciously baked</p>
                        {/* <span>To get recipies, click here </span> */}
                    </div>
                </div>

                <hr />

                <div className="homepage-card">
                    <div className='homepage-img'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgSGYXW1uB18G_8qiuEgkt5-QtH-Ujcg3T_54EPCmXVmyBTrIYe963CE-yz1feaJSLUg&usqp=CAU" alt="" />
                    </div>

                    <div className='homepage-contents'>
                        <h3>Lorem</h3>
                        <p>Deliciously baked</p>
                        {/* <span>To get recipies, click here </span> */}
                    </div>
                </div>

                <hr />

                <div className="homepage-card">
                    <div className='homepage-img'>
                        <img src="data:image/jpeg;base64,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" alt="" />
                    </div>

                    <div className='homepage-contents'>
                        <h3>Lorem</h3>
                        <p>Deliciously baked</p>
                        {/* <span>To get recipies, click here </span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;