import React from "react";
import styled from "styled-components";
import Hero from "../Images/Hero.jpeg";

const HeroSection = styled.section`
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  position: relative;
  color: #fff;
`;

const HeroContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
  padding: 0 20px;
  z-index: 10;
`;

const HeroContent = styled.p`
  font-size: 54px;
  font-family: ${(props) => props.theme.Fonts.Abril};
  margin-bottom: 20px;
  max-width: 700px;
  text-align: left;
`;

const HeroBtn1 = styled.button`
  border: none;
  border-radius: 5px;
  background: #e34d00;
  color: #fff;
  font-size: 18px;
  font-family: ${(props) => props.theme.Fonts.Sans};
  font-weight: 700;
  padding: 15px 40px 15px 25px;
`;

const HeroBtn2 = styled.button`
  border: none;
  border-radius: 5px;
  background: #fd671a;
  color: #fff;
  font-size: 18px;
  font-family: ${(props) => props.theme.Fonts.Sans};
  font-weight: 700;
  padding: 15px 25px;
  margin: 20px 0;
`;

const HeroBtn3 = styled.button`
  border: none;
  border-radius: 5px;
  background: #ff8033;
  color: #fff;
  font-size: 18px;
  font-family: ${(props) => props.theme.Fonts.Sans};
  font-weight: 700;
  padding: 15px 25px;
`;

const Number = styled.span`
  margin-right: 10px;
`;

const HeroSecOld = () => {
  return (
    <HeroSection style={{ backgroundImage: `url(${Hero}) ` }}>
      <HeroContentDiv>
        <HeroContent>Railway Bridge Construction Experts</HeroContent>
        <HeroBtn1>
          <Number>01</Number>By Pushing Technique
        </HeroBtn1>
        <HeroBtn2>
          <Number>02</Number>By Segmental Bridge
        </HeroBtn2>
        <HeroBtn3>
          <Number>03</Number>By Rehabilitation
        </HeroBtn3>
      </HeroContentDiv>
    </HeroSection>
  );
};

export default HeroSecOld;
