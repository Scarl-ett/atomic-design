import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useState } from 'react';
import PageTemplate from '../../_Templates/PageTemplate';

const Main = () => {
  const [contentText, setContentText] = useState('');
  const [Keyword, setKeyword] = useState('');

  const onChange = (value) => {
    setKeyword(value);
  }

  const onClick = () => {
    setContentText(Keyword);
  }
  return (
    <PageTemplate
      type={'main'}
      onChange={onChange}
      onClick={onClick}
      contentText={contentText}
    />
  );
};

export default Main;