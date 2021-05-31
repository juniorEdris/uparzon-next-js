import ProductsBody from './SubComponents/Body'
import ProductsSidebar from './SubComponents/ProductsSidebar';

const AllProducts = (props) => {
    return (
        <div className="row">
            <ProductsSidebar/>
            <ProductsBody/>
        </div>
     );
}
 
export default AllProducts;