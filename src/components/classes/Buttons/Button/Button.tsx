import {Component, ReactNode} from 'react';
import ButtonTypes from '../../../../types/button-types.ts';
import '../../../../styles/Button.css';

class Button extends Component<ButtonTypes> {
  public static readonly defaultProps: ButtonTypes;

  constructor(props: ButtonTypes) {
    super(props);
  }

  render(): ReactNode {
    return (
      <button type="button"
              className="button"
              onClick={() => this.props.reaction()}>
        {this.props.kind === '-' ? '<<<' : '>>>'}
      </button>
    )
  }

}

export default Button;
