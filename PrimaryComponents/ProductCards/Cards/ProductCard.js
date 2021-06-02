import Link from 'next/link';
import Image from 'next/image';
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
                  <Image
                    src={`https:${props.product?.photo}`}
                    alt="1st image"
                    height={'187px'}
                    width={'187px'}
                    objectFit="contain"
                    priority
                  />
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
                    <Image
                      src="/assets/svg/icons/Icon-star.svg"
                      alt=""
                      height={15}
                      width={15}
                      priority
                    />
                  ))}
              </div>
              <div className="product_price">
                <p>&#2547; {props.product?.price}</p>
              </div>
            </div>
            <div className="addTocart_btn">
              <a href="">
                <Image
                  src="/assets/svg/icons/cart-arrow-down.svg"
                  alt="cart icons"
                  height={30}
                  width={30}
                  priority
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
