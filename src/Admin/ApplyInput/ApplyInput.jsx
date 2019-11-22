import React, { useState } from 'react';
import * as S from './style';
import Header from '../../Common/Component/Header/Header';
import axios from 'axios';

const ApplyInput = () => {
  const token = localStorage.getItem('token');

  const postData = async () => {
    try {
      const res = await axios.post(
        'http://www.gsmboard.kr/api/course/create',
        state,
        {
          headers: {
            token: token
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = e => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };
  const [state, setState] = useState({
    name: '',
    sort: '',
    capacity: '',
    lectTime: '',
    operTime: '2019-11-22 12:05',
    totalTime: '',
    closeTime: '',
    content: ''
  });
  return (
    <div>
      <Header />
      <S.InfoHeader>
        <S.InfoTitle
          placeholder=" 강좌제목을 입력하세요"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <S.SubmitBtn onClick={postData}>완료</S.SubmitBtn>
      </S.InfoHeader>

      <S.ContentContainer>
        <S.ContentContainerLeft>
          <S.InfoContainer>
            <S.InfoName>구분</S.InfoName>
            <S.InfoContent
              placeholder="구분을 입력하세요"
              name="sort"
              value={state.sort}
              onChange={handleChange}
            />
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoName>대상학년</S.InfoName>
            <S.InfoContent
              placeholder="학년을 입력하세요"
              name="target"
              value={state.target}
              onChange={handleChange}
            />
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoName>운영기간</S.InfoName>
            <S.InfoContent
              placeholder="000-00-00~0000-00-00"
              name="operTime"
              value={state.operTime}
              onChange={handleChange}
            />
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoName>강의시간</S.InfoName>
            <S.InfoContent
              placeholder="시간을 입력하세요"
              name="lectTime"
              value={state.lectTime}
              onChange={handleChange}
            />
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoName>담당선생님</S.InfoName>
            <S.InfoContent placeholder="담당선생님을 입력하세요" />
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoName>총시수</S.InfoName>
            <S.InfoContent
              placeholder="총시수를 입력하세요"
              name="totalTime"
              value={state.totalTime}
              onChange={handleChange}
            />
          </S.InfoContainer>
        </S.ContentContainerLeft>
        {/**/}
        <S.ContentContainerRight>
          <S.InfoContainer>
            <S.InfoName>인원</S.InfoName>
            <S.InfoContent
              placeholder="강좌 인원을 입력하세요"
              name="capacity"
              value={state.capacity}
              onChange={handleChange}
            />
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoName>신청기간</S.InfoName>
            <S.InfoContent
              placeholder="~0000-00-00-03:22"
              name="closeTime"
              value={state.closeTime}
              onChange={handleChange}
            />
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoName>설명</S.InfoName>
            <S.InfoContent
              placeholder="설명을 입력하세요"
              name="content"
              value={state.content}
              onChange={handleChange}
            />
          </S.InfoContainer>
        </S.ContentContainerRight>
      </S.ContentContainer>
    </div>
  );
};

export default ApplyInput;
