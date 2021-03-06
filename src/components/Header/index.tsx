import Link from 'next/link';
import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <Link href="/">
      <a>
        <header className={styles.container}>
          <img src="/logo.svg" alt="logo" />
        </header>
      </a>
    </Link>
  );
}