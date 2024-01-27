import { Metadata } from "next";
import styles from "./about.module.scss";
import clsx from "clsx";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio Front-end │ About",
};

export default function About() {
  return (
    <div className={clsx(styles.about, "container")}>
      <div className={styles.about__block}>
        <div className={styles.about__content}>
          <h2 className={styles.about__content_title}>About me</h2>
          <p className={styles.about__content_text}>
            I am a junior web developer with experience building dynamic
            websites and web applications. I enjoy developing interactive
            interfaces, optimizing UX and creating cross-browser responsive
            designs.
            <br />
            <br />
            I use the BEM methodology to structure code, which allows you to
            create flexible and scalable websites. For layout, I use HTML5,
            CSS3, the Gulp build system.
            <br />
            <br />
            I try to write clean, semantically correct code that uses modern web
            standards. I constantly explore new technologies and keep up with
            trends in web development.
            <br />
            <br />
            I want to develop as a layout designer and continue improving my
            skills in creating complex adaptive interfaces, UI/UX design,
            JavaScript and React.
            <br />
            <br />I really love my job and strive for professional growth! I
            would be glad to take on new projects and learning opportunities.
          </p>
          <Link href="/" className={styles.about__btn}>
            <span className={styles.about__btn_title}>Download CV</span>
          </Link>
        </div>
        <div className={styles.about__img}></div>
      </div>
      <div className={styles.about__skills}>
        <h2 className={styles.about__skills_title}>What I use</h2>
        <p className={styles.about__skills_text}>
          In my work, I actively use and constantly improve my skills in the
          following tools and technologies: HTML5, CSS3, SCSS/Sass, BEM,
          JavaScript (ES6+), React, Gulp, NPM, Git. I develop frontend
          programming skills and work with the DOM.
        </p>
      </div>
    </div>
  );
}
