import { MemoryRouter } from 'react-router';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom'
import { DetailedErrorCard } from './DetailedErrorCard';  

describe('DetailedErrorCard', () => {
  it('should render', () => {
    render(
      <MemoryRouter>
        <DetailedErrorCard/>
      </MemoryRouter>
    );
    const earthAnimalText = screen.getByText('Detailed Card');
    expect(earthAnimalText).toBeInTheDocument();
  });

});
