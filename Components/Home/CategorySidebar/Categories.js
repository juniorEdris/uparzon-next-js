import Link from 'next/link';
import Styles from '../../../styles/Home.module.css';
const Categories = (props) => {
  return (
    <div className="">
      <div className={`${Styles.categories} ${props.sidebar && 'd-block'}`}>
        <div className={Styles.categories_list}>
          <div
            className={Styles.cross}
            onClick={() => props.setSidebar(!props.sidebar)}>
            x
          </div>
          <ul>
            {Array(55)
              .fill()
              .map((route, i) => (
                <li key={i}>
                  <Link href="">
                    <a>cat1</a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div
          className={Styles.categories_backdrop}
          onClick={() => props.setSidebar(!props.sidebar)}></div>
      </div>
    </div>
  );
};

export default Categories;
