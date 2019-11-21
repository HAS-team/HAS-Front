import React from 'react';
import Lect from './Lect';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';

const DOMAIN = 'http://www.gsmboard.kr/';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  background-color: #f5f5f5;
`;

const dummys = [
  {
    askState: '신청중',
    seme: '1학기',
    lecName: '신은주와 함께하는 디자인교실',
    teacher: '신은주',
    grade: '1학년',
    startDate: '2019-6-30',
    endDate: '2019-7-20',
    doDate: '화요일 7,8교시'
  },
  {
    askState: '신청중',
    seme: '1학기',
    lecName: '신은주와 함께하는 디자인교실',
    teacher: '신은주',
    grade: '1학년',
    startDate: '2019-6-30',
    endDate: '2019-7-20',
    doDate: '화요일 7,8교시'
  },
  {
    askState: '신청중',
    seme: '1학기',
    lecName: '신은주와 함께하는 디자인교실',
    teacher: '신은주',
    grade: '1학년',
    startDate: '2019-6-30',
    endDate: '2019-7-20',
    doDate: '화요일 7,8교시'
  }
];

const containStyle = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const LectContain = () => {
  useEffect(() => {
    console.log('LectContain useEffect');
    axios.get(DOMAIN + 'api/course/list').then(res => {
      console.log(res);
      console.log(res.data);
    });
  });

  return (
    <>
      <div style={containStyle}>
        <div>
          <Table>
            <thead>
              <tr>
                <th
                  style={{
                    width: '120px',
                    height: '50px',
                    color: '#707070',
                    fontSize: '1.3rem'
                  }}
                >
                  상태
                </th>
                <th
                  style={{
                    width: '120px',
                    height: '50px',
                    color: '#707070',
                    fontSize: '1.3rem'
                  }}
                >
                  구분
                </th>
                <th
                  style={{
                    width: '250px',
                    height: '50px',
                    color: '#474BFF',
                    fontSize: '1.3rem'
                  }}
                >
                  강좌
                </th>
                <th
                  style={{
                    width: '120px',
                    height: '50px',
                    color: '#707070',
                    fontSize: '1.3rem'
                  }}
                >
                  담당선생님
                </th>
                <th
                  style={{
                    width: '120px',
                    height: '50px',
                    color: '#707070',
                    fontSize: '1.3rem'
                  }}
                >
                  대상학년
                </th>
                <th
                  style={{
                    width: '180px',
                    height: '50px',
                    color: '#707070',
                    fontSize: '1.3rem'
                  }}
                >
                  운영기간
                </th>
                <th
                  style={{
                    width: '120px',
                    height: '50px',
                    color: '#707070',
                    fontSize: '1.3rem'
                  }}
                >
                  강의시간
                </th>
              </tr>
            </thead>
          </Table>
          {dummys.map(data => (
            <Lect
              askState={data.askState}
              seme={data.seme}
              lecName={data.lecName}
              teacher={data.teacher}
              grade={data.grade}
              startDate={data.startDate}
              endDate={data.endDate}
              doDate={data.doDate}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LectContain;
