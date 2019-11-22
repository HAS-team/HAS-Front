import React, { useState, useCallback } from 'react';
import * as S from './style';
import Logo from '../../../Assets/Logo.png';

const Header = ({ isAdmin }) => {
  console.log('isAdmin: ' + isAdmin);

  if (isAdmin) {
    return (
      <S.headerContainer>
        <S.LogoIcon src={Logo} />
        <strong>admin</strong>
        <S.NavItem>학생 생성하기</S.NavItem>
        <S.UserInfoText>안녕하세요</S.UserInfoText>
      </S.headerContainer>
    );
  } else {
    return (
      <S.headerContainer>
        <S.LogoIcon src={Logo} />
        <S.NavItem>학생계정임</S.NavItem>
        <S.UserInfoText>안녕하세요</S.UserInfoText>
      </S.headerContainer>
    );
  }
const style = {
  fontSize: '1.7rem',
  position: 'absolute',
  left: '15%',
  color: '#474bff'
};

const Header = () => {
  return (
    <S.headerContainer>
      <S.LogoIcon src={Logo} />
      <strong style={style}>admin</strong>
      <S.NavItem>새 강좌 생성하기</S.NavItem>
      <S.UserInfoText>안녕하세요 신은주 선생님</S.UserInfoText>
    </S.headerContainer>
  );
};
export default Header;
