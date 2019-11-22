import React from 'react';
import styled, { keyframes } from 'styled-components';
import bgwave1 from './Assets/bg_wave_1.png';
import bgwave2 from './Assets/bg_wave_1.png';

const waveAni = keyframes`
0% {
  transform: translateX(0) translateZ(0) scaleY(1)
}
50% {
  transform: translateX(-25%) translateZ(0) scaleY(0.55)
}
100% {
  transform: translateX(-50%) translateZ(0) scaleY(1)
}
`;

const Image1 = styled.img`
  display: inline-block;
  position: fixed;
  width: 300%;
  object-fit: contain;
  top: 82%;
  transition: all 1s;
  animation: ${waveAni} linear 10s infinite alternate-reverse;
`;

const Image2 = styled.img`
  display: inline-block;
  position: fixed;
  width: 220%;
  object-fit: contain;
  top: 86%;
  transition: all 1s;
  animation: ${waveAni} linear 15s infinite alternate-reverse;
`;

const ImageContain = styled.div`
  position: fixed;
  width: 100vw;
`;

const Bgwave = () => {
  return (
    <ImageContain>
      <Image1 src={bgwave1}></Image1>
      <Image2 src={bgwave2}></Image2>
    </ImageContain>
  );
};

export default Bgwave;
