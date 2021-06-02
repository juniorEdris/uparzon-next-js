import Styles from '../../../styles/Home.module.css';
import SectionHeaderTwo from '../../SectionHeaders/SectionHeaderTwo';
import Link from 'next/link';
import Image from 'next/image';
import { Truncate } from '../../Utility';
const ListCard = (props) => {
  return (
    <div
      className={`${
        props.fullWidth ? 'col-12' : 'col-md-3'
      } product_list col-12  pl-0`}>
      <SectionHeaderTwo section_title={props.title} list={props.list} />
      <div className="">
        {props.data?.map((product) => (
          <Link href="/id">
            <a>
              <div className={`${Styles.home_product_list_wrapper} col mb-3`}>
                <div className="d-flex">
                  <div className={`${Styles.list_product_image}`}>
                    <Image
                      src={`https:${product?.photo}`}
                      alt="image"
                      height={75}
                      width={75}
                      priority
                    />
                  </div>
                  <div className="list_product_body">
                    <div className="list_product_name">
                      {/* <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p> */}
                      <p>{Truncate(product?.name, 30)}</p>
                    </div>
                    <div className={`${Styles.list_product_rating} d-flex`}>
                      {Array(5)
                        .fill()
                        .map((e) => (
                          <Image
                            src="/assets/svg/icons/Icon-star.svg"
                            alt=""
                            height={15}
                            width={15}
                            priority
                          />
                        ))}
                    </div>
                    <div className={`${Styles.list_product_price} d-flex`}>
                      <p>&#2547; {product.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListCard;
