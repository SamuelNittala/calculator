import React from 'react';
import KeyList from '../KeyList/KeyList';
import { ALLOWED_KEYS, calculate, KEY_LIST } from './utils';

export default function Calculator() {
  const [pressedKey, setPressedKey] = React.useState('');
  const [input, setInput] = React.useState('');

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
      if (pressedKey === KEY_LIST.BACKSPACE) {
        setInput(input.slice(0, -1));
      } else if (pressedKey === KEY_LIST.ENTER) {
        calculate(input);
      } else {
        setInput((prev) => prev.concat(pressedKey));
      }
    }
  }, [pressedKey]);

  return (
    <div>
      <h1>Calculator</h1>
      <input type="text" value={input} />
      <KeyList
        values={['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-']}
        pressedKey={String(pressedKey)}
      />
    </div>
  );
}
