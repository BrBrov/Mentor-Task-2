import {ReactNode, useState} from 'react';
import CounterType from '../../../types/counter-type.ts';
import OutputFC from '../Output/Output.tsx';
import ButtonsFC from '../Buttons/Buttons.tsx';

function CounterFC(): ReactNode {
  const [count, setCount] = useState<CounterType>({value: 0});

  function add(): void {
    const newValue: CounterType = {value: count.value + 1};
    setCount(newValue);
  }

  function subtract(): void {
    const newValue: CounterType = {value: count.value - 1};
    setCount(newValue);
  }

  return (
    <>
      <span className="button__label">Functional</span>
      <OutputFC value={count.value}/>
      <ButtonsFC add={add} subtract={subtract}/>
    </>
  );
}

export default CounterFC;
