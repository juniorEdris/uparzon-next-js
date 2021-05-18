import Styles from '../../styles/Header.module.css';
import HeaderButtons from './Components/HeaderButtons';
import Logo from './Components/Logo';
import Search from './Components/Search';
import NavLinks from './Components/SubComponents/NavLinks';
import ResponsiveSearch from './Components/SubComponents/ResponsiveSearch';
const Header = (props) => {
  return (
    <div className="">
      <div className={`${Styles.header_wrapper}  row no-gutters`}>
        <Logo />
        <Search />
        <ResponsiveSearch />
        <HeaderButtons />
      </div>
      <NavLinks />
    </div>
  );
};

export default Header;
