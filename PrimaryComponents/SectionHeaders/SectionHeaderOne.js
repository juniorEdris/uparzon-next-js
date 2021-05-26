import Link from 'next/link';

const SectionHeaderOne = (props) => {
  return (
    <div className={'sectionHeaderOne d-flex  justify-content-between'}>
      <ul className=" text-capitalize d-flex align-items-center justify-content-md-center flex-grow-1">
        <li>
          <a href="#" className="active">
            feature product
          </a>
        </li>
        <li>
          <a href="#">on sale</a>
        </li>
        <li>
          <a href="#">top rated</a>
        </li>
      </ul>
      <Link href="">
        <a className="text-capitalize"> all products</a>
      </Link>
    </div>
  );
};

export default SectionHeaderOne;
