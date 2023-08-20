import React from "react";
import styled from "styled-components";
import Contact from "../Components/ContactUs";
import PageHeader from "../Components/PageHeader";
import Card from "../Components/Card";
import Hero from "../Images/Hero.jpeg";
import P4 from "../Images/P4.jpg";
import P7 from "../Images/P7.png";
import PO6 from "../Images/PO6.png";
import PO7 from "../Images/PO7.png";
import OP1 from "../Images/OP1.png";
import OP2 from "../Images/OP2.png";
import OP3 from "../Images/OP3.png";

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

export const Project = () => {
  return (
    <>
      <PageHeader header="Project" />
      <Cardec>
        <HeadingDiv>
          Ongoing <br />
          <span style={{ color: "#FF5538" }}>Projects</span>
        </HeadingDiv>
        <CardDiv>
          <Card
            image={OP1}
            title="Project No. 1"
            para="Microtunneling project at Talegaon, Pune "
          />
          <Card
            image={OP2}
            title="Project No. 2"
            para="Providing and laying of 1800mm dia. SWD on 90 feet road Dharavi, Mumbai "
          />
          <Card
            image={OP3}
            title="Project No. 3"
            para="Provision of lift from Vithalwadi to Karja Stations Mumbai Division, Central Railway"
          />
          <Card
            image={P4}
            title="Project No. 4"
            para="Rehabilitation of bridge in MJY yard by providing 1800 mm dia pipe by Micro-tunnelling method to avoid water-logging"
          />
          <Card
            image={P7}
            title="Project No. 5"
            para="Providing additional FOB with ramp at Amalner station to ease out inter-platform movement of passenger"
          /><Card
          image={PO6}
          title="Project No. 6"
          para="Revived Matheran Railway line post washout with retaining walls and galions for track stabiliy"
        /><Card
        image={PO7}
        title="Project No. 7"
        para="Augmenting Mumbai LTT station with extra platforms, enhancing capacity and efficiency"
      />
        </CardDiv>
      </Cardec>

      <Contact />
    </>
  );
};

export default Project;
