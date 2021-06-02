import Image from 'next/image';
const FooterBottom = (props) => {
  return (
    <div className="footer_bottom_wrapper">
      <div className="uparzon-container-fluid">
        <div className="row no-gutters justify-content-between align-items-center">
          <div className="col-6">
            <span className="text-light">
              Copyright © 2021 Uparzon. All Right Reserved
            </span>
          </div>
          <div className="col-6 footer_payment">
            <Image
              src="/assets/images/payments/payment_media.png"
              alt="payment media"
              height={37}
              width={238}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
