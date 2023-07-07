import React from "react";
import styled from "styled-components";
import ContactUs from "../Components/ContactUs";
import PageHeader from "../Components/PageHeader";
import Photos from "../Components/Photos";
import Up from "../Images/Up Angle.png";
import User from "../Images/User.png";
import Down from "../Images/Down Angle.png";
import Hero from "../Images/Hero.jpeg";
import Rakesh from "../Images/Rakesh Kohli.png";
import Navin from "../Images/Navin Vazirani.png";
import Jhamat from "../Images/Jhamat Hasseja.png";
import Rajesh from "../Images/Rajesh Sharma.png";

const AboutSec = styled.section`
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto 40px;
`;

const AboutImgDiv = styled.div`
  position: relative;
  aspect-ratio: 3/4;
  height: 250px;
  margin: 40px auto;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    float: left;
    margin: 0px 50px 40px 20px;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    height: 300px;
  }
`;

const AboutImg = styled.img`
  object-fit: cover;
  aspect-ratio: 3/4;
  height: 250px;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    height: 300px;
  }
`;

const UpAngle = styled.img`
  position: absolute;
  top: -15px;
  right: -15px;
  height: 100px;
`;

const DownAngle = styled.img`
  position: absolute;
  bottom: -25px;
  left: -22.5px;
  height: 100px;
`;

const AboutInfo = styled.div`
  text-align: justify;
`;

const AboutCom = styled.p`
  color: #ff5538;
  font-size: 16px;
  font-family: ${(props) => props.theme.Fonts.Sans};
  font-weight: 700;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin-top: 50px;
  }
`;

const AboutHead = styled.h1`
  font-size: 40px;
  font-family: ${(props) => props.theme.Fonts.Abril};
  font-weight: 400;
  text-align: left;
  max-width: 350px;
  margin: 20px 0;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 630px;
    line-height: 54px;
  }
`;

const AboutContent = styled.p`
  text-align: justify;
  font-size: 16px;
  font-family: ${(props) => props.theme.Fonts.Syne};
  font-weight: 500;
  line-height: 26px;
`;

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
    content: "Our Team";
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

const PhotoSec = styled.section`
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto 40px;
`;

const PhotosDiv = styled.div`
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

function About() {
  return (
    <>
      <PageHeader header="About Us" />
      <AboutSec>
        <AboutImgDiv>
          <UpAngle src={Up} />
          <DownAngle src={Down} />
          <AboutImg src={Hero} />
        </AboutImgDiv>
        <AboutInfo>
          <AboutCom>About our Company</AboutCom>
          <AboutHead>Building a Strong future Since 1990</AboutHead>
          <AboutContent>
            Pushpak Rail Construction Pvt Ltd is a leading private limited
            company specializing in rail construction and maintenance services.
            With a rich history that dates back to 1991 as Pushpak Construction
            Company, we have since evolved into a dynamic organization to expand
            our capabilities. Operating in Maharashtra, Gujarat, Madhya Pradesh,
            and Uttar Pradesh, we undertake civil engineering contracts for
            Indian Railways and private sector industries. Our impressive track
            record showcases our ability to work under tough conditions, meet
            strict timelines, and manage large budgets. As a quality-centric
            organization, we prioritize using high-quality raw materials sourced
            from reputable organizations. Our team of experienced professionals
            ensures precision and efficiency in all our services. Choose Pushpak
            Rail Construction Pvt Ltd for exceptional rail construction and
            maintenance services. Experience our unmatched skills and dedication
            as we strive to exceed expectations and build long-lasting
            partnerships.
          </AboutContent>
        </AboutInfo>
      </AboutSec>
      <PhotoSec>
        <HeadingDiv>
          Meet our <br />
          <span style={{ color: "#FF5538" }}>Leaders</span>
        </HeadingDiv>
        <PhotosDiv>
          <Photos img={Jhamat} no="Founder" name="Jhamat Hasseja" height />
          <Photos img={Navin} no="Director" name="Navin Vazirani" height />
          <Photos img={Rakesh} no="Director" name="Rakesh Kohli" height />
          <Photos img={Rajesh} no="Director" name="Rajesh Sharma" height />
        </PhotosDiv>
      </PhotoSec>

      <ContactUs />
    </>
  );
}

export default About;
