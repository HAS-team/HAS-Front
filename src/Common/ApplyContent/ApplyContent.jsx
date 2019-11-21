import React from 'react';
import * as S from './style';

const ApplyContent = ({ infoName, infoContent }) => {
  return (
    <div>
      <S.InfoContainer>
        <S.InfoName>{infoName}</S.InfoName>
        <S.InfoContent>{infoContent}</S.InfoContent>
      </S.InfoContainer>
    </div>
  );
};

export default ApplyContent;
