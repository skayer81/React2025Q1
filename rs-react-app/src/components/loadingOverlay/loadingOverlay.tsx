import { Component } from 'react';
import './loadingOverlay.css';

interface Props {
  isLoading: boolean;
  message: string;
}

export class LoadingOverlay extends Component<Props> {
  render() {
    if (!this.props.isLoading) {
      return null;
    }
    return (
      <div className="overlay">
        <p>{this.props.message}</p>
      </div>
    );
  }
}
