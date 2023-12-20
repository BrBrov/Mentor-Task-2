import { ReactNode } from 'react';
import '../../../styles/Output.css';
import OutputType from '../../../types/output-type.ts';

function OutputFC({value}: OutputType): ReactNode {
  return <span className='output'>{value}</span>;
}

export default OutputFC;
