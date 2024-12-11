import { Component, ErrorInfo } from 'react';

interface Props {
  children: JSX.Element;
}

export class ErrorBoundary extends Component<Props> {
  initState = {
    error: null,
    errorInfo: null,
  };

  state = {
    ...this.initState,
  };

  buttonText = 'return everything as it was';
  titleText = 'Something went wrong';

  componentDidCatch = (error: Error, errorInfo: ErrorInfo) => {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  };

  render() {
    if (this.state.errorInfo) {
      return (
        <>
          <h1>{this.titleText}</h1>
          <button
            onClick={() => {
              this.setState({ ...this.initState });
            }}
          >
            {this.buttonText}
          </button>
        </>
      );
    }
    return this.props.children;
  }
}
