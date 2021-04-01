import Styles from '../../../styles/Header.module.css';
const Search = () => {
  return (
    <div className={`${Styles.header_search} col-md-7 col-12 `}>
      <div className={Styles.header_search_side_bar}>
        <img src="/assets/svg/icons/menu.svg" alt={'search_side_bar'} />
      </div>
      <div className={Styles.header_search_input_wrapper}>
        <form>
          <input type="text" name="search" placeholder="Search Here" />
          <button type="submit">
            <img
              className={Styles.header_search_icon}
              src="/assets/svg/icons/search.svg"
              alt="search button"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
