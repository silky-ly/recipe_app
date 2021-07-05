import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa"

const colors = ['white', 'red']

const Likes = () => {
    const [colorIn, setColorIn] = useState(0); 

    const handleClick = () => {
      const newColorIn = colorIn + 1;
      if (colors[newColorIn])
          setColorIn(newColorIn);

      else 
      setColorIn(0);
    } 

    return (
        <div>
          <button className="like-btn">
                <FaHeart style={{ color: colors[colorIn],  width: "15px", height: "15px"}} onClick={handleClick} />
          </button>
        </div> 
    )
}

export default Likes;