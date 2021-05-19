import Styles from '../../styles/Home.module.css';

const Features = (props) => {
  return (
    <div className={`${Styles.features_wrapper} uparzon-container-fluid`}>
      <div className="row nu-gutters">
        <div
          className={`${Styles.single_feature} col-6 col-md-3 d-flex justify-content-center align-items-center`}>
          <div className={Styles.feature_icon}>
            <img src="assets/svg/icons/shipping-fast.svg" alt="fast shipping" />
          </div>
          <div className={Styles.feature_text}>
            <h3>Free Shipping</h3>
            <span>free shipping on all us order</span>
          </div>
        </div>
        <div
          className={`${Styles.single_feature} col-6 col-md-3 d-flex justify-content-center align-items-center`}>
          <div className={Styles.feature_icon}>
            <img src="assets/svg/icons/phone-call.svg" alt="fast shipping" />
          </div>
          <div className={Styles.feature_text}>
            <h3>Free Shipping</h3>
            <span>free shipping on all us order</span>
          </div>
        </div>
        <div
          className={`${Styles.single_feature} col-6 col-md-3 d-flex justify-content-center align-items-center`}>
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
        <div
          className={`${Styles.single_feature} col-6 col-md-3 d-flex justify-content-center align-items-center`}>
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
  );
};

export default Features;
