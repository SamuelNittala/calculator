import * as React from 'react';
import styled from 'styled-components';
import Key from '../Key/Key';
import type { KeyListPropsType } from './KeyList.types';

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function KeyList({ values, pressedKey }: KeyListPropsType) {
  return (
    <Wrapper className="key-list">
      {values.map((value) => (
        <Key value={value} clicked={pressedKey === value} />
      ))}
    </Wrapper>
  );
}
