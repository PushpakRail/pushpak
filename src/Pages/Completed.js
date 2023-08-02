import React from "react";
import styled from "styled-components";
import Contact from "../Components/ContactUs";
import PageHeader from "../Components/PageHeader";
import Card from "../Components/Card";
import Hero from "../Images/Hero.jpeg";
import P1 from "../Images/P1.png";
import CP1 from "../Images/CP1.jpg";
import P2 from "../Images/P2.jpg";
import P3 from "../Images/P3.png";
import P5 from "../Images/P5.jpg";
import P6 from "../Images/P6.png";
import P8 from "../Images/P8.jpg";
import P9 from "../Images/P9.jpg";
import P10 from "../Images/P10.jpg";

const HeadingDiv = styled.div`
  color: #000;
  font-size: 38px;
  font-family: ${(props) => props.theme.Fonts.Syne};
  font-weight: 700;
  position: relative;
  padding-left: 35px;
  max-width: 500px;
  margin-bottom: 40px;
  line-height: 55px;

  &:before {
    content: "Projects";
    color: #ff5538;
    font-size: 18px;
    font-family: ${(props) => props.theme.Fonts.Sans};
    font-weight: 700;
    position: absolute;
    top: 27px;
    left: -25px;
    transform: rotate(-90deg);
  }
`;

const Cardec = styled.section`
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto 40px;
`;

const CardDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const Completed = () => {
  return (
    <>
      <PageHeader header="Project" />
      <Cardec>
        <HeadingDiv>
          Completed <br />
          <span style={{ color: "#FF5538" }}>Projects</span>
        </HeadingDiv>
        <CardDiv>
          <Card
            image={P1}
            title="Project No. 1"
            para="Thane Multi Story Parking"
          />
          <Card
            image={P2}
            title="Project No. 2"
            para="Lifts & Escalators at Mumbai"
          />
          <Card image={P3} title="Project No. 3" para="Steel Girder Bridge" />

          <Card
            image={P5}
            title="Project No. 4"
            para="Foot Over Bridge Near Rosary School,Mumbai for Munciple Corporation of Greater Mumbai"
          />
          <Card
            image={P8}
            title="Project No. 5"
            para="Olympic Size Swimming Pool project At Mahalaxmi Sports Ground,Western Railway"
          />
          <Card
            image={P10}
            title="Project No. 6"
            para="80 m Foot Over Bridge wit 100m Ramp at Aurangabad Railway station"
          />
          <Card
            image={CP1}
            title="Project No. 7"
            para="Major Kalu Bridge Rehablitation near Titwala Railway Station"
          />
        </CardDiv>
      </Cardec>

      <Contact />
    </>
  );
};

export default Completed;
