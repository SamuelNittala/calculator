import React from 'react';
import styled from 'styled-components';
import { useCalculator } from '../Calculator/CalculatorContext';
import { handleInput } from '../Calculator/utils';
import type { KeyPropsType } from './Key.types';

const Button = styled.button`
  border-radius: 0.5rem;
  width: 100px;
  margin: 1rem;
  padding: 0.5rem;
  background: ${(props) => (props.className === 'isClicked' ? 'green' : 'pink')};
  font-size: 1.5rem;
  font-family: 'Macondo', cursive;
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
    <div>
      <Button
        type="button"
        ref={buttonRef}
        className={clicked || pointerClick ? 'isClicked' : 'notClicked'}
        onPointerDown={handlePointerClick}
        onPointerUp={() => setPointerClick(false)}
      >
        {value}
      </Button>
    </div>
  );
}

export default Key;
