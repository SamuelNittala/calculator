import * as React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  });
  return (
    <div>
      <h1>Hello Raja</h1>
      {count}
    </div>
  );
}

export default App;
