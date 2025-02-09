import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ErrorPage404 } from './ErrorPage404';

describe('Error Page', () => {
  it('should render', () => {
    render(
      <MemoryRouter>
        <ErrorPage404 />
      </MemoryRouter>
    );
    const renderText = screen.getByText('Page not found');
    expect(renderText).toBeInTheDocument();
  });
});
