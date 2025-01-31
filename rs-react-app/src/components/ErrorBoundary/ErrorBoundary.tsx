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
          <h1 className="error-boundary">{'Something went wrong'}</h1>
          <button
            className="error-boundary__back-button"
            onClick={() => {
              this.setState({ ...this.initState });
            }}
          >
            {'return everything as it was'}
          </button>
        </>
      );
    }
    return this.props.children;
  }
}
