import Styles from '../../../styles/Header.module.css';
import Image from 'next/image';
const Logo = () => {
  return (
    <div className={`${Styles.header_logo} col-md-2 col-12`}>
      <Image
        src="/assets/svg/logo/logo.svg"
        alt="Picture of the author"
        width={150}
        height={50}
      />
    </div>
  );
};

export default Logo;
