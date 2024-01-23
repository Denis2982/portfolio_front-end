"use client";

import { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import styles from './Copy.module.scss'

const Copy = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);

  return (
    <div className={styles.copy}>
      <Logo />
      <div>/</div>
      <p>© {currentYear} Denis Taranenko</p>
    </div>
  );
};

export default Copy;
