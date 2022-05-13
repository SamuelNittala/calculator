import React from 'react';
import styled from 'styled-components';
import type { KeyPropsType } from './Key.types';

const Button = styled.button`
  border-radius: 0.5rem;
  width: 100px;
  margin: 1rem;
  padding: 0.5rem;
  background: ${(props) => (props.className === 'isClicked' ? 'green' : 'pink')};
`;
const ButtonValue = styled.h1`
  margin: 0 auto;
`;

function Key({ value, clicked }: KeyPropsType) {
  const buttonRef = React.createRef<HTMLButtonElement>();
  React.useEffect(() => {
    if (clicked) {
      buttonRef.current?.click();
    }
  }, [clicked]);
  return (
    <div>
      <Button type="button" ref={buttonRef} className={clicked ? 'isClicked' : 'notClicked'}>
        <ButtonValue>{value}</ButtonValue>
      </Button>
    </div>
  );
}

export default Key;
