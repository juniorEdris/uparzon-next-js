import Styles from '../../../styles/Header.module.css';
const Search = () => {
  return (
    <div className={`${Styles.header_search} col-md-7 col-12 `}>
      <div className={Styles.header_search_side_bar}>
        <img src="/assets/svg/icons/menu.svg" alt={'search_side_bar'} />
      </div>
      <div className={`${Styles.header_search_input_wrapper} pl-3 pr-3`}>
        <form>
          <input type="text" name="search" placeholder="Search Here" />
          <select name="categories" id="">
            <option value="">all categories</option>
            <option value="">electronics</option>
            <option value="">clothings</option>
          </select>
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
