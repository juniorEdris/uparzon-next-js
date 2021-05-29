import ProductCard from '../../../PrimaryComponents/ProductCards/Cards/ProductCard';
import SectionHeaderOne from '../../../PrimaryComponents/SectionHeaders/SectionHeaderOne';
import Styles from '../../../styles/Home.module.css';
const HomeTabProducts = (props) => {
  const products = [
    {
      id: 1,
      name: 'Computer and Desktop Accessories',
      photo: 'image1.png',
      discount: 7,
    },
    {
      id: 2,
      name: 'Computer and Desktop Accessories',
      photo: 'image2.png',
      discount: 7,
    },
    {
      id: 3,
      name: 'Computer and Desktop Accessories',
      photo: 'image3.png',
      discount: 7,
    },
    {
      id: 4,
      name: 'Computer and Desktop Accessories',
      photo: 'image4.png',
      discount: 7,
    },
  ];
  return (
    <div className={`${Styles.HomeTabProducts} section-gap-top`}>
      <SectionHeaderOne />
      <div className="col-12 d-flex flex-wrap p-0 chilldren-gap-top">
        {Array(12).fill().map(e => (
          <ProductCard />
        ))}
      </div>
    </div>
  );
};

export default HomeTabProducts;
