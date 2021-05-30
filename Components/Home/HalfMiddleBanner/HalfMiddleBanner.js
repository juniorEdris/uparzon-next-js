import HomeWideBanner from '../../../PrimaryComponents/HomeWideBanner/HomeWideBanner';
import Styles from '../../../styles/Home.module.css'
const HalfMiddleBanner = (props) => {
    return (<div className={`${Styles.half_middle_banner} section-gap-top`}>
        <HomeWideBanner imageone={"assets/images/banners/middle_banners/half-banner-1.png"} imagetwo={"assets/images/banners/middle_banners/half-banner-2.png" }/>
    </div> );
}
 
export default HalfMiddleBanner