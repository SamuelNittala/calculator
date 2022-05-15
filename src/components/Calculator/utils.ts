export const KEY_LIST = {
  BACKSPACE: 'Backspace',
  ENTER: 'Enter',
};
export const OPERATORS = {
  PLUS: '+',
  MINUS: '-',
  MULTIPLY: '*',
  DIVIDE: '/',
};

export const ALLOWED_KEYS = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '.',
  '+',
  '-',
  '*',
  '/',
  '=',
  'C',
  'c',
  KEY_LIST.BACKSPACE,
  KEY_LIST.ENTER,
];

export const handleInput = (pressedKey: string, input: any, setInput: any, setError: any) => {
  if (ALLOWED_KEYS.find((key) => key === pressedKey)) {
    setError(false);
    if (pressedKey === KEY_LIST.BACKSPACE) {
      setInput(input.slice(0, -1));
    } else if (pressedKey === KEY_LIST.ENTER || pressedKey === '=') {
      try {
        if (input) {
          // eslint-disable-next-line no-eval
          const res = window.eval(input);
          if (typeof res !== 'number') {
            throw new Error();
          }
          setInput(String(res));
        }
      } catch (err) {
        setError(true);
        setInput('');
      }
    } else if (pressedKey.toLowerCase() === 'c') {
      setInput('');
    } else {
      setInput((prev: string) => prev.concat(pressedKey));
    }
  }
};
