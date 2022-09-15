import Product from './Product';
import Layout from '../../components/Layout'
import desserts from '../../data/desserts';

const Desserts = () => {
	return (
        <Layout>
            <div className="dessert">
                <div className="dessert_heading">
                    <div className="dessert_line"></div>
				    <h3 className="dessert_title">Desserts</h3>
                </div>

				<div className="dessert_gallery">
					{desserts.map(dessert => (
						<Product key={dessert._id} dessert={dessert} />
					))}
				</div>
			</div>
        </Layout>
	);
};

export default Desserts;
