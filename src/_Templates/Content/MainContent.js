import React from 'react';
import styled from 'styled-components';
import Text from '../../_Atoms/Text';

const Container = styled.div`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid #101010;
  margin: 20px 4vw;
`;

const MainContent = ({ contentText }) => {
  return (
    <Container>
      <Text type={'large'} value={'Search Button Click! Show Keyword'} />
      <Text type={'large'} value={`CurrentKeyword: ${contentText}`} />
    </Container>
  );
};

export default MainContent;