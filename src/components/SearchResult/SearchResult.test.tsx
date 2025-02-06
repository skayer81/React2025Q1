import { MemoryRouter } from 'react-router';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SearchResult } from './SearchResult';

describe('SearchResult', () => {
  it('should render', () => {
    render(
      <MemoryRouter>
        <SearchResult />
      </MemoryRouter>
    );
    const renderText = screen.getByText('Loading...');
    expect(renderText).toBeInTheDocument();
  });
});
