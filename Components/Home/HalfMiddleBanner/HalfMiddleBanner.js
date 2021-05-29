import HomeWideBanner from '../../../PrimaryComponents/HomeWideBanner/HomeWideBanner';
import Styles from '../../../styles/Home.module.css'
const HalfMiddleBanner = (props) => {
    return (<div className={`${Styles.half_middle_banner} section-gap-top`}>
        <HomeWideBanner/>
    </div> );
}
 
export default HalfMiddleBanner