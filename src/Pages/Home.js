import React, { useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import NavBar from "../Components/NavBar";
// import Glare from "../Components/Glare";
import Photos from "../Components/Photos";
import ImagePopup from "../Components/ImagePopup";
import Contact from "../Components/ContactUs";
// import Hero from "../Images/Hero.jpeg";
// import Search from "../Images/Search.png";
import C1 from "../Images/C1.png";
import C2 from "../Images/C2.png";
import C3 from "../Images/C3.png";
import C4 from "../Images/C4.png";

import S1 from "../Images/S1.png";
import S2 from "../Images/S2.png";
import S3 from "../Images/S3.png";
import S4 from "../Images/S4.png";
import S5 from "../Images/S5.png";
import S6 from "../Images/S6.png";
import S7 from "../Images/S7.png";
import HeroSecOld from "../Components/HeroSecOld";
import HeroSecNew from "../Components/HeroSecNew";

const NavDiv = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
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
  /* display: flex;
  justify-content: center;
  align-items: flex-start; */
  margin: 0 0 50px;
  position: relative;

  /* &:after {
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
      left: 30px;
    }
  } */
`;

const Icon = styled.img`
  border: 1px solid #000;
  /* border-radius: 50%; */
  padding: 7.5px;
  height: 110px;
  aspect-ratio: 1/1;
  margin: 0 20px 0 0;
  float: left;
  cursor: pointer;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    height: 120px;
  }
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
  const [model, setModel] = useState(false);
  const [image, setImage] = useState(null);

  return (
    <>
      {model && <ImagePopup model={model} setModel={setModel} Image={image} />}

      <Carousel
        infiniteLoop={true}
        showArrows={false}
        stopOnHover={false}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={5000}
        animationHandler="fade"
        swipeable={false}
      >
        <HeroSecOld info={"Affiliated Fabrication Workshop"} img={C3} />
        <HeroSecOld
          info={"Construction of Olympic Size Swimming Pool"}
          img={C1}
        />
        <HeroSecOld
          info={"Fledged Micro Tunneling Machines and Expertise"}
          img={C2}
        />
        <HeroSecNew />
        <HeroSecOld info={"Pre Fabricated Villas"} img={C4} />
      </Carousel>
      <NavDiv>
        <NavBar />
      </NavDiv>
      {/* <Glare /> */}
      <Services>
        <HeadingDiv>Providing Solutions Start to End</HeadingDiv>
        <ParentDiv>
          <ServicesDiv>
            <Service line>
              <Icon
                src={S1}
                onClick={() => {
                  setImage(S1);
                  setModel(true);
                }}
              />
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
            <Service line>
              <Icon
                src={S2}
                onClick={() => {
                  setImage(S2);
                  setModel(true);
                }}
              />
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
            <Service mobile>
              <Icon
                src={S3}
                onClick={() => {
                  setImage(S3);
                  setModel(true);
                }}
              />
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
              <Icon
                src={S4}
                onClick={() => {
                  setImage(S4);
                  setModel(true);
                }}
              />
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
            <Service line>
              <Icon
                src={S5}
                onClick={() => {
                  setImage(S5);
                  setModel(true);
                }}
              />
              <ServiceDetail>
                <ServiceName>Micro-Tunneling</ServiceName>
                <ServiceInfo>
                  Micro-tunneling is a precise and efficient method for
                  underground pipeline installation, providing a cost-effective
                  and less intrusive alternative to traditional excavation
                  methods. We have gained a lot of experience in the process of
                  micro-tunneling which helps us fulfill our customer
                  requirements on time and with perfection.
                </ServiceInfo>
              </ServiceDetail>
            </Service>
            <Service line>
              <Icon
                src={S6}
                onClick={() => {
                  setImage(S6);
                  setModel(true);
                }}
              />
              <ServiceDetail>
                <ServiceName>Swimming pools</ServiceName>
                <ServiceInfo>
                  We have construction of Olympic level swimming pool, machine
                  room, changing room, & toilet blocks, etc.
                </ServiceInfo>
              </ServiceDetail>
            </Service>
            <Service>
              <Icon
                src={S7}
                onClick={() => {
                  setImage(S7);
                  setModel(true);
                }}
              />
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
      {/* <Projects>
        <HeadingDiv>Providing Solutions Start to End</HeadingDiv>
        <PhotoGallery>
          <Photos img={P1} no="1" name="Thane Multi Story Parking" />
          <Photos img={P2} no="2" name="Lifts & Escalators at Mumbai" />
          <Photos img={P3} no="3" name="Steel Girder Bridge" />
          <Photos img={P4} no="4" name="Micro Tunneling Boring Machine" />
          <Photos img={P5} no="5" name="Kalyan Igatpuri Bridge Construction" />
          <Photos img={P6} no="6" name="Chambal bridge, Dholpur" />
          <Photos
            img={P7}
            no="7"
            name="Inhouse Steel Gider Factrication Workshop"
          />
          <Photos
            img={P8}
            no="8"
            name="PIT  Line at Railway Mechanical Workshop"
          />
          <Photos img={P9} no="9" name="Arch Bridge Rehabilitation Railway" />
          <Photos
            img={P10}
            no="10"
            name="Bridge construction by Box pushing Technick Under Railway Line"
          />
        </PhotoGallery>
      </Projects> */}
      <Contact />
    </>
  );
};

export default Home;
