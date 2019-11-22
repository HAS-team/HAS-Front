import React from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

const deleteClickHandle = courseIdx => {
  const choice = window.confirm('삭제하시겠습니까?');
  if (choice) {
    alert(`${courseIdx}번 강좌를 삭제하겠습니다`);

    axios
      .delete(
        `http://www.gsmboard.kr/api/course/delete?course_id=${courseIdx}`,
        {
          headers: {
            Token: localStorage.getItem('token')
          }
        }
      )
      .then(res => {
        console.log(res.status);

        if (res.status === 200) {
          alert(`${courseIdx}번 강좌 삭제 성공`);
          window.location.reload();
        } else alert('삭제 실패');
      });
  }
};

const lectClickHandle = (e, courseIdx) => {
  e.preventDefault();
  window.location = '/apply?courseIdx=' + courseIdx;
};

const slideUp = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  } to {
    transform: translateY(0%); 
    opacity: 1;
  }
`;

const Table = styled.table`
  position: relative;
  transition: all 1s;
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid lightgray;
  border-collapse: collapse;
  margin-bottom: 2rem;
  text-align: center;
  animation: 1s ${slideUp} ease-in-out;
`;

const Button = styled.button`
  all: unset;
  border: 1px solid #707070;
  padding: 5px;
  color: #707070;
  border-radius: 6px;
  transition: all 0.8s;
  &:hover {
    transform: scale(1.1);
    background-color: #707070;
    color: #eeeeee;
  }
`;

const LectList = ({
  askState,
  seme,
  lecName,
  teacher,
  grade,
  doDate,
  date,
  courseIdx
}) => {
  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <td
              style={{
                width: '120px',
                color: '#bdbdbd'
              }}
            >
              {askState === 1 ? '신청가능' : '신청불가'}
            </td>
            <td
              style={{
                width: '120px',
                color: '#bdbdbd'
              }}
            >
              {seme}
            </td>
            <td
              style={{
                width: '250px',
                color: '#bdbdbd'
              }}
            >
              <a
                href="#"
                onClick={e => {
                  lectClickHandle(e, courseIdx);
                }}
              >
                {lecName}
              </a>
            </td>
            <td
              style={{
                width: '120px',
                color: '#bdbdbd'
              }}
            >
              {teacher}
            </td>
            <td
              style={{
                width: '120px',
                color: '#bdbdbd'
              }}
            >
              {grade}
            </td>
            <td
              style={{
                width: '180px',
                color: '#bdbdbd'
              }}
            >
              {date}
            </td>
            <td
              style={{
                width: '120px',
                color: '#bdbdbd'
              }}
            >
              {doDate}
            </td>
            <td
              style={{
                width: '120px',
                color: '#bdbdbd'
              }}
            >
              <Button
                onClick={() => {
                  deleteClickHandle(courseIdx);
                }}
              >
                삭제
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default LectList;
