import {Component, ReactNode} from 'react';
import '../../../styles/Output.css';
import OutputType from '../../../types/output-type.ts';

class Output extends Component<OutputType> {
  static defaultProps: OutputType;
  constructor(props: OutputType) {
    super(props);
  }
  render(): ReactNode {
    return <span className='output'>{this.props.value}</span>;
  }
}

export default Output;
