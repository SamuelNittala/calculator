import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const StyledHeader = styled.h1`
  font-size: 30px;
  margin: 0;
  color: white;
`;
export default function Header({ children }: any) {
  return (
    <Wrapper>
      <StyledHeader> calc</StyledHeader>
      {children}
    </Wrapper>
  );
}
