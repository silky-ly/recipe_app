import React from 'react'
import Layout from '../../components/Layout'
import DisplayCocktails from './DisplayCocktails'
import cocktails from "../../data/cocktails"


const Cocktails = () => {
    return (
        <Layout>
            <div className="cocktails">
                <div className="cocktails_heading">
                    <div className="cocktails_line"></div>
                    <h3 className="cocktails_title">Cocktails</h3>
                </div>
                
                <div className="cocktails_gallery">
                    {cocktails.map((cocktail) => (
                            <DisplayCocktails key={ cocktail._id } cocktail={ cocktail } />
                        ))}
                </div>
            </div>
        </Layout>
    )
}

export default Cocktails
