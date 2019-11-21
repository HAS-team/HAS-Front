import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid lightgray;
  border-collapse: collapse;
  margin-bottom: 2rem;
  text-align: center;
`;

const LectList = ({
  askState,
  seme,
  lecName,
  teacher,
  grade,
  doDate,
  date
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
              {askState}
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
              {lecName}
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
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default LectList;
