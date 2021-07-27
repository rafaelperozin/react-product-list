import React from 'react';
import { render } from '@testing-library/react';
import {ProductItem} from '../ProductItem';

describe("Product Item", () => {
  test('Should display title and description', () => {
    const {getByText} = render(<ProductItem name="Test Product" description="Aweosme description" type="default" />);
    const titleElement = getByText('Test Product');
    const descriptionElement = getByText('Aweosme description');
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
  test('Should display flag NEW', () => {
    const {getByText} = render(<ProductItem name="Test Product" description="Aweosme description" type="new" />);
    const flagElement = getByText('new');
    expect(flagElement).toBeInTheDocument();
  });
  test('Should display flag FREE', () => {
    const {getByText} = render(<ProductItem name="Test Product" description="Aweosme description" type="free" />);
    const flagElement = getByText('free');
    expect(flagElement).toBeInTheDocument();
  });
})
