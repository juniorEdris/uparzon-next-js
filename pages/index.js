import Header from '../PrimaryComponents/Header/Header';
import Meta from '../PrimaryComponents/Utility/Meta';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import Features from '../Components/Banner/Features';

export default function Home() {
  // prevent owlCarrousel ServerSide rendering
  const HomeBanner = dynamic(import('../Components/Banner/HomeBanner'), {
    ssr: false,
  });
  return (
    <div className={''}>
      <Meta />
      <Header />
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
