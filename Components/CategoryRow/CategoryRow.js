import Link from 'next/link';
import Styles from '../../styles/Home.module.css';

export const CategoryRow = (props) => {
  const products = [
    {
      id: 1,
      name: 'Computer and Desktop Accessories',
      photo: 'image1.jpg',
      discount: 7,
    },
    {
      id: 2,
      name: 'Computer and Desktop Accessories',
      photo: 'image2.jpg',
      discount: 7,
    },
    {
      id: 3,
      name: 'Computer and Desktop Accessories',
      photo: 'image3.jpg',
      discount: 7,
    },
    {
      id: 4,
      name: 'Computer and Desktop Accessories',
      photo: 'image4.jpg',
      discount: 7,
    },
  ];
  return (
    <div>
      <div className={`${Styles.category_row_wrapper} d-flex flex-wrap col-12`}>
        {products.map((product) => (
          <div className="col-6 col-md-3 p-1" key={product.id}>
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
                <div className={Styles.category_btn}>
                  <Link href="#">
                    <a>shop now</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default CategoryRow;
