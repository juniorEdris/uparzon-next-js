import ProductRow from '../../../PrimaryComponents/ProductRow/ProductRow';

const PCAccessories = (props) => {
  return (
    <div className="pc_accessories section-gap-top">
      <ProductRow
        title={'PC Accessories'}
        imgPath={
          '/assets/images/ProductSections/headings/pc_accessories_row_banner.png'
        }
        data={props.data}
      />
    </div>
  );
};

export default PCAccessories;
