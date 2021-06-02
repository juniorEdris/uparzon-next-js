import Styles from '../../../styles/Home.module.css';
import Image from 'next/image';

const Features = (props) => {
  return (
    <div className={`${Styles.features_wrapper}`}>
      <div className="row no-gutters">
        <div className="col-6 col-md-3 p-1">
          <div
            className={`${Styles.single_feature} d-flex justify-content-center align-items-center`}>
            <div className={Styles.feature_icon}>
              <Image
                priority
                src="/assets/svg/icons/shipping-fast.svg"
                alt="fast shipping"
                height={50}
                width={50}
              />
            </div>
            <div className={`${Styles.feature_text} ml-2`}>
              <h3>Free Shipping</h3>
              <span>free shipping on all us order</span>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3 p-1">
          <div
            className={`${Styles.single_feature} d-flex justify-content-center align-items-center`}>
            <div className={Styles.feature_icon}>
              <Image
                priority
                src="/assets/svg/icons/phone-call.svg"
                alt="fast shipping"
                height={50}
                width={50}
              />
            </div>
            <div className={`${Styles.feature_text} ml-2`}>
              <h3>Free Shipping</h3>
              <span>free shipping on all us order</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3 p-1">
          <div
            className={`${Styles.single_feature} d-flex justify-content-center align-items-center`}>
            <div className={Styles.feature_icon}>
              <Image
                priority
                src="/assets/svg/icons/hourglass-full.svg"
                alt="fast shipping"
                height={50}
                width={50}
              />
            </div>
            <div className={`${Styles.feature_text} ml-2`}>
              <h3>Free Shipping</h3>
              <span>free shipping on all us order</span>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3 p-1">
          <div
            className={`${Styles.single_feature} d-flex justify-content-center align-items-center`}>
            <div className={Styles.feature_icon}>
              <Image
                priority
                src="/assets/svg/icons/simple-f-secure.svg"
                alt="fast shipping"
                height={50}
                width={50}
              />
            </div>
            <div className={`${Styles.feature_text} ml-2`}>
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
