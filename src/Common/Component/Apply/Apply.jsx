import React, { useState, useEffect } from 'react';
import ApplyContent from '../ApplyContent/ApplyContent';
import * as S from './style';
import axios from 'axios';
import queryString from 'query-string';
import Header from '../Header/Header';

const CommonApply = ({ location }) => {
  const query = queryString.parse(location.search);
  console.log(query.courseIdx);
  const [applyInfo, setApplyInfo] = useState({});
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://www.gsmboard.kr/api/course/detail?course_id=${query.courseIdx}`,
          {
            headers: {
              token: token
            }
          }
        );
        console.log(response);
        setApplyInfo(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [query]);
  return (
    <div>
      <Header />
      <S.InfoHeader>
        <S.InfoTitle>{applyInfo.name}</S.InfoTitle>
        <S.ApplicationStatus>
          {applyInfo.status === 1 ? '신청됨' : '신청안됨'}
        </S.ApplicationStatus>
      </S.InfoHeader>
      <S.ContentContainer>
        <S.ContentContainerLeft>
          <ApplyContent infoName="구분" infoContent={applyInfo.sort} />
          <ApplyContent infoName="대상학년" infoContent={applyInfo.target} />
          <ApplyContent infoName="운영기간" infoContent={applyInfo.operTime} />
          <ApplyContent infoName="강의시간" infoContent={applyInfo.totalTime} />
          <ApplyContent infoName="담당선생님" infoContent={applyInfo.teacher} />
          <ApplyContent infoName="총시수" infoContent={applyInfo.capacity} />
        </S.ContentContainerLeft>
        <S.ContentContainerRight>
          <ApplyContent infoName="인원" infoContent={applyInfo.studentSize} />
          <ApplyContent infoName="신청기간" infoContent={applyInfo.closeTime} />
          <ApplyContent infoName="설명" infoContent={applyInfo.content} />
        </S.ContentContainerRight>
      </S.ContentContainer>
    </div>
  );
};

export default CommonApply;
