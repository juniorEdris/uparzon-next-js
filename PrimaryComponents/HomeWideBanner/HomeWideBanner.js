import Image from 'next/image';
import { imageTagLoder } from '../Utility';

const HomeWideBanner = (props) => {
  return (
    <div className="home_wide_banners">
      {props.fullWidth ? (
        <div className="full_width_banner w-100">
          <Image
            loader={imageTagLoder}
            src={props.imageone}
            alt=""
            height={'206'}
            width={'1920'}
            priority
            // objectFit="contain"
          />
        </div>
      ) : (
        <div className="half_width_banner w-100 d-flex">
          <div className="col-6">
            <Image
              loader={imageTagLoder}
              src={props.imageone}
              alt=""
              height={'183'}
              width={'805'}
              priority
              objectFit="contain"
            />
          </div>
          <div className="col-6">
            <Image
              loader={imageTagLoder}
              src={props.imagetwo}
              alt=""
              height={'183'}
              width={'805'}
              priority
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeWideBanner;
