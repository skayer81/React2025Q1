import { Component } from 'react';
import style from './LoadingOverlay.module.css';

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
      <div className={style.overlay}>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
