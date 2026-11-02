import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the category list', () => {
  render(<App />);
  const hats = screen.getByText(/hats/i);
  expect(hats).toBeInTheDocument();
});
