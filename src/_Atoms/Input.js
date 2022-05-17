import React from 'react';
import styled from 'styled-components';

const InputBlock = styled.input`
  width: 180px;
  height: 40px;
  color: #4b3f3c;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 40px;
  background-color: #120000;
  outline-style: none;
  border: 0;
  padding: 0 1rem;
`;

const Input = ({ className, onChange }) => {
  return (
    <InputBlock
      className={className}
      placeholder={'ENTER KEYWORD'}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;