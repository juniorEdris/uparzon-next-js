import HomeBanner from '../Components/Banner/HomeBanner';
import Header from '../PrimaryComponents/Header/Header';
import Meta from '../PrimaryComponents/Utility/Meta';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={''}>
      <Meta />
      <Header />
      {/* <HomeBanner /> */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://uparzon.com.bd">Uparzon</a>
        </h1>
      </main>
    </div>
  );
}
