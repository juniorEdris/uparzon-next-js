import Link from 'next/link';
import Styles from '../../../styles/Home.module.css';

export const CategoryRow = (props) => {
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
    <div>
      <div className={`${Styles.category_row_wrapper} d-flex flex-wrap`}>
        {products.map((product) => (
          <div
            className={`${Styles.single_category_wrapper} col-6 col-md-4 col-lg-3 p-1`}
            key={product.id}>
            <Link href={''}>
              <a>
                <div
                  className={`${Styles.single_category_box} d-flex  shadow-sm`}
                  key={product.id}>
                  <div className={Styles.category_image}>
                    <img
                      src={`assets/images/categoryProducts/${product.photo}`}
                      alt={product.name}
                    />
                  </div>
                  <div className={Styles.category_details}>
                    <div className={Styles.category_name}>
                      <span>{product.name}</span>
                    </div>
                    {/* <div className={Styles.category_btn}>
                  <Link href="#">
                    <a>shop now</a>
                  </Link>
                </div> */}
                    <div className={`${Styles.category_discount} d-flex `}>
                      <div
                        className={`${Styles.discount_text} d-flex flex-column`}>
                        <span>Up</span>
                        <span>to</span>
                      </div>
                      <div className={`${Styles.discount_number}`}>7%</div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default CategoryRow;
