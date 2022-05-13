import React from 'react';
import styled from 'styled-components';

type PropsType = {
  input: string;
  error: boolean;
};

const Input = styled.input`
  display: block;
  min-width: 500px;
  margin: 1.5rem auto;
  padding: 1.25rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-family: 'Macondo', cursive;
`;
const ErrorMessage = styled.p`
  color: red;
  font-size: 2rem;
  font-family: 'Macondo', cursive;
  width: 400px;
  margin: 1.5rem auto;
`;

export default function CalculatorInput({ input, error }: PropsType) {
  return (
    <div>
      <Input type="text" value={input} />
      {error && <ErrorMessage style={{ color: 'red' }}>Invalid Input</ErrorMessage>}
    </div>
  );
}
