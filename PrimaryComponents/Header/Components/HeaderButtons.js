import Styles from '../../../styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import UserDropdown from './SubComponents/UserDropdown';
import { useState } from 'react';
import BasketDropdown from './SubComponents/BasketDropdown';

const HeaderButtons = () => {
  const [basketDropdown, setBasketDropdown] = useState(false);
  const [userCart, setUserCart] = useState(false);
  const openUserCart = (e) => {
    e.preventDefault();
    setUserCart(!userCart);
  };
  const basketList = (e) => {
    e.preventDefault();
    setBasketDropdown(!basketDropdown);
  };
  return (
    <div className={`${Styles.header_buttons} col-md-3 col-4`}>
      <div className={`${Styles.header_icon} ${Styles.header_compare}`}>
        <Link href="/compare">
          <a>
            <Image
              src="/assets/svg/icons/compare.svg"
              alt="compare_icon"
              height={'100%'}
              width={'100%'}
            />
          </a>
        </Link>
      </div>
      <div className={`${Styles.header_icon} ${Styles.header_wishlist}`}>
        <Link href="/whishlist">
          <a>
            <Image
              src="/assets/svg/icons/wishlist.svg"
              alt="wishlist_icon"
              height={'100%'}
              width={'100%'}
            />
            <span className={Styles.count}>{'0'}</span>
          </a>
        </Link>
      </div>
      <div className={`${Styles.header_icon} ${Styles.header_cart}`}>
        <a href={'#'} onClick={basketList}>
          <Image
            src="/assets/svg/icons/shopping-cart.svg"
            alt="cart_icon"
            height={'100%'}
            width={'100%'}
          />
          <span className={Styles.count}>{'0'}</span>
        </a>
        {basketDropdown && <BasketDropdown />}
      </div>
      <div className={`${Styles.header_icon} ${Styles.header_user} `}>
        <a href="#" onClick={openUserCart}>
          <Image
            src="/assets/svg/icons/user.svg"
            alt="user_icon"
            height={'100%'}
            width={'100%'}
          />
        </a>
        {userCart && <UserDropdown />}
      </div>
      {/* {<BasketDropdown />} */}
    </div>
  );
};

export default HeaderButtons;
