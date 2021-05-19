import Header from '../PrimaryComponents/Header/Header';
import Meta from '../PrimaryComponents/Utility/Meta';
import Styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import Features from '../Components/Features/Features';
import Categories from '../Components/CategorySidebar/Categories';
import { useEffect, useState } from 'react';

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
    <div className={Styles.home_wrapper}>
      <Meta />
      <Header sidebar={categorySidebar} setSidebar={setCategorySidebar} />
      <Categories sidebar={categorySidebar} setSidebar={setCategorySidebar} />
      <HomeBanner />
      <Features />
      <Features />
      <Features />
      <Features />
      <Features />
      <Features />
      <Features />
      <Features />
      <Features />
      <Features />
      <Features />
      <Features />
      <main className={Styles.main}>
        <h1 className={Styles.title}>
          Welcome to <a href="https://uparzon.com.bd">Uparzon</a>
        </h1>
      </main>
    </div>
  );
}
