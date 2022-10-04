import React from 'react';
import KeyList from '../KeyList/KeyList';
import CalculatorInput from './CalculatorInput';
import { handleInput } from './utils';
import Header from '../Navigation/Header';
import { useCalculator } from './CalculatorContext';

export default function Calculator() {
  const [pressedKey, setPressedKey] = React.useState('');
  const [input, setInput, error, setError] = useCalculator();

  React.useEffect(() => {
    window.addEventListener('keydown', (event) => {
      setPressedKey(String(event.key));
    });
    window.addEventListener('keyup', () => {
      setPressedKey('');
    });
    return () => {
      window.removeEventListener('keydown', () => {});
      window.removeEventListener('keyup', () => {});
    };
  }, [pressedKey]);

  React.useEffect(() => {
    handleInput(pressedKey, input, setInput, setError);
  }, [pressedKey]);

  return (
    <div>
      <Header>
        <CalculatorInput error={error} input={input} />
        <KeyList
          values={[
            '7',
            '8',
            '90',
            'DEL',
            '4',
            '5',
            '6',
            '+',
            '1',
            '2',
            '3',
            '-',
            '.',
            '0',
            '/',
            'x',
            'RESET',
            '=',
          ]}
          pressedKey={String(pressedKey)}
        />
      </Header>
    </div>
  );
}
