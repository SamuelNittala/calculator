import React from 'react';
import styled from 'styled-components';
import type { KeyPropsType } from './Key.types';

const Wrapper = styled.div`
  background: grey;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;
const Button = styled.button`
  padding: 1.5rem;
  border-radius: 0.5rem;
  width: 10px;
  background: ${(props) => (props.className === 'isClicked' ? 'green' : 'pink')};
`;

function Key({ value, clicked }: KeyPropsType) {
  const buttonRef = React.createRef<HTMLButtonElement>();
  React.useEffect(() => {
    if (clicked) {
      buttonRef.current?.click();
    }
  }, [clicked]);
  return (
    <Wrapper>
      <Button type="button" ref={buttonRef} className={clicked ? 'isClicked' : 'notClicked'}>
        {value}
      </Button>
    </Wrapper>
  );
}

export default Key;
