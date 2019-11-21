import React from 'react';
import peopleImage from './Assets/people_img.png';
import bgWave3 from './Assets/bg_wave_3.png';
import logo from './Assets/logo1.png';
import styled from 'styled-components';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
// import { ReactComponent } from '*.svg';
const DOMAIN = 'http://www.gsmboard.kr/';

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

const BannerTxt = styled.p`
  font-weight: 800;
  line-height: 3rem;
  color: #474bff;
  font-size: 2.2rem;
`;

const Notion = styled.p`
  color: #bdbdbd;
  font-size: 1.08rem;
  font-weight: bold;
`;

const Input = styled.input`
  border: none;
  display: block;
  width: 400px;
  height: 50px;
  border-radius: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 0.8rem;
  text-align: left;
  padding-left: 1.2rem;
  font-family: 'Noto Sans KR', sans-serif;
`;

const BannerDiv = styled.div`
  margin-bottom: 0.65rem;
`;

const LoginBtn = styled.div`
  position: relative;
  width: 400px;
  height: 50px;
  border-radius: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: linear-gradient(to bottom, #923ade, #474bff);
  padding-left: 1.2rem;
`;

const LoginTxt = styled.a`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const LogoDiv = styled.div`
  position: absolute;
  left: 5%;
  top: 5%;
`;

const LoginDiv = styled.div`
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
`;

const InputDiv = styled.div`
  margin-top: 2rem;
`;

const Login = ({ yesAdmin }) => {
  const ClickHandle = () => {
    const inputMail = document.querySelector('#inputMail').value;
    const inputPw = document.querySelector('#inputPw').value;

    const req = {
      email: inputMail,
      password: inputPw
    };

    console.log(req);

    axios.post(DOMAIN + 'api/auth/login', req).then(res => {
      console.log(res);

      if (res.status === 200) {
        alert('로그인 성공');
        console.log(res.data);
        localStorage.setItem('token', res.data.token);

        if (res.data.is_admin) {
          alert('관리자 계정입니다.');
          yesAdmin();
          window.location = '/lect/admin';
        } else {
          alert('일반 계정입니다.');
          window.location = '/lect/user';
        }
      } else {
        alert('로그인 실패');
      }
    });
  };

  return (
    <div>
      <LogoDiv>
        <img src={logo} alt="Logo" />
      </LogoDiv>
      <LoginDiv>
        <BannerDiv>
          <BannerTxt>After school</BannerTxt>
          <BannerTxt>Application System for You</BannerTxt>
        </BannerDiv>
        <BannerDiv>
          <Notion>
            지금 당장 HAS에서 당신만을 위한 방과후 신청 시스템을 만나세요.
          </Notion>
        </BannerDiv>
        <InputDiv>
          <Input type="email" placeholder="Email" id="inputMail" />
          <Input type="password" placeholder="Password" id="inputPw" />
          <LoginBtn onClick={ClickHandle}>
            <LoginTxt href="#">로그인</LoginTxt>
          </LoginBtn>
        </InputDiv>
      </LoginDiv>
      <div>
        <BGImage src={bgWave3} alt="bgWave3" />
        <BGPeople src={peopleImage} alt="people" />
      </div>
    </div>
  );
};
export default withRouter(Login);
