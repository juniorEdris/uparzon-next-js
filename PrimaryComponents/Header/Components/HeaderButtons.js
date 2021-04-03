import Styles from '../../../styles/Header.module.css';
import Link from 'next/link';

const HeaderButtons = () => {
  return (
    <div className={`${Styles.header_buttons} col-md-3 col-12`}>
      <div className={`${Styles.header_icon} ${Styles.compare}`}>
        <Link href="/ddd">
          <a>
            <img src="/assets/svg/icons/compare.svg" alt="compare_icon" />
          </a>
        </Link>
      </div>
      <div className={`${Styles.header_icon} ${Styles.wishlist}`}>
        <Link href="#">
          <a>
            <img src="/assets/svg/icons/wishlist.svg" alt="compare_icon" />
          </a>
        </Link>
      </div>
      <div className={`${Styles.header_icon} ${Styles.cart}`}>
        <Link href="#">
          <a>
            <img src="/assets/svg/icons/shopping-cart.svg" alt="compare_icon" />
          </a>
        </Link>
      </div>
      <div className={`${Styles.header_icon} ${Styles.user} `}>
        <Link href="#">
          <a>
            <img src="/assets/svg/icons/user.svg" alt="compare_icon" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HeaderButtons;
