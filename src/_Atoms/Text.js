import React from 'react';
import styled from 'styled-components';

const DefaultText = styled.span`
  font-size: 1.2rem;
`
const SmallText = styled.span`
  font-size: 0.5rem;
`
const LargeText = styled.span`
  font-size: 1.8rem;
`

const Text = ({ className, type = "default", value }) => {
  return (
    <>
      {type === 'default' && <DefaultText className={className}>{value}</DefaultText>}
      {type === 'small' && <SmallText className={className}>{value}</SmallText>}
      {type === 'large' && <LargeText className={className}>{value}</LargeText>}
    </>
  );
};

export default Text;  