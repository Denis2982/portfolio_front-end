import Logo from "../ui/logo/Logo";
import NavBar from "../ui/navBar/NavBar";
import styles from "./Header.module.scss";
import clsx from "clsx/lite";

const Header = () => {
  return (
    <header className={clsx(styles.header, "container")}>
      <div className={styles.header__inner}>
        <Logo />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
