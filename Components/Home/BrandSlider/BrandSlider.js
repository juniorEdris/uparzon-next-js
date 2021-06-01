import OwlCarousel from 'react-owl-carousel';
import Styles from '../../../styles/Home.module.css';

const BrandSlider = (props) => {
  const brands = [
    {
      id: 1,
      photo: 'assets/images/brands/01.png',
    },
    {
      id: 2,
      photo: 'assets/images/brands/02.png',
    },
    {
      id: 3,
      photo: 'assets/images/brands/03.png',
    },
    {
      id: 4,
      photo: 'assets/images/brands/04.png',
    },
    {
      id: 6,
      photo: 'assets/images/brands/06.png',
    },
    {
      id: 7,
      photo: 'assets/images/brands/06.png',
    },
  ];
  return (
    <div className={`${Styles.brand_slider_wrapper} section-gap-bottom`}>
      <OwlCarousel
        className="owl-theme"
        loop
        nav
        autoPlay
        navSpeed={1000}
        margin={10}
        items={6}
        dots={false}>
        {brands.map((brand) => (
          <div className={Styles.single_brand} key={brand.id}>
            <img src={brand.photo} alt="brand image" />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default BrandSlider;
