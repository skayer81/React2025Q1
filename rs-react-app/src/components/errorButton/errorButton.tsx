import { Component } from 'react';

export class ErrorButton extends Component {
  ButtonText = 'создать ошибку';

  state = {
    isError: false,
  };

  onClick = () => {
    this.setState({ isError: true });
  };

  render() {
    if (this.state.isError) {
      throw new Error('Упс, что то пошло не так(');
    }
    return (
      <>
        <button onClick={this.onClick}>{this.ButtonText}</button>
      </>
    );
  }
}
