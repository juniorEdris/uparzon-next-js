import Link from 'next/link';

const ShopProductCards = (props) => {
  return (
    <div className={'product_card_wrapper '}>
      <div className="single_product_card">
        <div className="product_body">
          <div className="product_image">
            <Link href="/productdetails/2">
              <a>
                <img src="/assets/images/products/01.png" alt="1st image" />
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
                  <img src="/assets/svg/icons/Icon-star.svg" alt="" />
                ))}
            </div>
            <div className="product_price">
              <p>&#2547; 250</p>
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
  );
};

export default ShopProductCards;
