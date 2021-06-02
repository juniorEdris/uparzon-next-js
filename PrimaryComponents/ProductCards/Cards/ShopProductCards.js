import Link from 'next/link';
import Image from 'next/image';

const ShopProductCards = (props) => {
  return (
    <div className={'product_card_wrapper '}>
      <div className="single_product_card">
        <div className="product_body">
          <div className="product_image">
            <Link href="/productdetails/2">
              <a>
                <Image
                  src="/assets/images/products/01.png"
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
                <p>Lorem ipsum dolor sit amet consectetur </p>
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
                  />
                ))}
            </div>
            <div className="product_price">
              <p>&#2547; 250</p>
            </div>
          </div>
          <div className="addTocart_btn">
            <a href="">
              <Image
                src="/assets/svg/icons/cart-arrow-down.svg"
                alt="cart icons"
                height={30}
                width={30}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProductCards;
