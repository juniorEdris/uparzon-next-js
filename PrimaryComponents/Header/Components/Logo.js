import Styles from '../../../styles/Header.module.css';
import Link from 'next/link';
const Logo = () => {
  return (
    <div className={`${Styles.header_logo} col-md-2 col-4`}>
      <Link href="/" className="">
        <a className="">
          <img
            src="/assets/svg/logo/logo.svg"
            alt="Picture of the author"
            width={150}
            height={50}
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
