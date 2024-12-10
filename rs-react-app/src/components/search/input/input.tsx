import { Component } from 'react';

interface Props {
  onChange: (inputValue: string) => void;
  inputValue: string;
}

export class Input extends Component<Props> {
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target) return;
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <>
        <input
          type="text"
          onChange={this.onChange}
          defaultValue={this.props.inputValue}
        ></input>
      </>
    );
  }
}
