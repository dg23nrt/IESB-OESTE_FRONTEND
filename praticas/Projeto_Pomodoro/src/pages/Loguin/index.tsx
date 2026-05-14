import { useState } from 'react';
import styles from './styles.module.css';

type LoginProps = {
  onLoginSuccess: () => void;
};

export function Login({ onLoginSuccess }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const mockUser = 'admin';
    const mockPassword = '123456';

    if (username === mockUser && password === mockPassword) {
      setMessage('Login realizado com sucesso!');
      onLoginSuccess();
    } else {
      setMessage('Usuário ou senha inválidos.');
    }
  }

  function handleRegister() {
    setMessage('Fluxo de cadastro ainda será implementado.');
  }

  function handleForgotPassword() {
    setMessage('Fluxo de recuperação de senha ainda será implementado.');
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Chronos Pomodoro</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">
              Usuário
            </label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">
              Senha
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>

          <button type="submit">
            Entrar
          </button>
        </form>

        <div className={styles.links}>
          <button
            type="button"
            onClick={handleRegister}
          >
            Não tem conta? Cadastre-se
          </button>

          <button
            type="button"
            onClick={handleForgotPassword}
          >
            Esqueci minha senha
          </button>
        </div>

        {message && (
          <p className={styles.message}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}