import Header from '../PrimaryComponents/Header/Header';
import Meta from '../PrimaryComponents/Utility/Meta';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import Features from '../Components/Features/Features';
import Categories from '../Components/CategorySidebar/Categories';
import { useState } from 'react';

export default function Home() {
  const [categorySidebar, setCategorySidebar] = useState(false);
  // prevent owlCarrousel ServerSide rendering
  const HomeBanner = dynamic(import('../Components/Banner/HomeBanner'), {
    ssr: false,
  });
  return (
    <div className={''}>
      <Meta />
      <Header sidebar={categorySidebar} setSidebar={setCategorySidebar} />
      {categorySidebar && (
        <Categories sidebar={categorySidebar} setSidebar={setCategorySidebar} />
      )}
      <HomeBanner />
      <Features />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://uparzon.com.bd">Uparzon</a>
        </h1>
      </main>
    </div>
  );
}
