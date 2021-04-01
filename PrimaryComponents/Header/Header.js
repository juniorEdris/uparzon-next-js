import Styles from '../../styles/Header.module.css';
import HeaderButtons from './Components/HeaderButtons';
import Logo from './Components/Logo';
import Search from './Components/Search';
const Header = (props) => {
  return (
    <div className={`${Styles.header_wrapper}  row no-gutters`}>
      <Logo />
      <Search />
      <HeaderButtons />
    </div>
  );
};

export default Header;
