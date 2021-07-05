import React from 'react'
import { Link } from 'react-router-dom';
import locals from '../../data/local';


const LocalScreen = ({ match }) => {

    const product = locals.find(p => p._id === match.params.id);

    return (
        <>
            <Link className='productpage-btn' to='/'>
            Go back
            </Link>

            <div className="productpage-container">
                <div className="productpage-card">
                    <div className="productpage-image">
                        <img src={ product.image } alt="" />
                    </div> 

                    <div className="productpage-name">
                        <h3>{ product.name }</h3>
                    </div>

                    <div className="productpage-description">                        
                        <h4>Mode of Preparation</h4>
                        <div>
                            { product.preparation.map((step, id) => (
                                <p key={ id }>{ step }</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LocalScreen