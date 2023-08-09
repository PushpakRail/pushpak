import React from "react";
import styled from "styled-components";

const TeamDiv = styled.div`
  margin: 0px auto 60px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Image = styled.img`
  width: 250px;
  height: 280px;
  object-fit: cover;
  object-position: top;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 25%;
    height: 320px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 70%;
  }
`;

const Name = styled.p`
  margin: 10px 0 0px;
  font-size: 24px;
  font-family: ${(props) => props.theme.Fonts.Syne};
  font-weight: 700;
  color: #ff5538;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 32px;
  }
`;

const Post = styled.p`
  margin: 0px 0 10px;
  font-size: 18px;
  font-family: ${(props) => props.theme.Fonts.Sans};
  color: #ff5538;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 22px;
  }
`;

const Description = styled.p`
  font-size: 15px;
  font-family: ${(props) => props.theme.Fonts.Sans};
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 20px;
  }
`;

const Team = ({ img, no, name, desc }) => {
  return (
    <TeamDiv>
      <Image src={img} />
      <FlexDiv>
        <Name>{name}</Name>
        <Post>{no}</Post>
        <Description>{desc}</Description>
      </FlexDiv>
    </TeamDiv>
  );
};

export default Team;
