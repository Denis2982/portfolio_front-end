import clsx from 'clsx/lite'
import styles from './Footer.module.scss'
import Logo from '../ui/logo/Logo'
import Copy from '../ui/copy/Copy'

const Footer = () => {
  return (
    <footer className={clsx(styles.footer, 'container')}>
      <div className={styles.footer__inner}>
        <Copy />
      </div>            
    </footer>
  )
}

export default Footer