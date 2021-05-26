import SectionHeaderOne from '../../../PrimaryComponents/SectionHeaders/SectionHeaderOne';
import Styles from '../../../styles/Home.module.css';
const HomeTabProducts = (props) => {
  return (
    <div className={`${Styles.HomeTabProducts} section-gap-top`}>
      <SectionHeaderOne />
    </div>
  );
};

export default HomeTabProducts;
