import { Component } from 'react';

export class ErrorButton extends Component {
  ButtonText = 'Create rendering error';

  state = {
    isError: false,
  };

  onClick = () => {
    this.setState({ isError: true });
  };

  render() {
    if (this.state.isError) {
      throw new Error('Something went wrong');
    }
    return (
      <>
        <button onClick={this.onClick} type="button">
          {this.ButtonText}
        </button>
      </>
    );
  }
}
