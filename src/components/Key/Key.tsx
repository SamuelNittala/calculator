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
  box-shadow: 10px 10px 10px -8px rgba(64, 78, 114, 0.75);
  -webkit-box-shadow: 10px 10px 10px -8px rgba(64, 78, 114, 0.75);
  -moz-box-shadow: 10px 10px 10px -8px rgba(64, 78, 114, 0.75);
  font-size: 1.5rem;
  font-weight: bold;

  &:nth-child(17) {
    width: 170px;
    background: ${(props) => (props.className === 'isClicked' ? 'gray' : 'hsl(225, 21%, 49%)')};
    box-shadow: 10px 10px 33px 1px rgba(64, 78, 114, 0.75);
    -webkit-box-shadow: 10px 10px 33px 1px rgba(64, 78, 114, 0.75);
    -moz-box-shadow: 10px 10px 33px 1px rgba(64, 78, 114, 0.75);
    color: white;
    letter-spacing: 3px;
  }
  &:nth-child(18) {
    background: ${(props) => (props.className === 'isClicked' ? 'gray' : 'hsl(6, 63%, 50%)')};
    box-shadow: 10px 10px 36px -11px rgba(147, 38, 26, 0.75);
    -webkit-box-shadow: 10px 10px 36px -11px rgba(147, 38, 26, 0.75);
    -moz-box-shadow: 10px 10px 36px -11px rgba(147, 38, 26, 0.75);
    color: white;
    width: 170px;
  }
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
