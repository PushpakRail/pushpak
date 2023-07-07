import React from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import Glare from "../Components/Glare";
import Photos from "../Components/Photos";
import Contact from "../Components/ContactUs";
import Hero from "../Images/Hero.jpeg";
import Human from "../Images/Human.png";
import Search from "../Images/Search.png";
import Image from "../Images/Image1.png";
import P1 from "../Images/P1.png";
import P2 from "../Images/P2.png";
import P3 from "../Images/P3.png";
import P4 from "../Images/P4.png";
import P5 from "../Images/P5.png";
import P6 from "../Images/P6.png";
import P7 from "../Images/P7.png";

const HeroSection = styled.section`
  background-image: url(${Hero});
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: auto;
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
`;

const HeroContent = styled.p`
  font-size: 54px;
  font-family: ${(props) => props.theme.Fonts.Abril};
  margin-bottom: 20px;
  max-width: 500px;
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

const Services = styled.section`
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto 40px;
`;

const HeadingDiv = styled.div`
  color: #000;
  font-size: 38px;
  font-family: ${(props) => props.theme.Fonts.Syne};
  font-weight: 700;
  position: relative;
  padding-left: 25px;
  max-width: 500px;
  margin: 40px 0;

  &:before {
    content: "Services";
    color: #ff5538;
    font-size: 18px;
    font-family: ${(props) => props.theme.Fonts.Sans};
    font-weight: 700;
    position: absolute;
    top: 35px;
    left: -25px;
    transform: rotate(-90deg);
  }
`;

const ParentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    flex-direction: row-reverse;
  }
`;

const ServicesDiv = styled.div`
  width: 100%;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    width: 47.5%;
  }
`;

const Service = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 0 40px;
  position: relative;

  &:after {
    visibility: ${(props) =>
      props.line || props.mobile ? "visible" : "hidden"};
    content: "";
    position: absolute;
    top: 65px;
    bottom: 0;
    left: 27.5px;
    border-left: 2px dashed rgba(0, 0, 0, 0.3);
    height: calc(100% - 35px);
    @media ${(props) => props.theme.MediaQueries.l.query} {
      visibility: ${(props) => (props.line ? "visible" : "hidden")};
    }
  }
`;

const Icon = styled.img`
  border: 1px solid #000;
  border-radius: 50%;
  padding: 7.5px;
  height: 55px;
  margin-right: 20px;
`;

const ServiceDetail = styled.div``;

const ServiceName = styled.h1`
  color: #000;
  font-size: 24px;
  font-family: ${(props) => props.theme.Fonts.Syne};
  font-weight: 700;
  margin-bottom: 10px;
`;

const ServiceInfo = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
  font-family: ${(props) => props.theme.Fonts.Syne};
  font-weight: 500;
  text-align: justify;
`;

const Projects = styled.section`
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto 40px;
`;

const PhotoGallery = styled.div`
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 200px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    -webkit-column-width: 33%;
    -moz-column-width: 33%;
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <NavBar />
        <HeroContentDiv>
          <HeroContent>Building a Strong Future</HeroContent>
          <HeroBtn>Get a Quote</HeroBtn>
        </HeroContentDiv>
      </HeroSection>
      <Glare />
      <Services>
        <HeadingDiv>Providing Solutions Start to End</HeadingDiv>
        <ParentDiv>
          <ServicesDiv>
            <Service line>
              <Icon src={Search} />
              <ServiceDetail>
                <ServiceName>Custom Steel Fabrication</ServiceName>
                <ServiceInfo>
                  We specialize in providing tailored custom fabrication
                  solutions to meet your specific requirements. Our team of
                  skilled fabricators utilizes advanced techniques and
                  state-of-the-art equipment to deliver precise and durable
                  steel structures. With our well-equipped workshop, we can
                  handle structural steel fabrication projects of varying sizes.
                  Our commitment to craftsmanship and structural integrity
                  ensures the highest quality in all our work.
                </ServiceInfo>
              </ServiceDetail>
            </Service>
            {/* <DottedLine big /> */}
            <Service mobile>
              <Icon src={Search} />
              <ServiceDetail>
                <ServiceName>Welding and Assembly</ServiceName>
                <ServiceInfo>
                  Our team of certified welders possesses expertise in a wide
                  range of welding techniques. This enables us to deliver strong
                  and reliable welds, ensuring the durability and structural
                  integrity of your steel structures. In addition to welding, we
                  offer expert assembly services to guarantee the accurate
                  construction of your projects. Our skilled professionals
                  ensure that every component is precisely fitted and assembled,
                  resulting in high-quality and precise steel structures.
                </ServiceInfo>
              </ServiceDetail>
            </Service>
          </ServicesDiv>
          <ServicesDiv>
            <Service line>
              <Icon src={Search} />
              <ServiceDetail>
                <ServiceName>CNC Plasma Cutting</ServiceName>
                <ServiceInfo>
                  We utilize advanced CNC plasma cutting technology to achieve
                  precise and intricate steel component cutting based on your
                  specifications. This enables us to create complex shapes and
                  designs with ease, ensuring high-quality results.
                </ServiceInfo>
              </ServiceDetail>
            </Service>
            {/* <DottedLine /> */}
            <Service line>
              <Icon src={Search} />
              <ServiceDetail>
                <ServiceName>Structural Steel Fabrication</ServiceName>
                <ServiceInfo>
                  Our workshop is fully equipped to handle structural steel
                  fabrication projects of various sizes. We take great pride in
                  delivering the highest level of craftsmanship and ensuring
                  structural integrity in all our work.
                </ServiceInfo>
              </ServiceDetail>
            </Service>
            {/* <DottedLine /> */}
            <Service>
              <Icon src={Search} />
              <ServiceDetail>
                <ServiceName>Surface Finishing</ServiceName>
                <ServiceInfo>
                  We provide a comprehensive range of surface finishing options
                  to enhance both the appearance and durability of your steel
                  structures. Our services include painting, powder coating, and
                  galvanizing, allowing us to cater to your specific
                  requirements.
                </ServiceInfo>
              </ServiceDetail>
            </Service>
          </ServicesDiv>
        </ParentDiv>
      </Services>
      <Projects>
        <HeadingDiv>Providing Solutions Start to End</HeadingDiv>
        <PhotoGallery>
          <Photos img={P1} no="1" name="Thane multi story parking" />
          <Photos img={P2} no="2" name="Lifts & Escalators" />
          <Photos img={P3} no="3" name="Steel Girder" />
          <Photos img={P4} no="4" name="Raising of PF" />
          <Photos img={P5} no="5" name="Kalyan - Igatpuri" />
          <Photos img={P6} no="6" name="Chambal bridge" />
          <Photos img={P7} no="7" name="Amalner" />
        </PhotoGallery>
      </Projects>
      <Contact />
    </>
  );
};

export default Home;
