import Header, { name } from './header';
import styles from './layout.module.css';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function BlogLayout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <Link href="/">
        <Image
          priority
          src="/images/bernas.jpg"
          className={utilStyles.borderCircle}
          height={108}
          width={108}
          alt=""
        />
      </Link>
      <h2 className={utilStyles.headingLg}>
        <Link href="/" className={utilStyles.colorInherit}>
          {name}
        </Link>
      </h2>
      {children}
      <div className={styles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    </div>
  );
}
