import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greetings', () => {
  render(<App />);
  const text = screen.getByText(/test/i);
  expect(text).toBeInTheDocument();
});
