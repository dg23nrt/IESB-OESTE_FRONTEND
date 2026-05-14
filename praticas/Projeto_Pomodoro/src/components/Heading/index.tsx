import { type ReactNode } from 'react';
import styles from './styles.module.css'; // Mude aqui para styles.module.css

interface HeadingProps {
  children: ReactNode;
  subtitulo?: string;
}

export function Heading({ children, subtitulo }: HeadingProps) {
  return (
    <div className={styles.container}>
       <h1 className={styles.titulo}>{children}</h1>
       {subtitulo && <p className={styles.subtitulo}>{subtitulo}</p>}
    </div>
  );
}