import LeftSection from './SubComponents/FooterLeft';
import Right from './SubComponents/FooterRight';

const FooterTop = (props) => {
    return (
        <div className="footer_top_wrapper chilldren-gap-top">
            <div className="uparzon-container-fluid">
            <div className="row .no-gutters">
                    <LeftSection />
                    <Right/>
            </div>
            </div>
        </div>
     );
}
 
export default FooterTop;