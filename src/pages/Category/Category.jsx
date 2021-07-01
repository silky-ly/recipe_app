import Menu from "../../components/HamburgerMenu";
import { Link } from 'react-router-dom';


const Category = () => {
    return ( 
        <div>
            <Menu />
            <div className="category-links">
                <h1>categories</h1>
                <div className='category-lists'>
                    <Link to='/cocktails'> 
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ghk-savor-cocktails-classicdaquiri-868-1564679205.jpg?crop=0.696xw:0.694xh;0.145xw,0.257xh&resize=480:*" alt="" />
                        <div className="overlay"></div>
                        <h2>Cocktails</h2>
                    </Link>
                </div>
                
                <div className='category-lists'>
                    <Link to='/desserts' exact> 
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLd0pxz0uv4yMUcK_TLiWHECNifX3X1gEPAQ&usqp=CAU" alt="" />
                        <div className="overlay"></div>
                        <h2>Desserts</h2>
                    </Link>
                </div>

                <div className='category-lists'>
                    <Link to='/local'> 
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLd0pxz0uv4yMUcK_TLiWHECNifX3X1gEPAQ&usqp=CAU" alt="" />
                        <div className="overlay"></div>
                        <h2>Local</h2>
                    </Link>
                </div>

                <div className='category-lists'>
                    <Link to='/vegan'> 
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLd0pxz0uv4yMUcK_TLiWHECNifX3X1gEPAQ&usqp=CAU" alt="" />
                        <div className="overlay"></div>
                        <h2>Vegan</h2>
                    </Link>
                </div>

                <div className='category-lists'>
                    <Link to='/desserts'> 
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLd0pxz0uv4yMUcK_TLiWHECNifX3X1gEPAQ&usqp=CAU" alt="" />
                        <div className="overlay"></div>
                        <div className="overlay"></div>
                        <h2>Veggies</h2>
                    </Link>
                </div>

                <div className='category-lists'>
                    <Link to='/vegan'> 
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLd0pxz0uv4yMUcK_TLiWHECNifX3X1gEPAQ&usqp=CAU" alt="" />
                        <div className="overlay"></div>
                        <h2>Whole Meals</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Category;