import * as React from 'react';
import styled from 'styled-components';
import { clickMatcher } from '../Calculator/utils';
import Key from '../Key/Key';
import type { KeyListPropsType } from './KeyList.types';

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  width: 360px;
  padding: 16px;
  background-color: hsl(223, 31%, 20%);
  border-radius: 0.5rem;
  flex-wrap: wrap;
`;

export default function KeyList({ values, pressedKey }: KeyListPropsType) {
  return (
    <Wrapper className="key-list">
      {values.map((value) => (
        <Key value={value} clicked={clickMatcher(pressedKey, value.toLowerCase())} key={value} />
      ))}
    </Wrapper>
  );
}
