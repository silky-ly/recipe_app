import React from 'react'
import DisplayLocals from './DisplayLocals'
import locals from "../../data/local"


const Locals = () => {
    return (
        <>
            <div className="locals">
                <h3 className="locals-title">Local-Meals</h3>
                <div className="locals-gallery">
                    {locals.map((local) => (
                            <DisplayLocals key={ local._id } local={ local } />
                        ))}
                </div>
            </div>
        </>
    )
}

export default Locals