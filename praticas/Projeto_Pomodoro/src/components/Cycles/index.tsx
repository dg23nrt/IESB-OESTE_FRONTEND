import styles from './styles.module.css';

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <label>Ciclos realizados:</label>

      <div className={styles.cycleDots}>
        {/* Sequência: Trabalho -> Pausa Curta (3x) -> Trabalho -> Pausa Longa */}
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
        
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
        
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
        
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.longBreakTime}`}></span>
      </div>
    </div>
  );
}