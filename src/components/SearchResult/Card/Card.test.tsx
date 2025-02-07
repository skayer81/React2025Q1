import { MemoryRouter } from 'react-router';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { Card } from './Card';

describe('Card', () => {
  it('should render earthAnimal', () => {
    render(
      <MemoryRouter>
        <Card name="testName" index={1} uid="1" earthAnimal={true} />
      </MemoryRouter>
    );
    const renderText = screen.getByText('Name: testName');
    expect(renderText).toBeInTheDocument();
  });
  it('should render not earthAnimal', () => {
    render(
      <MemoryRouter>
        <Card name="testName" index={1} uid="1" earthAnimal={false} />
      </MemoryRouter>
    );
    const renderText = screen.getByText('Name: testName');
    expect(renderText).toBeInTheDocument();
  });
  // it('test click', () => {
  //   render(
  //     <MemoryRouter>
  //       <Card name='testName' index={1} uid='1' earthAnimal={true}/>
  //     </MemoryRouter>
  //   );
  //   const btn = screen.getByText('id: 1');
  //   fireEvent.click(btn)
  //    const renderText = screen.getByText('id: 1');
  //    expect(renderText).toBeInTheDocument();
  // });
});
