/* eslint-disable implicit-arrow-linebreak */
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line object-curly-newline
import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Key from './Key';
import CalculatorProvider from '../Calculator/CalculatorProvider';

const defaultMarkup = (value: string, clicked: boolean): RenderResult =>
  render(
    <CalculatorProvider>
      <Key value={value} clicked={clicked} />
    </CalculatorProvider>,
  );

test('renders Key component', () => {
  defaultMarkup('1', false);
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('if the current key is active bg color is green', () => {
  defaultMarkup('1', true);
  expect(screen.getByText('1')).toHaveStyle('background-color: green');
});

test('pointer clicks change background color to green', () => {
  defaultMarkup('2', false);
  fireEvent.pointerDown(screen.getByText('2'));
  expect(screen.getByText('2')).toHaveStyle('background-color: green');
});
