import React from "react";
import styled from "styled-components";

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

const HeroBtn = styled.button`
  border: none;
  border-radius: 5px;
  background: #ff5538;
  color: #fff;
  font-size: 18px;
  font-family: ${(props) => props.theme.Fonts.Sans};
  font-weight: 700;
  padding: 13px 18px;
`;

const HeroSecOld = ({ info, img }) => {
  return (
    <HeroSection style={{ backgroundImage: `url(${img}) ` }}>
      <HeroContentDiv>
        <HeroContent>{info}</HeroContent>
        <HeroBtn>Get a Quote</HeroBtn>
      </HeroContentDiv>
    </HeroSection>
  );
};

export default HeroSecOld;
