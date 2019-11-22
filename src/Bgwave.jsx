import React from 'react';
import styled from 'styled-components';
import bgwave1 from './Assets/bg_wave_1.png';
import bgwave2 from './Assets/bg_wave_1.png';

const Image1 = styled.img`
  display: inline-block;
  position: fixed;
  width: 200%;
  object-fit: contain;
  top: 88%;
`;

const Image2 = styled.img`
  display: inline-block;
  position: fixed;
  width: 120%;
  object-fit: contain;
  top: 91%;
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
