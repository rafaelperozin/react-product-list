import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders initial page', () => {
  const {getByText} = render(<App />);
  const titleElement = getByText('Awesome Product List');  
  expect(titleElement).toBeInTheDocument();
});
