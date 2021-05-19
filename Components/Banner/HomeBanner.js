import OwlCarousel from 'react-owl-carousel';
import Styles from '../../styles/Home.module.css';
const HomeBanner = (props) => {
  return (
    <div className={Styles.home_banner_wrapper}>
      <OwlCarousel className="owl-theme" loop margin={10} items={1} dots>
        <div className={Styles.single_banner_image}>
          <img src="assets/images/banners/01.png" alt="home banner" />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default HomeBanner;
