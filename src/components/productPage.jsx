import React from 'react'
import { Link } from 'react-router-dom';
import desserts from '../desserts';


const productPage = ({ match }) => {

    const product = desserts.find(p => p._id === match.params.id);

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
                        <ol className='ingredients'>
                            { product.ingredients.map((step, id) => (
                                <li key={id}>{step}</li>
                            ))}
                        </ol>
                        <h4>Mode of Preparation</h4>
                        <ol>
                            { product.preparation.map((step, id) => (
                                <li key={id}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default productPage
