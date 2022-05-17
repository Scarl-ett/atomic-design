import React from 'react';
import styled from 'styled-components';
import Header from '../_Organisms/Header';
import MainContent from './Content/MainContent';

const Template = styled.div``;

const PageTemplate = ({ type, onChange, onClick, contentText }) => {
  return (
    <Template>
      <Header onChange={onChange} onClick={onClick} />
      {type === 'main' && <MainContent contentText={contentText} />}
    </Template>
  );
};

export default PageTemplate;