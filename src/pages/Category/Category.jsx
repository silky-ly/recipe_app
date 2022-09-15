import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';


const Category = () => {
    return ( 
        <Layout>
            <div className='category'>
                <div className="category_heading">
                    <div className="category_line"></div>
                    <h1 className="category_title">categories</h1>
                </div>

                <div className="category_links">
                    <div className="category_card">
                        <img src="/images/mint-and-lime-cocktail.jpg" alt="" />
                        <div className="overlay"></div>
                        <Link to='/cocktails' exact> 
                            <h2>Cocktails</h2>
                        </Link>
                    </div>
                
                    <div className="category_card">
                        <img src="/images/dessert-four.jpg" alt="" />
                        <div className="overlay"></div>
                        <Link to='/desserts' exact>
                            <h2>Desserts</h2>
                        </Link>
                    </div>
                         
                    <div className="category_card">
                        <img src="/images/cocktail-gin-rickey.jpg" alt="" />
                        <div className="overlay"></div>
                        <Link to='/desserts' exact>
                            <h2>Drinks</h2>
                        </Link>
                    </div>
                         
                    <div className="category_card">
                        <img src="/images/vegan-one.jpg" alt="" />
                        <div className="overlay"></div>
                        <Link to='/vegans' exact>
                            <h2>Vegan Meals</h2>
                        </Link>
                    </div>
                
                    <div className="category_card">
                        <img src="/images/whole-one.jpg" alt="" />
                        <div className="overlay"></div>
                        <Link to='/wholemeals' exact>
                            <h2>Whole Meals</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Category;