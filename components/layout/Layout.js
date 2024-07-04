import Link from "next/link";
import styles from "../../styles/Layout.module.scss";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Pear Car</h2>
          <p>Buy and Sell Cars with Advertisements.</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://github.com/golabisib" target="blank">
          GolabiSib Github
        </a>
        PearCar With NextJs RoozbehRigiJangjo&copy;
      </footer>
    </>
  );
}

export default Layout;
