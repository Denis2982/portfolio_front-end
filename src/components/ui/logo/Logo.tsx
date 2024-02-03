import Link from 'next/link';
// import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div>
      <Link href="/" className={styles.logo}>
        <h2>Denis Taranenko</h2>        
      </Link>
    </div>
  );
};

export default Logo;
