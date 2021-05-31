import AllProducts from '../PrimaryComponents/AllProducts';
import BreadCrumbs from '../PrimaryComponents/BreadCrumbs';
import Meta from '../PrimaryComponents/Utility/Meta';
import Styles from '../styles/Shop.module.css'
const Shop = (props) => {
    return (
        <div className={Styles.shop_wrapper}>
            <Meta title={'Shop'}/>
            <BreadCrumbs/>
            <div className="uparzon-container-fluid">
                <AllProducts/>                    
            </div>
        </div>
     );
}
 
export default Shop;