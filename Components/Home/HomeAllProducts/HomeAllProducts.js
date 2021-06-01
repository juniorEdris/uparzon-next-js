import ProductCard from '../../../PrimaryComponents/ProductCards/Cards/ProductCard';
import SectionHeaderThree from '../../../PrimaryComponents/SectionHeaders/SectionHeaderThree';
import Styles from '../../../styles/Home.module.css';

const HomeAllProducts = (props) => {
  return (
    <div className="section-gap-top">
      {/* <SectionHeaderThree title={'See All Products'}/> */}
      <div className="d-flex flex-wrap chilldren-gap-top">
        {props.data?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default HomeAllProducts;
