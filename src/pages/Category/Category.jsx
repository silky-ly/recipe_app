import { Link } from 'react-router-dom';


const Category = () => {
    return ( 
        <div className='category-menu'>
            <div className="category-links">
                <h1>categories</h1>
                <div className='category-lists'>
                    <Link to='/cocktails' exact> 
                        <div className="category-card">
                            <img src="/images/mint-and-lime-cocktail.jpg" alt="" />
                            <div className="overlay"></div>
                            <h2>Cocktails</h2>
                        </div>
                    </Link>
                    
                    <Link to='/desserts' exact> 
                        <div className="category-card">
                            <img src="/images/dessert-four.jpg" alt="" />
                            <div className="overlay"></div>
                            <h2>Desserts</h2>
                        </div>
                    </Link>
                </div>

                <div className='category-lists'>
                    <Link to='/desserts' exact> 
                        <div className="category-card">
                            <img src="/images/cocktail-gin-rickey.jpg" alt="" />
                            <div className="overlay"></div>
                            <h2>Drinks</h2>
                        </div>
                    </Link>

                    <Link to='/locals' exact> 
                        <div className="category-card">
                            <img src="/images/ofada-two.jpg" alt="" />
                            <div className="overlay"></div>
                            <h2>Local Meals</h2>
                        </div>
                    </Link>
                </div>
                
                <div className='category-lists'>
                    <Link to='/vegans' exact> 
                        <div className="category-card">
                            <img src="/images/vegan-one.jpg" alt="" />
                            <div className="overlay"></div>
                            <h2>Vegan Meals</h2>
                        </div>
                    </Link>

                    <Link to='/wholemeals' exact> 
                        <div className="category-card">
                            <img src="/images/whole-one.jpg" alt="" />
                            <div className="overlay"></div>
                            <h2>Whole Meals</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Category;