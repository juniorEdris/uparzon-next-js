import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Styles from '../../../styles/Header.module.css';
const Search = () => {
  const [sidebar, setSidebar] = useState(false);
  const search_side_bar = (e) => {
    e.preventDefault();
    setSidebar(!sidebar);
  };
  return (
    <div className={`${Styles.header_search} col-md-7 d-none d-md-block`}>
      {/* <div className={Styles.header_search_side_bar}>
        <a href={'#'} onClick={search_side_bar}>
          <img src="/assets/svg/icons/menu.svg" alt={'search_side_bar'} />
        </a>
      </div> */}
      <div className={`${Styles.header_search_input_wrapper} `}>
        <form className="pl-4 pr-3">
          <div className={`  col-7 p-0`}>
            <input
              type="text"
              name="search"
              placeholder="Search Here"
              className="header_search_input"
            />
          </div>
          <div className="col-4 p-0">
            <select
              name="categories"
              id=""
              className={`header_search_input_select`}>
              <option value="">all categories</option>
              <option value="">electronics</option>
              <option value="">clothings</option>
            </select>
          </div>
          <div className="col-1 p-0 ">
            <Link href="/search" className=" ">
              <a className="search_icon flex-hard-center">
                {/* <img */}
                <Image
                  className={`${Styles.header_search_icon} `}
                  src="/assets/svg/icons/search.svg"
                  alt="search button"
                  height={'20px'}
                  width={'20px'}
                />
              </a>
            </Link>
          </div>
        </form>
      </div>
      {sidebar && <h1 className="header_sidebar">Search sidebar open</h1>}
      <style jsx>{`
        .header_search_input {
          width: 100%;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 5rem 0 0 5rem;
          height: 40px;
          max-height: 100%;
        }
        .header_sidebar {
          position: absolute;
          top: 50vh;
          color: #000;
        }

        .header_search_input_select {
          width: 100%;
          height: 40px;
          max-height: 100%;
          padding: 0px 0px 0px 9px;
          border: none;
          text-transform: capitalize;
          background: #fff;
          text-align-last: right;
          padding-right: 10px;
        }
        .search_icon{
          width: 100%;
          height: 40px;
          max-height: 100%;
          padding: 0.5rem 0;
          border-radius: 0 5rem 5rem 0;
          border: none;
          outline: none;
          background: var(--search-btn-color);
        }
        }
      `}</style>
    </div>
  );
};

export default Search;
