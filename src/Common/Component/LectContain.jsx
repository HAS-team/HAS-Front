import React, { useState } from 'react';
import Lect from './Lect';
import styled, { keyframes } from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import qs from 'query-string';
import Header from './Header/Header';

const DOMAIN = 'http://www.gsmboard.kr/';

const slideUp = keyframes`
  from {
    transform: translateY(-50%);
    opacity: 0;
  } to {
    transform: translateY(0%); 
    opacity: 1;
  }
`;

const Table = styled.table`
  position: relative;
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  background-color: #f5f5f5;
  transition: all 1s;
  animation: 1s ${slideUp} ease-in-out;
`;

const containStyle = {
  height: '100%',
  marginLeft: '10rem',
  marginRight: '10rem',
  marginTop: '3rem',
  marginBottom: '3rem'
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center'
};

const clickHandle = (e, courseIdx) => {
  e.preventDefault();
  window.location = '/apply?courseIdx=' + courseIdx;
};

const LectContain = ({ match }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [course, setCourse] = useState([]);

  const { usermod } = match.params;
  console.log(usermod);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(DOMAIN + 'api/course/list', {
        headers: {
          token: token
        }
      })
      .then(res => {
        setLoaded(true);
        console.log(res);
        console.log(res.data);
        const courses = res.data.courses.concat([]);
        console.log(courses);
        setCourse(courses);
      });
  }, []);

  if (!isLoaded) return <p>로딩 중...</p>;

  return (
    <>
      <Header />
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
                <th
                  style={{
                    width: '120px',
                    height: '50px',
                    color: '#707070',
                    fontSize: '1.3rem'
                  }}
                >
                  삭제
                </th>
              </tr>
            </thead>
          </Table>
          {course.map(data => (
            <Lect
              askState={data.status}
              seme={data.sort}
              lecName={data.name}
              teacher={data.teacher}
              grade={data.target}
              date={data.operTime}
              doDate={data.lectTime}
              courseIdx={data.courseIdx}
              key={data.courseIdx}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LectContain;
