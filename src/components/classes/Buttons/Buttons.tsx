import {Component, ReactNode} from 'react';
import Button from './Button/Button.tsx';
import './Buttons.css';
import ButtonsType from '../../../types/buttons-type.ts';

class Buttons extends Component<ButtonsType> {
  public static readonly defaultProps: ButtonsType;

  constructor(props: ButtonsType) {
    super(props);
  }
  render(): ReactNode {
    return (
      <div className="button-block">
        <Button kind={'-'} reaction={this.props.subtract}/>
        <Button kind={'+'} reaction={this.props.add}/>
      </div>
    );
  }
}

export default Buttons;
