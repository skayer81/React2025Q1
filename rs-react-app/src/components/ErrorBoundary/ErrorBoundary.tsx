import { Component, ErrorInfo } from 'react';
import './ErrorBoundary.css';

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
          <h1 className="error-boundary">{this.titleText}</h1>
          <button
            className="error-boundary__back-button"
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
