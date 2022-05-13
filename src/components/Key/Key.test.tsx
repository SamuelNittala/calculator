// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Key from './Key';

test('renders Key component', () => {
  render(<Key value="1" clicked={false} />);
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('if the current key is active bg color is green', () => {
  render(<Key value="1" clicked />);
  expect(screen.getByText('1')).toHaveStyle('background-color: green');
});
