import './App.css';
import {ReactNode} from 'react';
import CounterClass from './components/classes/Counter/Counter.tsx';
import CounterFC from './components/functional/Counter/Counter.tsx';

function App(): ReactNode {

  return (
    <>
      <div className="description">
        <span className="description__text">Сделать счётчик на классовом и функциональном компоненте.</span>
      </div>
      <div className="container">
        <CounterClass/>
      </div>
      <div className="container">
        <CounterFC/>
      </div>
    </>

  )
}

export default App;
