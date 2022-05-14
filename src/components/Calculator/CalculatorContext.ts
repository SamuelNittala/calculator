import * as React from 'react';

// eslint-disable-next-line no-spaced-func
const CalculatorContext = React.createContext<any>('');

const useCalculator = () => {
  const calcContext = React.useContext(CalculatorContext);
  if (!calcContext) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return calcContext;
};

export { useCalculator, CalculatorContext };
