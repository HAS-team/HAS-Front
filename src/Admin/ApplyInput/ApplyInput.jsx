import React, { useState } from 'react';
import * as S from './style';
import ApplyInputForm from '../ApplyInputForm/ApplyInputForm';

const ApplyInput = () => {
  const [state, setState] = useState({
    name: '',
    sort: '',
    capacity: '',
    lectTime: '',
    operTime: '2019-11-22 12:05',
    closerTime: '',
    content: ''
  });
  return (
    <div>
      <S.InfoHeader>
        <S.InfoTitle placeholder=" 강좌제목을 입력하세요" />
      </S.InfoHeader>
      <S.ContentContainer>
        <S.ContentContainerLeft>
          <S.InfoContainer>
            <S.InfoName>구분</S.InfoName>
            <S.InfoContent placeholder="구분을 입력하세요" />
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoName>대상학년</S.InfoName>
            <S.InfoContent placeholder="학년을 입력하세요" />
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoName>운영기간</S.InfoName>
            <S.InfoContent placeholder="000-00-00~0000-00-00" />
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoName>강의시간</S.InfoName>
            <S.InfoContent placeholder="시간을 입력하세요" />
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoName>담당선생님</S.InfoName>
            <S.InfoContent placeholder="담당선생님을 입력하세요" />
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoName>총시수</S.InfoName>
            <S.InfoContent placeholder="총시수를 입력하세요" />
          </S.InfoContainer>
        </S.ContentContainerLeft>
        {/**/}
        <S.ContentContainerRight>
          <S.InfoContainer>
            <S.InfoName>인원</S.InfoName>
            <S.InfoContent placeholder="강좌 인원을 입력하세요" />
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoName>신청기간</S.InfoName>
            <S.InfoContent placeholder="~0000-00-00-03:22" />
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoName>설명</S.InfoName>
            <S.InfoContent placeholder="설명을 입력하세요" />
          </S.InfoContainer>
        </S.ContentContainerRight>
      </S.ContentContainer>
    </div>
  );
};

export default ApplyInput;
