import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Glare from "./Glare";
import Hero from "../Images/Hero.jpeg";

const HeroSection = styled.section`
  background-image: url(${Hero});
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 35vh;
  width: auto;
  position: relative;
  color: #fff;
`;

const HeroContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
  padding: 0 20px;
`;

const HeroContent = styled.p`
  font-family: ${(props) => props.theme.Fonts.Abril};
  font-size: 36px;
  font-weight: 400;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;



const PageHeader = ({ header }) => {
  return (
    <>
      <HeroSection>
        <NavBar />
        <HeroContentDiv>
          <HeroContent>{header}</HeroContent>
        </HeroContentDiv>
      </HeroSection>
      <Glare />
      
    </>
  );
};

export default PageHeader;
