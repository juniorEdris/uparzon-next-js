import Link from 'next/link';
import Styles from '../../../../styles/Header.module.css';
const NavLinks = (props) => {
  return (
    <div className={`${Styles.nav_links_wrapper} col-12`}>
      <div className="row align-items-center">
        <div className={`${Styles.all_categories} col-6 col-md-4`}>
          <a href="#" className={`link_capitalize`}>
            all categories <span className="lnr lnr-menu" />
          </a>
        </div>
        <div className={`${Styles.middle_links} col-md-4 d-none d-md-block`}>
          <ul>
            <li>
              <Link href="">
                <a className={`link_capitalize`}>
                  all pages <span class="lnr lnr-chevron-down" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className={`link_capitalize`}>featured brands</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={` col-md-4 col-6`}>
          <div className="row">
            <div className={Styles.navlink_right}>
              <span>Hotline : 1-001-234-5678</span>
            </div>
            <div className={Styles.navlink_right}>
              <span>Free Shipping on Order ৳2000+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
