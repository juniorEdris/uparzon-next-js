import Link from 'next/link';
import Styles from '../../../../styles/Header.module.css';

const ResponsiveSearch = (props) => {
  return (
    <div className={`${Styles.responsive_search} col-4 d-md-none text-right`}>
      <Link href="/search" className="">
        <a className="">
          <img
            className={`${Styles.responsive_search_icon} `}
            src="/assets/svg/icons/search.svg"
            alt="search button"
          />
        </a>
      </Link>
    </div>
  );
};

export default ResponsiveSearch;
