import { MemoryRouter } from 'react-router';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ErrorButton } from './ErrorButton';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

describe('ErrorButton', () => {
  it('should render', () => {
    render(
      <MemoryRouter>
        <ErrorButton />
      </MemoryRouter>
    );
    const renderText = screen.getByText('Create rendering error');
    expect(renderText).toBeInTheDocument();
  });
  it('test click', () => {
    render(
      <MemoryRouter>
        <ErrorBoundary>
          <ErrorButton />
        </ErrorBoundary>
      </MemoryRouter>
    );
    const btn = screen.getByText('Create rendering error');
    fireEvent.click(btn);
    const renderText = screen.getByText('Something went wrong');
    expect(renderText).toBeInTheDocument();
  });
});
