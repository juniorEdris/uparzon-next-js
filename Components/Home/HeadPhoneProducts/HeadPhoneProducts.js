import ProductCard from '../../../PrimaryComponents/ProductCards/Cards/ProductCard';
import ProductRow from '../../../PrimaryComponents/ProductRow/ProductRow';
import SectionHeaderTwo from '../../../PrimaryComponents/SectionHeaders/SectionHeaderTwo';
import Styles from '../../../styles/Home.module.css';

const HeadPhoneProducts = (props) => {
  const product = [
    {
      id: 1,
      photo: '',
      name: '',
    },
  ];
  return (
    <div className={`${Styles.head_phone_wrapper} col-12 section-gap-top`}>
      <ProductRow
        title={'Headphones'}
        imgPath={'/assets/images/ProductSections/headings/phone_row_banner.png'}
        data={props.data}
      />
    </div>
  );
};

export default HeadPhoneProducts;
