import { Component } from 'react';
import { Input } from './input/input';
import { Button } from './button/button';

interface Props {
  inputValue: string;
  onChange: (value: string) => void;
  onClick: () => void;
}

export class Search extends Component<Props> {
  ButtonText = 'Поиск';

  render() {
    return (
      <>
        <Input
          inputValue={this.props.inputValue}
          onChange={this.props.onChange}
        />
        <Button onClick={this.props.onClick} buttonText={this.ButtonText} />
      </>
    );
  }
}
