import Header from '../PrimaryComponents/Header/Header';
import Meta from '../PrimaryComponents/Utility/Meta';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={''}>
      <Meta />
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://uparzon.com.bd">Uparzon</a>
        </h1>
      </main>
    </div>
  );
}
