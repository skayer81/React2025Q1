import { PureComponent } from 'react';
import { getAnimals } from '../API/StAPI';
import { Card } from '../searchResult/card/card';
import { Animal } from '../interfaces/interfaces';

interface State {
  animals: Array<Animal> | null;
}

export class Catalog extends PureComponent {
  state: State = {
    animals: null,
  };

  constructor() {
    super({});
    this.loader();
  }

  loader = async () => {
    const res = await getAnimals();
    this.setState({ animals: res.animals });
  };

  render() {
    return (
      <>
        <h1>Каталог </h1>
        <section className="catalog">
          {this.state.animals === null ? (
            <p>ждём</p>
          ) : (
            this.state.animals.map((elem, index) => {
              return <Card index={index + 1} name={elem.name} key={index} />;
            })
          )}
        </section>
      </>
    );
  }
}
