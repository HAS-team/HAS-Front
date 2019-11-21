import React from 'react';
import ApplyContent from '../ApplyContent/ApplyContent';
import * as S from './style';

const Apply = () => {
  const dummy = {
    TeacherName: '신은주',
    sort: '2019 2학기',
    name: '광주소프트웨어마이스터고등학교.',
    target: '123',
    capacity: 80,
    studentSize: 0,
    lectTime: '목',
    operTime: '2019-12-12 99:99 ~ 22:22',
    totalTime: 999,
    content: 'helloworld',
    openTime: '2019-10-11 12:00:00',
    closeTime: '2019-12-30 12:00:00',
    status: 1
  };

  return (
    <div>
      <S.InfoHeader>
        <S.InfoTitle>{dummy.name}</S.InfoTitle>
        <S.ApplicationStatus>
          {dummy.status === 1 ? '신청됨' : '신청안됨'}
        </S.ApplicationStatus>
      </S.InfoHeader>
      <S.ContentContainer>
        <S.ContentContainerLeft>
          <ApplyContent infoName="구분" infoContent={dummy.sort} />
          <ApplyContent infoName="대상학년" infoContent={dummy.target} />
          <ApplyContent infoName="운영기간" infoContent={dummy.operTime} />
          <ApplyContent infoName="강의시간" infoContent={dummy.totalTime} />
          <ApplyContent infoName="담당선생님" infoContent={dummy.TeacherName} />
          <ApplyContent infoName="총시수" infoContent={dummy.capacity} />
        </S.ContentContainerLeft>
        <S.ContentContainerRight>
          <ApplyContent infoName="인원" infoContent={dummy.studentSize} />
          <ApplyContent infoName="신청기간" infoContent={dummy.closeTime} />
          <ApplyContent infoName="설명" infoContent={dummy.content} />
        </S.ContentContainerRight>
      </S.ContentContainer>
    </div>
  );
};

export default Apply;
