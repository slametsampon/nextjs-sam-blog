import Header, { name } from './header';
import styles from './layout.module.css';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function HomeLayout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <Image
        priority
        src="/images/bernas.jpg"
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt=""
      />
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
      {children}
    </div>
  );
}
