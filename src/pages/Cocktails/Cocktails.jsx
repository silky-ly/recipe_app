import React from 'react'
import DisplayCocktails from './DisplayCocktails'
import cocktails from "../../data/cocktails"


const Cocktails = () => {
    return (
        <>
            <div className="cocktails">
                <h3 className="cocktails-title">Cocktails</h3>
                <div className="cocktails-gallery">
                    {cocktails.map((cocktail) => (
                            <DisplayCocktails key={ cocktail._id } cocktail={ cocktail } />
                        ))}
                </div>
            </div>
        </>
    )
}

export default Cocktails
