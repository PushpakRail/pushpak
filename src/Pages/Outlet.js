import React from "react";
import styled from "styled-components";
import ContactUs from "../Components/ContactUs";
import PageHeader from "../Components/PageHeader";
import Back from "../Images/Back.png";
import E1 from "../Images/Equip1.png";
import E2 from "../Images/Equip2.png";
import E3 from "../Images/Equip3.png";
import E4 from "../Images/Equip4.png";
import E5 from "../Images/Equip5.png";
import E6 from "../Images/Equip6.png";

const Info = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: auto;
  position: relative;
  margin: 40px auto;
  padding: 0 20px;
  max-width: 1200px;

  @media ${(props) => props.theme.MediaQueries.l.query} {
    background-image: url(${Back});
    padding: 20px 20px 20px 0;
    height: 700px;
  }
`;

const InfoDiv = styled.div`
  background: #fff;
  max-width: 900px;
  padding: 40px 40px 40px 20px;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    position: absolute;
    top: 105px;
    left: 0;
  }
`;

const HeadingDiv = styled.div`
  color: #000;
  font-size: 38px;
  font-family: ${(props) => props.theme.Fonts.Syne};
  font-weight: 700;
  position: relative;
  padding-left: 35px;
  width: ${(props) => (props.fac ? "600px" : "700px")};
  margin-bottom: 40px;
  line-height: 55px;

  &:before {
    content: "Facilities";
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

const Content = styled.div`
  font-size: 16px;
  font-family: ${(props) => props.theme.Fonts.Syne};
  font-weight: 500;
  padding-left: 35px;
  text-align: justify;
`;

const PhotoSec = styled.section`
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto 40px;
`;

const PhotoDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Photos = styled.img`
  aspect-ratio: 1/1;
  /* object-fit: contain; */
  width: 200px;
  flex: 0 0 25%;
  height: 200px;
`;

function Outlet() {
  return (
    <>
      <PageHeader header="Outlet" />
      <Info>
        <InfoDiv>
          <HeadingDiv>
            We have all your needs, from micro macro planning
          </HeadingDiv>
          <Content>
            We are delighted to house a cutting-edge Fabrication Facility that
            covers an expansive area of 7048 sq-mt. This state-of-the-art
            facility is fully functional and equipped with advanced technology
            to cater to a wide range of customer requirements. As proud owners
            and managers of the facility, we prioritize maintaining strict
            compliance with all safety rules and regulations to ensure a secure
            working environment.
            <br />
            <br />
            Located at Plot No. H-16 in Murbad MIDC, village Kudavali, Murbad,
            Tal. Murbad, Dist. Thane, our Fabrication Facility serves as a hub
            for our operations. Its strategic location allows us to efficiently
            serve customers in the surrounding areas. With a focus on quality,
            precision, and efficiency, we have established a reputation for
            delivering exceptional fabrication services.
            <br />
            <br />
            From large-scale projects to intricate custom designs, our facility
            is equipped to handle diverse requirements. Our skilled team of
            professionals utilizes the latest machinery and techniques to ensure
            the highest standards of workmanship and precision in every project
            we undertake.
          </Content>
        </InfoDiv>
      </Info>
      <PhotoSec>
        <HeadingDiv fac>Of the many fabrication tools we possess</HeadingDiv>
        <PhotoDiv>
          <Photos src={E1} />
          <Photos src={E2} />
          <Photos src={E3} />
          <Photos src={E4} />
          <Photos src={E5} />
          <Photos src={E6} />
        </PhotoDiv>
      </PhotoSec>

      <ContactUs />
    </>
  );
}

export default Outlet;
