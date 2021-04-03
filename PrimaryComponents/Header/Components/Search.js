import Link from 'next/link';
import { useState } from 'react';
import Styles from '../../../styles/Header.module.css';
const Search = () => {
  const [sidebar, setSidebar] = useState(false);
  const search_side_bar = (e) => {
    e.preventDefault();
    setSidebar(!sidebar);
  };
  return (
    <div className={`${Styles.header_search} col-md-7 col-12 `}>
      <div className={Styles.header_search_side_bar}>
        <a href={'#'} onClick={search_side_bar}>
          <img src="/assets/svg/icons/menu.svg" alt={'search_side_bar'} />
        </a>
      </div>
      <div className={`${Styles.header_search_input_wrapper} `}>
        <form className="pl-4 pr-3">
          <div className={` header_search_input col-6 p-0`}>
            <input
              type="text"
              name="search"
              placeholder="Search Here"
              className="header_search_input"
            />
          </div>
          <div className="col-3 p-0">
            <select name="categories" id="" className="">
              <option value="">all categories</option>
              <option value="">electronics</option>
              <option value="">clothings</option>
            </select>
          </div>
          <div className="col-3 p-0">
            <Link href="/search" className="">
              <a>
                <img
                  className={Styles.header_search_icon}
                  src="/assets/svg/icons/search.svg"
                  alt="search button"
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
        }
        .header_sidebar {
          position: absolute;
          top: 50vh;
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default Search;
