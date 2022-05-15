/* eslint-disable implicit-arrow-linebreak */
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderResult, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import KeyList from './KeyList';
import CalculatorProvider from '../Calculator/CalculatorProvider';

const defaultMarkup = (value: Array<string>, pressedKey: string): RenderResult =>
  render(
    <CalculatorProvider>
      <KeyList values={value} pressedKey={pressedKey} />
    </CalculatorProvider>,
  );

const mockValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
test('renders KeyList component', () => {
  defaultMarkup(mockValues, '1');
  mockValues.forEach((value) => {
    expect(screen.getByText(value)).toBeInTheDocument();
  });
});

test('keylist elements does not have green bg, when no key is pressed', () => {
  defaultMarkup(mockValues, '');
  mockValues.forEach((value) => {
    expect(screen.getByText(value)).toHaveStyle('background-color: pink');
  });
});
