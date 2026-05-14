import type { ReactNode } from 'react';
import styles from './styles.module.css'; // Mude aqui para styles.module.css

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}


