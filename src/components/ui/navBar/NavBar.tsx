"use client";

import Link from "next/link";
import styles from "./NavBar.module.scss";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={styles.nav}>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ""}`}>
        <li className={styles.nav__listLink}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.nav__listLink}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={styles.nav__listLink}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <button className={styles.burger} onClick={toggleMenu}>
        <span></span>        
      </button>
    </nav>
  );
};

export default NavBar;
