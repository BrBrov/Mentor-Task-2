import { ReactNode } from 'react';
import ButtonTypes from '../../../../types/button-types.ts';
import '../../../../styles/Button.css';

function ButtonFC({ kind, reaction }: ButtonTypes): ReactNode {
  return (
    <button type="button"
            className="button"
            onClick={() => reaction()}>
      {kind === '-' ? '<<<' : '>>>'}
    </button>
  )
}

export default ButtonFC;
