import ProductCard from '../ProductCards/Cards/ProductCard';
import SectionHeaderTwo from '../SectionHeaders/SectionHeaderTwo';
import Image from 'next/image';

const ProductRow = (props) => {
  return (
    <div className="">
      <SectionHeaderTwo section_title={props.title} />
      <div className={`d-flex flex-wrap `}>
        <div
          className={`row_single_banner  col-6 col-md-4 col-xl-2 mb-3 col-xxl-1 pr-md-2 pl-md-2`}>
          {' '}
          {/*col-12 col-md-2  mb-2 */}
          <Image
            src={props.imgPath}
            alt={props.title}
            width={271}
            height={317}
            priority
            objectFit="cover"
          />
        </div>
        {/* <div className="product_row d-flex flex-wrap p-0 col-md-10"> */}
        {props.data?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProductRow;
