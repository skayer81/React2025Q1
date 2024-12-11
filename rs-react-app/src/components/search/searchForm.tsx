import { Component } from 'react';
import { Input } from './input/input';
import { Button } from './button/button';
import { ErrorButton } from '../errorButton/errorButton';

interface Props {
  inputValue: string;
  onChange: (value: string) => void;
  onClick: () => void;
}

export class SearchForm extends Component<Props> {
  ButtonText = 'Поиск';

  render() {
    return (
      <form>
        <Input
          inputValue={this.props.inputValue}
          onChange={this.props.onChange}
        />
        <Button onClick={this.props.onClick} buttonText={this.ButtonText} />
        <ErrorButton />
      </form>
    );
  }
}
