import Styles from '../../../styles/Header.module.css';

const HeaderButtons = () => {
  return (
    <div className={`${Styles.header_buttons} col-md-3 col-12`}>
      <div className={`${Styles.header_icon} ${Styles.compare}`}>
        <img src="/assets/svg/icons/compare.svg" alt="compare_icon" />
      </div>
      <div className={`${Styles.header_icon} ${Styles.wishlist}`}>
        <img src="/assets/svg/icons/wishlist.svg" alt="compare_icon" />
      </div>
      <div className={`${Styles.header_icon} ${Styles.cart}`}>
        <img src="/assets/svg/icons/shopping-cart.svg" alt="compare_icon" />
      </div>
      <div className={`${Styles.header_icon} ${Styles.user} `}>
        <img src="/assets/svg/icons/user.svg" alt="compare_icon" />
      </div>
    </div>
  );
};

export default HeaderButtons;
