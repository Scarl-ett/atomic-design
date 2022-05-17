import React from 'react';
import styled from 'styled-components';
import Button from '../_Atoms/Button';
import Input from '../_Atoms/Input';
import Text from '../_Atoms/Text';

const Container = styled.div`
  display: inline-block;
`;

const AreaBox = styled.div`
  display: flex;
  ${({ type }) => type === 'title' && `
    height: 20px;
    line-height: 20px;
  `}
`;

const SearchBarInput = styled(Input)`
  margin-right: 10px;
`

const SearchBar = ({ onChange, onClick }) => {
  return (
    <Container>
      <AreaBox type={'title'}>
        <Text value={'SEARCH THE SITE'} />
      </AreaBox>
      <AreaBox>
        <SearchBarInput onChange={onChange} />
        <Button text={'SEARCH'} onClick={onClick} />
      </AreaBox>
    </Container>
  );
};

export default SearchBar;