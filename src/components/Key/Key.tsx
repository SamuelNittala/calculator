import React from 'react';
import styled from 'styled-components';
import { useCalculator } from '../Calculator/CalculatorContext';
import { handleInput } from '../Calculator/utils';
import type { KeyPropsType } from './Key.types';

const Button = styled.button`
  border-radius: 0.5rem;
  width: 80px;
  height: 50px;
  margin: 10px 5px;
  font-family: 'League Spartan', sans-serif;
  background: ${(props) => (props.className === 'isClicked' ? 'green' : 'hsl(30,25%,89%)')};
  font-size: 1.5rem;
  font-weight: bold;
`;

function Key({ value, clicked }: KeyPropsType) {
  const buttonRef = React.createRef<HTMLButtonElement>();
  const [input, setInput, error, setError] = useCalculator();
  const [pointerClick, setPointerClick] = React.useState(false);

  React.useEffect(() => {
    if (clicked && !error) {
      buttonRef.current?.click();
    }
  }, [clicked]);

  const handlePointerClick = (e: any) => {
    if (!clicked) {
      handleInput(e.target.innerText, input, setInput, setError);
      setPointerClick(true);
    }
  };
  return (
    <Button
      type="button"
      ref={buttonRef}
      className={clicked || pointerClick ? 'isClicked' : 'notClicked'}
      onPointerDown={handlePointerClick}
      onPointerUp={() => setPointerClick(false)}
    >
      {value}
    </Button>
  );
}

export default Key;
