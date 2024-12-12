import { Component } from 'react';
import './loadingOverlay.css';

interface Props {
  isLoading: boolean;
  message: string;
}

export class LoadingOverlay extends Component<Props> {
  render() {
    return (
      <>
        {this.props.isLoading && (
          <div className="overlay">
            <p>{this.props.message}</p>
          </div>
        )}
      </>
    );
  }
}
