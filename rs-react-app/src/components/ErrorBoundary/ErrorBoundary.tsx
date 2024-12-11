import { Component, ErrorInfo } from 'react';

interface Props {
  children: JSX.Element;
}

export class ErrorBoundary extends Component<Props> {
  state = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch = (error: Error, errorInfo: ErrorInfo) => {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  };

  render() {
    if (this.state.errorInfo) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}
