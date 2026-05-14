import { useState } from 'react';
import { PlayCircle } from 'lucide-react';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { Footer } from './components/Footer';

import { Login } from '../src/pages/Loguin/index'

import './styles/theme.css';
import './styles/global.css';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleLoginSuccess() {
    setIsAuthenticated(true);
  }

  // TELA DE LOGIN
  if (!isAuthenticated) {
    return (
      <Login onLoginSuccess={handleLoginSuccess} />
    );
  }

  // POMODORO
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {/* BOTÃO SAIR */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1rem',
        }}
      >
        <button
          onClick={() => setIsAuthenticated(false)}
          style={{
            padding: '0.8rem 1.2rem',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            background: '#00875f',
            color: 'white',
          }}
        >
          Sair
        </button>
      </div>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form'>
          <div className='formRow'>
            <DefaultInput
              id='task'
              labelText='Qual seu foco agora?'
              placeholder='Ex: Estudar React'
            />
          </div>

          <div className='formRow'>
            <p
              style={{
                color: 'var(--gray-500)',
                fontSize: '1.4rem',
              }}
            >
              Mantenha o foco por 25 minutos.
            </p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircle />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}