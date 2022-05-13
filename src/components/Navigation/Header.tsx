import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  max-width: 800px;
`;

const StyledHeader = styled.h1`
  font-size: 4rem;
  width: 400px;
  margin: 0 auto;
  letter-spacing: 0.5rem;
  font-family: 'Macondo', cursive;
`;
export default function Header({ children }: any) {
  return (
    <Wrapper>
      <StyledHeader> Calculator </StyledHeader>
      {children}
    </Wrapper>
  );
}
