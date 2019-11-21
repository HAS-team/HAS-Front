import React, { useState, useCallback } from 'react';
import * as S from './style';
import Logo from '../../../Assets/Logo.png';

const Header = () => {
  return (
    <>
      <S.headerContainer>
        <S.LogoIcon src={Logo} />
        <S.NavItem>학생 생성하기</S.NavItem>
        <S.UserInfoText>안녕하세요 신은주 선생님</S.UserInfoText>
      </S.headerContainer>
    </>
  );
};

export default Header;
