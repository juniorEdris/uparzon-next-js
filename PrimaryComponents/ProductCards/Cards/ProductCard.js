import Link from 'next/link';
import { Truncate } from '../../Utility';

const ProductCard = (props) => {
  return (
    <div className="col-6 col-md-4 col-xl-2 mb-3 col-xxl-1 pr-md-2 pl-md-2">
      <div className={'product_card_wrapper '}>
        <div className="single_product_card">
          <div className="product_body">
            <div className="product_image">
              <Link href="/productdetails/2">
                <a>
                  <img
                    src={`https:${props.product?.photo?.replace(
                      'demostore',
                      'store'
                    )}`}
                    alt="1st image"
                  />
                  {/* <img src="/assets/images/products/01.png" alt="1st image" /> */}
                </a>
              </Link>
            </div>

            <div className="product_name">
              <Link href="">
                <a>
                  {/* <p>Lorem ipsum dolor sit amet consectetur </p> */}
                  <p>{Truncate(props.product?.name, 30)}</p>
                </a>
              </Link>
            </div>
          </div>
          <div className="product_card_footer d-flex align-items-center justify-content-between pb-0">
            <div className="product_rates_price">
              <div className="product_rating d-flex mb-2 mt-2">
                {Array(5)
                  .fill()
                  .map((e) => (
                    <img src="/assets/svg/icons/Icon-star.svg" alt="" />
                  ))}
              </div>
              <div className="product_price">
                <p>&#2547; {props.product?.price}</p>
              </div>
            </div>
            <div className="addTocart_btn">
              <a href="">
                <img
                  src="/assets/svg/icons/cart-arrow-down.svg"
                  alt="cart icons"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
