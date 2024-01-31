import styles from "./Project.module.scss";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type ProjectCard = {
  title: string;
  tools: string;
  image: string;
  alt: string;
  urlPreview: string;
  urlGit: string;
};

type Props = {
  projectCards: ProjectCard[]
};

const Project = ({ projectCards }: Props) => {
  return (
    <div className={styles.portfolio__works}>      
      {projectCards.map((card) => {
      return (
        <div className={styles.projectCard} key={card.title}>
          <div className={styles.projectCard__overlay}></div>
          <Image className={styles.projectCard__img}
            src={card.image}        
            alt={card.alt}
            width={720} 
            height={220}       
          />
          <div className={styles.projectCard__title}>
            <span className={styles.projectCard__titleText}>{card.title}</span>
          </div>
          <div className={styles.projectCard__tools}>
            <span className={styles.projectCard__toolsText}>{card.tools}</span>
          </div>
          <Link className={styles.projectCard__linkLeft} href={card.urlGit} target="blank" >
            <CodeBracketIcon className={styles.projectCard__icon} />
          </Link>
          <Link className={styles.projectCard__linkRight} href={card.urlPreview} target="blank" >
            <EyeIcon className={styles.projectCard__icon} />
          </Link>
        </div>
      )
      })}
    </div>
  );
};

export default Project;
