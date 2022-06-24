
// Parte Feita pelo Nathan

import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import Talher from "../assets/images/talher.png";

const GlobalStyle = createGlobalStyle`
   *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;
const AboutSection = styled.section`
  width: 100%;
  display: flex;
`;
const ColherImg = styled.img`
  width: 45%;
`;
const AboutBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55%;
`;
const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin-top: 30px;
    background-color: #373737;
    height: 4px;
    width: 70px;
  }
`;
const Title = styled.h3`
  color: #373737;
  font-size: 40px;
  letter-spacing: 1.72px;
  text-align: center;
`;
const Text = styled.p`
  margin-top: 120px;
  color: #373737;
  font-size: 20px;
  width: 530px;
`;

export default function About() {
  return (
    <>
      <GlobalStyle />
      <AboutSection>
        <ColherImg src={Talher} alt="colher" />
        <AboutBox>
          <AboutText>
            <Title>ABOUT</Title>
            <span></span>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
              tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis
              dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur
              lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec
              mollis sagittis, enim risus euismod nisi, quis rutrum quam augue
              id mauris. Pellentesque mattis hendrerit semper. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien
              facilisis aliquam.
            </Text>
          </AboutText>
        </AboutBox>
      </AboutSection>
    </>
  );
}