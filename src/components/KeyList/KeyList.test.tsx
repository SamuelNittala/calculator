// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import KeyList from './KeyList';

test('renders KeyList component', () => {
  const mockValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  render(<KeyList values={mockValues} pressedKey="1" />);
  mockValues.forEach((value) => {
    expect(screen.getByText(value)).toBeInTheDocument();
  });
});

test('if keylist elements does not have green bg, when no key is pressed', () => {
  const mockValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  render(<KeyList values={mockValues} />);
  mockValues.forEach((value) => {
    expect(screen.getByText(value)).toHaveStyle('background-color: pink');
  });
});
