import { MemoryRouter } from 'react-router';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AnimalPage } from './AnimalPage';

describe('AnimalPage', () => {
  it('should render', () => {
    render(
      <MemoryRouter>
        <AnimalPage />
      </MemoryRouter>
    );
    const renderText = screen.getByText('Loading...');
    expect(renderText).toBeInTheDocument();
  });
});
