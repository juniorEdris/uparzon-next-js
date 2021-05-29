import Styles from '../../../styles/Home.module.css'
import SectionHeaderTwo from '../../SectionHeaders/SectionHeaderTwo';
const ListCard = (props) => {
    return (
        <div className="product_list col-3 ">
            <SectionHeaderTwo section_title={props.title}/>
            <div className="">
            {Array(4).fill().map(e => (
            
                <div className={`${Styles.home_product_list_wrapper} col mb-3`}>
            <div className="d-flex flex-row">
                
            
            <div className={`${Styles.list_product_image}`}>
                <img src="assets/images/products/01.png" alt="image" />
            </div>
            <div className="list_product_body">
                <div className="list_product_name">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className={`${Styles.list_product_rating } d-flex`}>
                    {Array(5).fill().map(e => (
                        <img src="/assets/svg/icons/Icon-star.svg" alt="" />
                        )) }
                </div>
                <div className={`${Styles.list_product_price } d-flex`}>
                    <p>&#2547; 250</p>
                </div></div>
            </div>
            </div>
        ))}
        </div>
    </div>
     );
}
 
export default ListCard;