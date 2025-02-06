import { MemoryRouter } from 'react-router';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom'
import { DetailedCard } from './DetailedCard';
import { Animal } from '../../interfaces/interfaces'; //{ Animal } from '../interfaces/interfaces';

const testData1: Animal={
    avian: true,
    canine: true,
    earthAnimal: true,
    earthInsect: true,
    feline: true,
    name: 'test name',
    uid: 'testid'
}

const testData2: Animal={
    avian: false,
    canine: false,
    earthAnimal: false,
    earthInsect: false,
    feline: false,
    name: 'test name2',
    uid: 'testid2'
}

describe('DetailedCard', () => {
  it('should render', () => {
    render(
      <MemoryRouter>
        <DetailedCard data={testData1}/>
      </MemoryRouter>
    );
    const CardText = screen.getByText('Detailed Card');
    expect(CardText).toBeInTheDocument();
    const avianText = screen.getByText('avian: yes');
    expect(avianText).toBeInTheDocument();
    const canineText = screen.getByText('canine: yes');
    expect(canineText).toBeInTheDocument();
    const earthAnimalText = screen.getByText('earthAnimal: yes');
    expect(earthAnimalText).toBeInTheDocument();
  });
  it('should render', () => {
    render(
      <MemoryRouter>
        <DetailedCard data={testData2}/>
      </MemoryRouter>
    );
    const CardText = screen.getByText('Detailed Card');
    expect(CardText).toBeInTheDocument();
    const avianText = screen.getByText('avian: no');
    expect(avianText).toBeInTheDocument();
    const canineText = screen.getByText('canine: no');
    expect(canineText).toBeInTheDocument();
    const earthAnimalText = screen.getByText('earthAnimal: no');
    expect(earthAnimalText).toBeInTheDocument();
  });
});
