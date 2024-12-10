import { Component } from 'react';

interface Props {
  onClick: () => void;
  buttonText: string;
}

export class Button extends Component<Props> {
  onClick = () => {
    this.props.onClick();
  };

  render() {
    return <button onClick={this.onClick}>{this.props.buttonText}</button>;
  }
}
