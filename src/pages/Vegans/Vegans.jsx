import React from 'react'
import DisplayVegans from './DisplayVegans'
import vegans from "../../data/vegan"



const Vegans = () => {
    return (
        <>
            <div className="vegans">
                <h3 className="vegans-title">Vegans</h3>
                <div className="vegans-gallery">
                    {vegans.map((vegan) => (
                            <DisplayVegans key={ vegan._id } vegan={ vegan } />
                        ))}
                </div>
            </div>
        </>
    )
}

export default Vegans