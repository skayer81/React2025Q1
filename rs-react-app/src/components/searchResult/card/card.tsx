import { Component } from 'react';

interface Props {
  name: string;
  index: number;
}

export class Card extends Component<Props> {
  render() {
    return (
      <article className="card">
        <p>Карточка №{this.props.index} </p>
        <p>Имя: {this.props.name}</p>
      </article>
    );
  }
}
