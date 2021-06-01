import SidebarListOne from '../../PrimaryComponents/Utility/SidebarListOne';
import Image from 'next/image';
import ListCard from '../../PrimaryComponents/ProductCards/ListCard/ListCard';

const ProductDetailsSidebar = (props) => {
  const categories = [
    {
      id: 1,
      name: 'clothing & apparel',
    },
    {
      id: 2,
      name: 'garden & kitchen',
    },
    {
      id: 1,
      name: 'consumer electrics',
    },
    {
      id: 3,
      name: 'health & beauty ',
    },
    {
      id: 4,
      name: 'computers & technology',
    },
    {
      id: 5,
      name: 'jwelerry & watches',
    },
    {
      id: 6,
      name: 'phone & Accessories',
    },
  ];
  return (
    <div className={`chilldren-gap-top col-md-4 col-xl-3 d-md-block d-none`}>
      <SidebarListOne lists={categories} listTitle={'Categories'} />
      <div className="col=12">
        <img
          src="/assets/images/banners/productdetails/banner-1.png"
          alt="details ad"
        />
      </div>
      <div className="col-12 chilldren-gap-top chilldren-gap-bottom">
        <ListCard title={'Latest Products'} fullWidth />
      </div>
    </div>
  );
};

export default ProductDetailsSidebar;
