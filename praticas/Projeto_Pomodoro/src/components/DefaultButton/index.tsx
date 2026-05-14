import React from 'react';
import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red'; // Union Type para segurança total
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  color = 'green', // Default value
  ...props
}: DefaultButtonProps) {
  return (
    /* Concatenamos a classe base .button com a classe dinâmica [color] */
    <button className={`${styles.button} ${styles[color]}`} {...props}>
      {icon}
    </button>
  );
}