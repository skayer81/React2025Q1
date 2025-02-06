import { Component, ErrorInfo, JSX } from 'react';
import style from './ErrorBoundary.module.css';

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
          <h1 className={style.errorBoundary}>{'Something went wrong'}</h1>
          <button
            className={style.errorBoundaryButton}
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
