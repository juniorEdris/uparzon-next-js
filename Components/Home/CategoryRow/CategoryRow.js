import Link from 'next/link';
import Image from 'next/image';
import Styles from '../../../styles/Home.module.css';

const CategoryRow = (props) => {
  const products = [
    {
      id: 1,
      name: 'Computer and Desktop Accessories',
      photo: 'pc.png',
      discount: 7,
    },
    {
      id: 2,
      name: 'Computer and Desktop Accessories',
      photo: 'watch.png',
      discount: 7,
    },
    {
      id: 3,
      name: 'Computer and Desktop Accessories',
      photo: 'game.png',
      discount: 7,
    },
    {
      id: 4,
      name: 'Computer and Desktop Accessories',
      photo: 'mobile.png',
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
            {/* p-0 pr-3 */}
            <Link href={''}>
              <a>
                <div
                  className={`${Styles.single_category_box} d-flex `}
                  key={product.id}>
                  <div className={Styles.category_image}>
                    <Image
                      src={`/assets/images/categoryproducts/${product.photo}`}
                      alt={product.name}
                      height={191}
                      width={191}
                      priority
                    />
                  </div>
                  <div className={Styles.category_details}>
                    <div className={Styles.category_name}>
                      <span>{product.name}</span>
                    </div>
                    <div className={Styles.category_btn}>
                      <Link href="#">
                        <a>shop now</a>
                      </Link>
                    </div>
                    {/* <div className={`${Styles.category_discount} d-flex `}>
                      <div
                        className={`${Styles.discount_text} d-flex flex-column`}>
                        <span>Up</span>
                        <span>to</span>
                      </div>
                      <div className={`${Styles.discount_number}`}>7%</div>
                    </div> */}
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
