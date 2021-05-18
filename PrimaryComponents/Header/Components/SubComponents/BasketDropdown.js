import Link from 'next/link';
import Styles from '../../../../styles/Header.module.css';

const BasketDropdown = () => {
  return (
    <div className={`${Styles.header_basket_drop_down}`}>
      <ul>
        <li>
          <Link href="">
            <a>register</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>login</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BasketDropdown;
