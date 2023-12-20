import { ReactNode } from 'react';
import '../../../styles/Buttons.css';
import ButtonsType from '../../../types/buttons-type.ts';
import ButtonFC from './Button/Button.tsx';

function ButtonsFC({ add, subtract}: ButtonsType): ReactNode {
  return (
    <div className="button-block">
      <ButtonFC kind={'-'} reaction={subtract}/>
      <ButtonFC kind={'+'} reaction={add}/>
    </div>
  );
}

export default ButtonsFC;
