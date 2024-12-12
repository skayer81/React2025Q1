import { Component } from 'react';
import './card.css';

interface Props {
  name: string;
  earthAnimal: boolean;
  index: number;
}

export class Card extends Component<Props> {
  isEarthAnimalDescription = 'lives on Earth';
  isNotEarthAnimalDescription = 'lives in a galaxy far, far away';

  render() {
    return (
      <article className="card">
        <p className="number">Card № {this.props.index} </p>
        <h3 className="title">Name: {this.props.name}</h3>
        <p>
          Description:{' '}
          {this.props.earthAnimal
            ? this.isEarthAnimalDescription
            : this.isNotEarthAnimalDescription}
        </p>
      </article>
    );
  }
}
