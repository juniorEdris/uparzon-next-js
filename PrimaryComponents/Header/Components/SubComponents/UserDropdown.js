import Link from 'next/link';
import Styles from '../../../../styles/Header.module.css';

const UserDropdown = () => {
  return (
    <div className={`${Styles.header_user_drop_down}`}>
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

export default UserDropdown;
