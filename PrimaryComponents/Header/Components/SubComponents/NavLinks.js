import Link from 'next/link';
import Image from 'next/image';
import Styles from '../../../../styles/Header.module.css';
const NavLinks = (props) => {
  const categoriesSidebar = (e) => {
    e.preventDefault();
    props.setSidebar(!props.sidebar);
  };
  return (
    <div className={`${Styles.nav_links_wrapper} col-12`}>
      <div className="row align-items-center no-gutters">
        <div
          className={`${Styles.all_categories} col-4 col-md-2 font-weight-600`}>
          <a href="#" className={`link_capitalize`} onClick={categoriesSidebar}>
            all categories <span className="lnr lnr-menu font-weight-600" />
          </a>
        </div>
        <div
          className={`${Styles.middle_links} col-md-6 d-none d-md-block font-weight-600`}>
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
            <li>
              <Link href="">
                <a className={`link_capitalize`}>Trending Styles</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className={`link_capitalize`}>Gift Cards</a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a className={`link_capitalize`}>Shop</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className={`link_capitalize`}>Tech Product</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={` col-md-4 col-8 font-weight-600`}>
          <div className="row justify-content-end no-gutters">
            <div className={`${Styles.navlink_right}`}>
              <img
                src="/assets/svg/icons/blender-phone.svg"
                alt="blender-phone"
                className={Styles.navlink_icon}
              />
              <span>Hotline : 1-001-234-5678</span>
            </div>
            <div className={`${Styles.navlink_right} ml-3`}>
              <span>Free Shipping on Order ৳2000+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
