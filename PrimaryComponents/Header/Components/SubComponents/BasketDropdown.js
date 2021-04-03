import Link from 'next/link';
import Styles from '../../../../styles/Header.module.css';

const BasketDropdown = () => {
  return (
    <div className={`${Styles.header_basket_drop_down}}`}>
      <h1>cart list</h1>
    </div>
  );
};

export default BasketDropdown;
