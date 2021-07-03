import React from 'react'


const DisplayAbout = ({ about }) => {
    return (
        <div>
            <div className='aboutus-card'>
                <img src={ about.image } alt="img" />
                <div className="aboutus-contents">
                    <h4 className='aboutus-name'>{ about.name }</h4>
                    <p className='aboutus-description'>{ about.description}</p>
                </div>
            </div>
        </div>
    )
}

export default DisplayAbout
