import { Component } from 'react';

interface Props {
  name: string;
  index: number;
}

export class Card extends Component<Props> {
  render() {
    return (
      <article className="card">
        <p>Card №{this.props.index} </p>
        <p>Name: {this.props.name}</p>
      </article>
    );
  }
}
