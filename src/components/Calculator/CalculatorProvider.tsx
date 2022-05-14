import * as React from 'react';
import { CalculatorContext } from './CalculatorContext';

export default function CalculatorProvider(props: any) {
  const [input, setInput] = React.useState('');
  const [error, setError] = React.useState(false);
  const value = React.useMemo(() => [input, setInput, error, setError], [input, error]);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <CalculatorContext.Provider value={value} {...props} />;
}
