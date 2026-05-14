import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      {/* O href='#' é temporário, logo usaremos rotas! */}
      <a className={styles.logoLink} href="#">
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}