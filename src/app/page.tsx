import clsx from "clsx/lite";
import styles from "./page.module.scss";
import Hero from "@/components/hero/Hero";
import AtomModel from "@/components/model/AtomModel";


export default function Home() {
  return (
    <div className={clsx(styles.main__inner, "container")}>
      <div className={styles.left}>
        <Hero />
      </div>
      <div className={styles.test}>
        <AtomModel />        
      </div>     
    </div>
  );
}
