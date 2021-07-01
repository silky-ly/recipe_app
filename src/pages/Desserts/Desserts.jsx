import Product from '../../components/Product'
import desserts from '../../desserts'

const Desserts = () => {
    return ( 
        <>
            <h3 className='dessert-title'>Desserts</h3>
            <div>
                {desserts.map((dessert) => (
                    <Product dessert= { dessert } />
                ))}
            </div>
        </>
    );
}

export default Desserts;
