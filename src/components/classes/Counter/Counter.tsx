import {Component, ReactNode} from 'react';
import Output from '../Output/Output.tsx';
import Buttons from '../Buttons/Buttons.tsx';
import CounterType from '../../../types/counter-type.ts';

class CounterClass extends Component<Readonly<{}>, CounterType> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  private add(): void {
    const newValue = this.state.value + 1;
    this.setState({ value: newValue });
  }

  private subtract(): void {
    const newValue = this.state.value - 1;
    this.setState({ value: newValue });
  }
  render(): ReactNode {
    return (
      <>
        <Output value={this.state.value}/>
        <Buttons add={this.add.bind(this)} subtract={this.subtract.bind(this)}/>
      </>
    );
  }
}

export default CounterClass;
