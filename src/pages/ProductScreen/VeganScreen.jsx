import React from 'react'
import { Link } from 'react-router-dom';
import vegans from '../../data/vegan';


const VeganScreen = ({ match }) => {

    const product = vegans.find(p => p._id === match.params.id);

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
                        <h4>Ingredients</h4>
                        <div className='ingredients'>
                            { product.ingredients.map((step, id) => (
                                <p key={ id }>{step}</p>
                            ))}
                        </div>
                        
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

export default VeganScreen
