import Header from '../PrimaryComponents/Header/Header';
import Meta from '../PrimaryComponents/Utility/Meta';
import Styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import Features from '../Components/Features/Features';
import Categories from '../Components/CategorySidebar/Categories';
import { useEffect, useState } from 'react';
import { CategoryRow } from '../Components/CategoryRow/CategoryRow';

export default function Home() {
  const [categorySidebar, setCategorySidebar] = useState(false);
  useEffect(() => {
    document.body.style.overflow = categorySidebar ? 'hidden' : '';
  }, [categorySidebar]);
  // prevent owlCarrousel ServerSide rendering
  const HomeBanner = dynamic(import('../Components/Banner/HomeBanner'), {
    ssr: false,
  });
  return (
    <div className={`${Styles.home_wrapper} mb-5`}>
      <Meta />
      <Header sidebar={categorySidebar} setSidebar={setCategorySidebar} />
      <Categories sidebar={categorySidebar} setSidebar={setCategorySidebar} />
      <HomeBanner />
      <div className="uparzon-container-fluid">
        <Features />
        <CategoryRow />
        <CategoryRow />
        <CategoryRow />
        <CategoryRow />
        <CategoryRow />
        <CategoryRow />
        <CategoryRow />
      </div>
    </div>
  );
}
