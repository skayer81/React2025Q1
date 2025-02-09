import { MemoryRouter } from 'react-router';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SearchForm } from './SearchForm';

describe('Search', () => {
  it('should render', () => {
    render(
      <MemoryRouter>
        <SearchForm onClick={() => {}} />
      </MemoryRouter>
    );
    const renderText = screen.getByText('search form:');
    expect(renderText).toBeInTheDocument();
  });
});
