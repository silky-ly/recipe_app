import React,{ useState, useEffect } from 'react';
import { FaRegHeart } from "react-icons/fa"

const Likes = () => {
    const [like, setLike] = useState(''); 

    useEffect(() => {
    }, [like]);

    const handleClick = () => {
      setLike(!like);
    };

    return (
        <div>
          <button
           className="like-btn"
              
              onClick={handleClick}>
                {like ? (
                <FaRegHeart style={{ backgroundColor: "red" }} />
            )  : like}

          <FaRegHeart
           className="like-icon"
          />
            </button>
         </div> 
    )
}
export default Likes;