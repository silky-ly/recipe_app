import React from 'react'
import DisplayVegans from './DisplayVegans'
import vegans from "../../data/vegan"
import Layout from '../../components/Layout'



const Vegans = () => {
    return (
        <Layout>
            <div className="vegan">
                <div className="vegan_heading">
                    <div className="vegan_line"></div>
                    <h3 className="vegan_title">Vegan</h3>
                </div>

                <div className="vegan_gallery">
                    {vegans.map((vegan) => (
                            <DisplayVegans key={ vegan._id } vegan={ vegan } />
                        ))}
                </div>
            </div>
        </Layout>
    )
}

export default Vegans