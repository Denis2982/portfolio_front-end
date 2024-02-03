"use client";

import Link from "next/link";
import styles from "./NavBar.module.scss";
import { useState } from "react";
import { usePathname } from "next/navigation";

type NavLink = {
  name: string;
  href: string;
};
type Props = {
  navLinks: NavLink[];
};

const NavBar = ({ navLinks }: Props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ""}`}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li
              className={`${styles.nav__listLink} ${
                isActive ? styles.active : ""
              }`}
              key={link.name}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>

      <button className={styles.burger} onClick={toggleMenu}>
        <span></span>
      </button>
    </nav>
  );
};

export default NavBar;
