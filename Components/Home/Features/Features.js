import Styles from '../../../styles/Home.module.css';

const Features = (props) => {
  return (
    <div className={`${Styles.features_wrapper}`}>
      <div className="row ">
        <div className="col-6 col-lg-3 p-1">
          <div
            className={`${Styles.single_feature} d-flex justify-content-center align-items-center`}>
            <div className={Styles.feature_icon}>
              <img
                src="assets/svg/icons/shipping-fast.svg"
                alt="fast shipping"
              />
            </div>
            <div className={Styles.feature_text}>
              <h3>Free Shipping</h3>
              <span>free shipping on all us order</span>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3 p-1">
          <div
            className={`${Styles.single_feature} d-flex justify-content-center align-items-center`}>
            <div className={Styles.feature_icon}>
              <img src="assets/svg/icons/phone-call.svg" alt="fast shipping" />
            </div>
            <div className={Styles.feature_text}>
              <h3>Free Shipping</h3>
              <span>free shipping on all us order</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-lg-3 p-1">
          <div
            className={`${Styles.single_feature} d-flex justify-content-center align-items-center`}>
            <div className={Styles.feature_icon}>
              <img
                src="assets/svg/icons/hourglass-full.svg"
                alt="fast shipping"
              />
            </div>
            <div className={Styles.feature_text}>
              <h3>Free Shipping</h3>
              <span>free shipping on all us order</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-lg-3 p-1">
          <div
            className={`${Styles.single_feature} d-flex justify-content-center align-items-center`}>
            <div className={Styles.feature_icon}>
              <img
                src="assets/svg/icons/simple-f-secure.svg"
                alt="fast shipping"
              />
            </div>
            <div className={Styles.feature_text}>
              <h3>Free Shipping</h3>
              <span>free shipping on all us order</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
