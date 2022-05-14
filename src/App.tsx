import * as React from 'react';
import Calculator from './components/Calculator/Calculator';
import CalculatorProvider from './components/Calculator/CalculatorProvider';

function App() {
  return (
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  );
}

export default App;
