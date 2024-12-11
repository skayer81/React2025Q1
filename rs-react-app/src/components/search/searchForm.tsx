import { Component } from 'react';
import { Input } from './input/input';
import { Button } from './button/button';
import { ErrorButton } from '../errorButton/errorButton';
import { LSAPI } from '../API/LSAPI';

interface Props {
  onClick: (value: string) => void;
}

export class SearchForm extends Component<Props> {
  ButtonText = 'Поиск';
  loadSaveRequest = new LSAPI();

  state = {
    inputValue: '',
  };

  componentDidMount() {
    if (this.loadSaveRequest.hasSave()) {
      const request = this.loadSaveRequest.loadRequest();
      this.setState({ inputValue: request });
      this.props.onClick(request);
    }
  }

  onChange = (value: string) => {
    this.setState({ inputValue: value });
  };

  onClick = () => {
    this.loadSaveRequest.saveRequest(this.state.inputValue);
    this.props.onClick(this.state.inputValue);
  };

  render() {
    return (
      <form>
        <Input inputValue={this.state.inputValue} onChange={this.onChange} />
        <Button onClick={this.onClick} buttonText={this.ButtonText} />
        <ErrorButton />
      </form>
    );
  }
}
