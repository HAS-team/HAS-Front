import React from 'react';
import peopleImage from './Assets/people_img.png';
import bgWave3 from './Assets/bg_wave_3.png';
import styled from 'styled-components';

const BGImage = styled.img`
  display: inline-block;
  position: fixed;
  width: 100vw;
  height: 100vh;
  object-fit: contain;
  left: 25%;
  top: 0%;
`;

const BGPeople = styled.img`
  display: inline-block;
  position: fixed;
  width: 60vw;
  height: 60vh;
  object-fit: contain;
  left: 44%;
  top: 34%;
`;

const Banner = styled.p`
  font-weight: bold;
  line-height: 110%;
  color: #474bff;
`;

const Notion = styled.p`
  color: #eeeeee;
`;

const Input = styled.input`
  all: unset;
  display: block;
  width: 100px;
  height: 50px;
  border-radius: 30%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  marin-bottom: 10%;
`;

const Login = () => {
  return (
    <div>
      <div>Logo</div>
      <div>
        <div>
          <Banner>After school</Banner>
          <Banner>Application System for You</Banner>
          <Notion>
            지금 당장 HAS에서 당신만을 위한 방과후 신청 시스템을 만나세요.
          </Notion>
        </div>
        <div>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <a href="#">로그인</a>
        </div>
      </div>
      <div className="">
        <BGImage src={bgWave3} alt="bgWave3" />
        <BGPeople src={peopleImage} alt="people" />
      </div>
    </div>
  );
};

export default Login;
