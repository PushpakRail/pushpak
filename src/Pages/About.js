import React from "react";
import styled from "styled-components";
import ContactUs from "../Components/ContactUs";
import PageHeader from "../Components/PageHeader";
import Photos from "../Components/Photos";
import Up from "../Images/Up Angle.png";
import Down from "../Images/Down Angle.png";
import AboutImage from "../Images/About.png";
import Rakesh from "../Images/Rakesh Kohli.png";
import Navin from "../Images/Navin Vazirani.png";
import Jhamat from "../Images/Jhamat Hasseja.png";
import Rajesh from "../Images/Rajesh Sharma.png";
import Avinash from "../Images/Avinash Jaisinghnaii.png";
import Team from "./../Components/Team";

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
          <AboutImg src={AboutImage} />
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
          {/* <Photos img={Jhamat} no="Founder" name="Jhamat Hasseja" height />
          <Photos img={Navin} no="Director" name="Navin Vazirani" height />
          <Photos img={Rakesh} no="Director" name="Rakesh Kohli" height />
          <Photos img={Avinash} no="Management" name="Avinash Jaisinghnai" height /> */}

          <Team
            img={Jhamat}
            no="Founder"
            name="Jhamat Hasseja"
            desc="Jhamat Hasseja, a revered figure with a remarkable three-decade career as a contractor in the rail construction domain. As Founder and Managing Director of Pushpak Rail Construction Private Limited, his visionary leadership has redefined industry standards. With an innate ability to foresee trends and a dedication to innovation, Jhamat Hasseja has elevated his company to a pinnacle of success, all while fostering collaborations and contributing to community welfare. His legacy as a transformative force in rail construction continues to inspire and shape the industry."
          />
          <Team
            img={Navin}
            no="Director"
            name="Navin Vazirani"
            desc="Navin Vazirani, a seasoned professional with 15 years of contractor experience, holds a distinguished role as Director at Pushpak Rail Construction Private Limited. His expertise, honed in the intricate domain of bridge construction, has left an indelible mark on the industry. With a passion for innovation and an unwavering commitment to excellence, Navin Vazirani's leadership has propelled him to the forefront of rail infrastructure development. His invaluable contributions continue to reshape the landscape of bridge construction, inspiring peers and emerging professionals alike."
          />
          <Team
            img={Rakesh}
            no="Director"
            name="Rakesh Kohli"
            desc="Rakesh Kohli, a seasoned contractor with three decades of experience, is a prominent Director at Pushpak Rail Construction Private Limited. His expertise in fabrication has redefined rail construction, setting new standards for precision and craftsmanship. With an enduring commitment to innovation and quality, Rakesh Kohli's influence as a trailblazer continues to shape the industry and inspire those around him."
          />
          <Team
            img={Avinash}
            no="Management"
            name="Avinash Jaisinghnai"
            desc="Avinash Jaisinghnai, a seasoned contractor with a decade of invaluable experience, shines as a Project Management Expert at Pushpak Rail Construction Private Limited. With a keen ability to thrive under pressure and manage multiple projects within tight timeframes, Avinash's expertise has become indispensable in the realm of rail infrastructure. His dedication to precision, efficiency, and innovation has cemented his reputation as a go-to professional for navigating challenging scenarios. Avinash Jaisinghnai's dynamic leadership and exceptional project management skills continue to drive success and inspire excellence within the industry."
          />
        </PhotosDiv>
      </PhotoSec>

      <ContactUs />
    </>
  );
}

export default About;
