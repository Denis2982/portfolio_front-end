import { Socials } from '@/app/constans'
import styles from './Hero.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={styles.main__content}>
        <h1 className={styles.main__title}>
          <span className={styles.main__name}>Denis</span>
          <br />
          <span className={styles.main__lastname}>Taranenko</span>
        </h1>
        <p className={styles.main__subtitle}>front-end web developer</p>
        <div className={styles.social}>
          {Socials.map((social) => (
            <Link href={social.path} key={social.name} target="blank">
              <Image
                src={social.src}
                alt={social.name}
                width={40}
                height={40}
              />
            </Link>
          ))}
        </div>
      </div>
  )
}

export default Hero