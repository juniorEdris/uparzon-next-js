import Styles from '../../styles/ProductDetails.module.css';
import { useRouter } from 'next/router';
import ProductDetailsSidebar from '../../Components/ProductDetais/ProductDetailsSidebar';
import ProductDetailsBody from '../../Components/ProductDetais/ProductDetailsBody';
import BreadCrumbs from '../../PrimaryComponents/BreadCrumbs';
import Meta from '../../PrimaryComponents/Utility/Meta';
const ProductDetails = (props) => {
  const router = useRouter();
  const { id } = router.query;
  //   console.log(router);
  return (
    <div className="">
      <Meta />
      <div className="uparzon-container-fluid">
        <BreadCrumbs />
        <div className="row ">
          <ProductDetailsSidebar />
          <ProductDetailsBody />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
