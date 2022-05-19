export const KEY_LIST = {
  BACKSPACE: 'Backspace',
  ENTER: 'Enter',
  DELETE: 'Delete',
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
  'x',
  KEY_LIST.BACKSPACE,
  KEY_LIST.ENTER,
  KEY_LIST.DELETE,
  'DEL',
  'RESET',
];

export const handleInput = (pressedKey: string, input: any, setInput: any, setError: any) => {
  if (ALLOWED_KEYS.find((key) => key === pressedKey)) {
    setError(false);
    if (
      pressedKey === KEY_LIST.BACKSPACE ||
      pressedKey === KEY_LIST.DELETE ||
      pressedKey === 'DEL'
    ) {
      setInput(input.slice(0, -1));
    } else if (pressedKey === KEY_LIST.ENTER || pressedKey === '=') {
      try {
        if (input) {
          // eslint-disable-next-line no-eval
          const res = window.eval(input);
          if (typeof res !== 'number') {
            throw new Error();
          }
          let zeroIndex = String(res).length - 1;
          while (String(res)[zeroIndex] === '0') {
            if (String(res)[zeroIndex] === '.') break;
            zeroIndex -= 1;
          }
          setInput(String(Number(res).toFixed(4)).slice(0, zeroIndex + 1));
        }
      } catch (err) {
        setError(true);
        setInput('');
      }
    } else if (pressedKey.toLowerCase() === 'c' || pressedKey === 'RESET') {
      setInput('');
    } else {
      setInput((prev: string) => prev.concat(pressedKey === 'x' ? '*' : pressedKey));
    }
  }
};

export const clickMatcher = (keyPressed: string | undefined, value: string) => {
  switch (value) {
    case 'del':
      return keyPressed === KEY_LIST.DELETE;
    case 'reset':
      return keyPressed === 'C' || keyPressed === 'c';
    case 'x':
      return keyPressed === '*';
    default:
      return keyPressed === value;
  }
};
