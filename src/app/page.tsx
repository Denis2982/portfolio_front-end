// import Image from "next/image";
import clsx from "clsx/lite";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={clsx(styles.main__inner, "container")}>
      <div className={styles.main__content}>
        <h1 className={styles.main__title}>
          <span className={styles.main__name}>Denis</span><br/>
          <span className={styles.main__lastname}>Taranenko</span>
        </h1>
        <p className={styles.main__subtitle}>front-end web developer</p>
      </div>
      <div className=""></div>
    </div>
  );
}
