import { Component, ErrorInfo, ReactNode } from 'react';
import style from './ErrorBoundary.module.css';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('componentDidCatch');
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <>
          <h1 className={style.errorBoundary}>{'Something went wrong'}</h1>
          <button
            className={style.errorBoundaryButton}
            onClick={() => this.setState({ error: null, errorInfo: null })}
          >
            {'Return everything as it was'}
          </button>
        </>
      );
    }
    return this.props.children;
  }
}
