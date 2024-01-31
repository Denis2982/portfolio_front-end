import { Metadata } from "next";
import styles from "./projects.module.scss";
import clsx from "clsx";
import Project from "@/components/project/Project";
import { projectsItem } from "../constans";

export const metadata: Metadata = {
  title: "Portfolio Front-end │ Projects",
};

export default function Projects() {
  return (
    <div className={clsx(styles.portfolio, "container")}>
      <h2 className={styles.portfolio__title}>Portfolio</h2>
      <Project projectCards={projectsItem}/>
    </div>
  );
}
