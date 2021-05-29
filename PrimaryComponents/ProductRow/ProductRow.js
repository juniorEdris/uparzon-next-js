import image from 'next/image';
import ProductCard from '../ProductCards/Cards/ProductCard';
import SectionHeaderTwo from '../SectionHeaders/SectionHeaderTwo';

const ProductRow = (props) => {
    return (<div className="">
        <SectionHeaderTwo section_title={ props.title}/>
            <div className={`d-flex flex-wrap `}>
                <div className={`row_single_banner col-12 col-md-2 p-0 mb-2`}>
                    <img src={props.imgPath} alt={props.title} />
                </div>
                <div className="product_row d-flex flex-wrap col-10">
                    {Array(6).fill().map(e => (
                        <ProductCard />
                    ))}
                </div>
            </div>
    </div> );
}
 
export default ProductRow;