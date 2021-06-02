import Styles from '../../../styles/Home.module.css';
import ListCard from '../../../PrimaryComponents/ProductCards/ListCard/ListCard';
import Image from 'next/image';
const ListProductsSection = (props) => {
  return (
    <div className="section-gap-top">
      <div className="d-flex flex-wrap col-12 p-0">
        <ListCard data={props.data} title={'Headphones'} list />
        <ListCard data={props.data} title={'Top Selling Products'} list />
        <ListCard data={props.data} title={'On Sale Products'} list />
        {/* <ListCard title={ 'Headphones'}/> */}
        <div className={`col-md-3 col-12 ${Styles.list_view_section_banner}`}>
          <Image
            src="/assets/images/banners/imageBanner.png"
            alt=""
            height={391}
            width={431}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ListProductsSection;
