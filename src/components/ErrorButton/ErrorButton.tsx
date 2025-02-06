import { Component } from 'react';

export class ErrorButton extends Component {
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
      <button onClick={this.onClick} type="button">
        {'Create rendering error'}
      </button>
    );
  }
}
