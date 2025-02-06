import { ChangeEvent, Component } from 'react';
import './../searchForm.css';

interface Props {
  onChange: (inputValue: string) => void;
  inputValue: string;
}

export class Input extends Component<Props> {
  placeholderText = 'Enter a search term';

  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target) return;
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <input
        type="text"
        onChange={this.onChange}
        defaultValue={this.props.inputValue}
        className="form-input"
        placeholder={this.placeholderText}
      ></input>
    );
  }
}
