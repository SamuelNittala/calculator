import React from 'react';
import styled from 'styled-components';

type PropsType = {
  input: string;
  error: boolean;
};

const Input = styled.input`
  display: block;
  min-width: 350px;
  min-height: 40px;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  text-align: right;
  color: white;
  font-family: 'League Spartan', sans-serif;
  padding: 1.25rem;
  background-color: hsl(224, 36%, 15%);
  border-color: hsl(224, 36%, 15%);
  border-radius: 0.5rem;
  font-size: 32px;
  letter-spacing: 2px;
`;
const ErrorMessage = styled.p`
  color: red;
  font-size: 2rem;
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
