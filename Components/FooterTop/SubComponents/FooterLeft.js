import Image from 'next/image';
export default function FooterLeft() {
  return (
    <div className="col-md-6">
      <div className="row no-gutters">
        <div className="col-6 footer_top_logo">
          <Image
            src="/assets/images/logo/Web-Uparzon-Logo.png"
            alt="uparzon logo"
            height={'1000'}
            width={'800'}
            // layout="fill"
            priority
          />
          <p>
            An active platform that makes you adaptable with all the warmest
            features of Uparzon store, Uparzon community, Uparzon agent, and
            uparzon career long with a platform named Wallet where you can refer
            and earn money.
          </p>
        </div>
        <div className="col-6 text-center footer_top_contact p-3">
          <h5 className="footer_heading">Contact us</h5>
          <p className="mb-2">
            Address: RF Zohura Tower (7th Floor), 1401. Shekh Mujib Road,
            Chowmuhony, Agrabad Chittagong
          </p>
          <div className="social-icons">
            <ul className="media-icons d-flex justify-content-center align-items-center">
              <li>
                <a href="https://www.facebook.com">
                  <Image
                    src="/assets/images/socialIcons/fb.png"
                    alt=""
                    height={'100%'}
                    width={'100%'}
                    priority
                  />
                </a>
              </li>
              <li>
                <a href="https://www.twetter.com">
                  <Image
                    src="/assets/images/socialIcons/tweetter.png"
                    alt=""
                    height={'100%'}
                    width={'100%'}
                    priority
                  />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com">
                  <Image
                    src="/assets/images/socialIcons/youtube.png"
                    alt=""
                    height={'100%'}
                    width={'100%'}
                    priority
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linked.in">
                  <Image
                    src="/assets/images/socialIcons/linked.png"
                    alt=""
                    height={'100%'}
                    width={'100%'}
                    priority
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
