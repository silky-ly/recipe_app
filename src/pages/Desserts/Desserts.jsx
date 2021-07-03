import Product from '../../components/Product'
import desserts from '../../desserts'


const Desserts = () => {
    return ( 
        <>
            <div className="dessert-container">
                <h3 className='dessert-title'>Desserts</h3>
                <div className='dessert-gallery'>
                    {desserts.map((dessert) => (
                        <Product key={ dessert._id } dessert={ dessert } />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Desserts;
