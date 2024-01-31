import Image from "next/image";
import styles from "./Skills.module.scss";

type SkillsBlok = {
  title: string;
  desc: string;
  src: string;  
};

type Props = {
  skillBlok: SkillsBlok[];
};

const Skills = ({ skillBlok }: Props) => {  
  return (
    <div className={styles.skills__list}>
      {skillBlok.map((blok) => {        
        return (
          <div className={styles.skills__listItem} key={blok.title}>
            <div className={styles.skills__listIcon}>
              <Image
                className={styles.icon}
                src={blok.src}
                alt={blok.title}
                width={50}
                height={50}
              />
            </div>
            <div className={styles.skills__listTitle}>{blok.title}</div>
            <div className={styles.skills__listText}>{blok.desc}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
