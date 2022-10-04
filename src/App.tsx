import * as React from 'react';
import Calculator from './components/Calculator/Calculator';
import CalculatorProvider from './components/Calculator/CalculatorProvider';

function addTag(d: Document, s: string, id: string) {
  const js = d.createElement(s) as HTMLScriptElement;
  const stags: any = d.getElementsByTagName(s)[0];
  js.id = id;
  js.src = '/currentversion.js';
  stags.parentNode.insertBefore(js, stags);
}
function App() {
  React.useEffect(() => {
    addTag(document, 'script', 'version-js');
  }, []);
  return (
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  );
}

export default App;
