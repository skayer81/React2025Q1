import { Component } from 'react';
import './card.css';

interface Props {
  name: string;
  index: number;
}

export class Card extends Component<Props> {
  render() {
    return (
      <article className="card">
        <p className="number">Card № {this.props.index} </p>
        <h2 className="title">Name: {this.props.name}</h2>
      </article>
    );
  }
}
