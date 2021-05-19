import Styles from '../../styles/Home.module.css';
const Categories = (props) => {
  return (
    <div className={Styles.categories}>
      <div className="">
        <h1>Categories goes here</h1>
      </div>
      <div className="" onClick={() => props.setSidebar(!props.sidebar)}>
        backdrop
      </div>
    </div>
  );
};

export default Categories;
