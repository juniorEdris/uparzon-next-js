import HomeWideBanner from '../../../PrimaryComponents/HomeWideBanner/HomeWideBanner';
import Styles from '../../../styles/Home.module.css';
const HalfMiddleBanner = (props) => {
  return (
    <div className={`${Styles.half_middle_banner} section-gap-top`}>
      <HomeWideBanner
        imageone={'half-banner-1_zjvxv0.png'}
        imagetwo={'half-banner-2_ujcahp.png'}
      />
    </div>
  );
};

export default HalfMiddleBanner;
