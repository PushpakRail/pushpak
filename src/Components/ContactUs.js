import React from "react";
import styled from "styled-components";
import ContactMap from "../Images/Map.png";
import ContactBg from "../Images/ContactBg.png";
import ContactImg from "../Images/Contact.png";

const ContactSec = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ContactBack = styled.img`
  margin: 0;
  height: 250px;
  object-fit: cover;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    height: 300px;
  }@media ${(props) => props.theme.MediaQueries.l.query} {
    height: 350px;
  }
`;

const ContactHead = styled.h1`
  color: #000;
  font-size: 36px;
  font-family: ${(props) => props.theme.Fonts.Syne};
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

const ContactDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  max-width: 1080px;
  padding: 25px 15px;
  background-color: #fff;
  border-radius: 5px;
  max-width: 900px;
`;

const ContactMan = styled.img`
  display: none;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    display: block;
    width: 30%;
  }
`;

const FormDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    flex-direction: row;
  }
`;

const FormFlex = styled.div`
  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 65%;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  margin: 15px 0;
  padding: 0 0 5px 0;
  font-family: ${(props) => props.theme.Fonts.Syne};
  color: #000;
  width: 100%;
  border-bottom: 1px solid rgb(0, 0, 0, 0.3);

  ::placeholder {
    font-family: "Times New Roman";
    font-style: italic;
    color: rgb(0, 0, 0, 0.5);
    @media ${(props) => props.theme.MediaQueries.m.query} {
    }
    @media ${(props) => props.theme.MediaQueries.l.query} {
    }
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid rgb(0, 0, 0, 1);
  }

  @media ${(props) => props.theme.MediaQueries.m.query} {
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
  }
`;

const TextArea = styled.textarea`
  border-top: none;
  border-left: none;
  border-right: none;
  margin: 12px 0 0 0;
  padding: 0 0 5px 0;
  font-family: ${(props) => props.theme.Fonts.Syne};
  color: #000;
  width: 100%;
  border-bottom: 1px solid rgb(0, 0, 0, 0.3);
  height: 70px;

  ::placeholder {
    font-family: "Times New Roman";
    font-style: italic;
    color: rgb(0, 0, 0, 0.5);
    @media ${(props) => props.theme.MediaQueries.m.query} {
    }
    @media ${(props) => props.theme.MediaQueries.l.query} {
    }
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid rgb(0, 0, 0, 1);
  }

  @media ${(props) => props.theme.MediaQueries.m.query} {
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
  }
`;

const SendBtn = styled.button`
  color: #fff;
  font-family: ${(props) => props.theme.Fonts.Sans};
  font-weight: 700;
  border-radius: 5px;
  border: none;
  background: #ff5538;
  padding: 10px 20px;
  margin: 25px 0 0;
  float: right;
`;

const ContactUs = () => {
  return (
    <ContactSec>
      <ContactBack src={ContactMap} />
      <ContactBack src={ContactBg} />
      <ContactDiv>
        <ContactHead>Contact Us</ContactHead>
        <FormDiv>
          <ContactMan src={ContactImg} />
          <FormFlex>
            <Flex>
              <Input type="text" id="name" name="name" placeholder="Name" />
              <Input type="text" id="Phone" name="Phone" placeholder="Phone" />
            </Flex>
            <Input type="email" id="email" name="email" placeholder="E-mail" />
            <TextArea
              id="message"
              name="message"
              placeholder="How can we help?"
            />
            <SendBtn>Send Message</SendBtn>
          </FormFlex>
        </FormDiv>
      </ContactDiv>
    </ContactSec>
  );
};

export default ContactUs;
