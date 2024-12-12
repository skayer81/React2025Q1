import { Component } from 'react';
import './card.css';

interface Props {
  name: string;
  isFeline: boolean;
  index: number;
}

export class Card extends Component<Props> {
  isFelineDescription = 'maybe you can pet it';
  isNotFelineDescription = 'not feline';

  render() {
    return (
      <article className="card">
        <p className="number">Card № {this.props.index} </p>
        <h3 className="title">Name: {this.props.name}</h3>
        <p>
          Description:{' '}
          {this.props.isFeline
            ? this.isFelineDescription
            : this.isNotFelineDescription}
        </p>
      </article>
    );
  }
}
