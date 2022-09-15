import React from 'react'

const Ratings = ({ value, text, color }) => {
    return (
        <div className='rating'>
            <span>
                <i style={{ color }} className={value >= 1 ? 'fas fa-star fa-lg' : value>= 0.5 ? 'fas fa-star-half-alt fa-lg' : 'far fa-star fa-lg'}></i>
                <i style={{ color }} className={value >= 2 ? 'fas fa-star fa-lg' : value>= 1.5 ? 'fas fa-star-half-alt fa-lg' : 'far fa-star fa-lg'}></i>
                <i style={{ color }} className={value >= 3 ? 'fas fa-star fa-lg' : value>= 2.5 ? 'fas fa-star-half-alt fa-lg' : 'far fa-star fa-lg'}></i>
                <i style={{ color }} className={value >= 4 ? 'fas fa-star fa-lg' : value>= 3.5 ? 'fas fa-star-half-alt fa-lg' : 'far fa-star fa-lg'}></i>
                <i style={{ color }} className={value >= 5 ? 'fas fa-star fa-lg' : value>= 4.5 ? 'fas fa-star-half-alt fa-lg' : 'far fa-star fa-lg'}></i>
            </span>

            <span>{text && text}</span>
        </div>
    )
}

Ratings.defaultProps = {
    color: '#ffba08'
}

export default Ratings