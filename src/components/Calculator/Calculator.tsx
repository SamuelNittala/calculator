import React from 'react';
import KeyList from '../KeyList/KeyList';
import CalculatorInput from './CalculatorInput';
import { ALLOWED_KEYS, KEY_LIST } from './utils';
import Header from '../Navigation/Header';

export default function Calculator() {
  const [pressedKey, setPressedKey] = React.useState('');
  const [input, setInput] = React.useState('');
  const [error, setError] = React.useState(false);

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
    if (ALLOWED_KEYS.find((key) => key === pressedKey)) {
      setError(false);
      if (pressedKey === KEY_LIST.BACKSPACE) {
        setInput(input.slice(0, -1));
      } else if (pressedKey === KEY_LIST.ENTER || pressedKey === '=') {
        try {
          setInput(String(window.eval(input)));
        } catch (err) {
          setError(true);
        }
      } else {
        setInput((prev) => prev.concat(pressedKey));
      }
    }
  }, [pressedKey]);

  return (
    <div>
      <Header>
        <CalculatorInput error={error} input={input} />
        <KeyList
          values={['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '=']}
          pressedKey={String(pressedKey)}
        />
      </Header>
    </div>
  );
}
