import styles from './styles.module.css';

export function Footer() {
  // Pegamos o ano atual para que o site nunca fique "desatualizado"
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.link}>
        Entenda como funciona a técnica pomodoro
      </a>
      
      <p className={styles.copyright}>
        Chronos Pomodoro &copy; {currentYear} — Feito com 💚
      </p>
    </footer>
  );
}