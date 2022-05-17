import React from 'react';
import styled from 'styled-components';

const ButtonBlock = styled.button`
  width: 120px;
  height: 40px;
  color: #f5f4dc;
  font-size: 1.8rem;
  font-weight: bold;
  background-color: #c26105;
  border: 0;
  cursor: pointer;
`;

const Button = ({ text, onClick }) => {
  return (
    <ButtonBlock onClick={onClick}>
      {text}
    </ButtonBlock>
  );
};

export default Button;