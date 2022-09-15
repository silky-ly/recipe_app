import React from 'react'


const DisplayAbout = ({ about }) => {
    return (
        <div className='about_card'>
            <img src={ about.image } alt="img" />
            <div className="about_content">
                <h4 className='about_name'>{ about.name }</h4>
                <p className='about_description'>{ about.description}</p>
            </div>
        </div>
    )
}

export default DisplayAbout
