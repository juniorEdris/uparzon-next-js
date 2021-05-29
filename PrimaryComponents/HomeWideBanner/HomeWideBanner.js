const HomeWideBanner = (props) => {
    return (
        <div className="home_wide_banners">
            {props.fullWidth ? <div className="full_width_banner w-100">
                <img src="assets/images/banners/middle_banners/full-banner-1.png" alt="" />
            </div> :
                <div className="half_width_banner w-100 d-flex">
                    <div className="col-6">
                        <img src="assets/images/banners/middle_banners/half-banner-1.png" alt="" />
                    </div>
                    <div className="col-6">
                        <img src="assets/images/banners/middle_banners/half-banner-2.png" alt="" />
                    </div>
                    
            </div>
            }
        </div>
     );
}
 
export default HomeWideBanner;