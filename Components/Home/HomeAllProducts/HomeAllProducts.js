import ProductCard from '../../../PrimaryComponents/ProductCards/Cards/ProductCard'
import Styles from '../../../styles/Home.module.css'

const HomeAllProducts = (props) => {
    return (
        <div className="section-gap-top">
            {/* <div className={`${Styles.all_product_header} text-center`}>
                <span className={`p-0`}>Lorem ipsum dolor sit amet.</span>
            </div> */}
            <div className="d-flex flex-wrap chilldren-gap-top">
            {Array(18).fill().map(e => (
                <ProductCard/>
                
                ))}
            </div>
        </div>
     );
}
 
export default HomeAllProducts;