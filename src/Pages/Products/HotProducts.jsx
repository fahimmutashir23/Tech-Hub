

import ProductsCard from './ProductsCard';
import UseProducts from '../../Hooks/UseProducts';

const HotProducts = () => {

    // eslint-disable-next-line no-undef
    const [products] = UseProducts();
    const hotproduct = products.filter(product => product.category === 'hotproduct');

   
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-2 p-6">
                    {
                      hotproduct.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                    }
                  
                </div>
        </div>
    );
};

export default HotProducts;