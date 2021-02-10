import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('<App />', () => {
  it('renders app heading', () => {
    render(<App />);
    expect(screen.getByText(/EnergyAustralia Coding Test/i)).toBeInTheDocument();
  });
});
