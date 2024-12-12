import { Component } from 'react';
import './loadingOverlay.css';

interface Props {
  //onChange: (inputValue: string) => void;
  isLoading: boolean;
  message: string;
}

export class LoadingOverlay extends Component<Props> {
  // placeholderText = 'Enter a search term';

  //   onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     if (!event.target) return;
  //     this.props.onChange(event.target.value);
  //   };

  render() {
    return (
      <>
        {this.props.isLoading && (
          <div className="overlay">
            <p>{this.props.message}</p>
            {/* <input
              type="text"
              onChange={this.onChange}
              defaultValue={this.props.inputValue}
              className="form-input"
              placeholder={this.placeholderText}
            ></input> */}
          </div>
        )}
      </>
    );
  }
}
