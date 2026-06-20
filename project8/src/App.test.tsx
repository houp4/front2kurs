import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Main from './main/Main';

test('renders site title', () => {
  render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  );
  expect(screen.getByText('Футбольные клубы мира')).toBeInTheDocument();
});
