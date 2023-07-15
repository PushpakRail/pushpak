import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../Constants/routes";
import { handleScroll } from "../Helper/Scroll";
import Logo from "../Images/Logo.png"

const Container = styled.section`
  padding: 0;
`;

const NavSectionMob = styled.section`
  display: block;
  position: relative;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    display: none;
    background-position: center;
  }
`;
const NavSectionDesk = styled.section`
  display: none;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  max-width: 1200px;
  margin: 0px auto;
  height: 80px;

  div:nth-of-type(1),
  div:nth-of-type(2),
  div:nth-of-type(4),
  div:nth-of-type(5) {
    flex-basis: 18.75%;
  }
  div:nth-of-type(3) {
    flex-basis: 25%;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    display: flex;
  }
`;

const Name = styled.img`
  height: 50px;
  width: auto;
`;

const NavItems = styled.a`
  font-weight: 700;
  font-family: ${(props) => props.theme.Fonts.Syne};
  font-size: 16px;
  position: relative;
  width: fit-content;
  margin: 15px auto;
  cursor: pointer;
  color: #fff;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #ff5538;
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin: 0 auto;
  }
`;

const Menu = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
  & box-icon {
    fill: #fff;
    height: 35px;
    width: auto;
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  background: #000;
  color: #fff;
  padding-top: 10px;
  transform: translateY(-150%);
  transition: linear 0.4s;
  position: absolute;
  width: 100%;
  z-index: 1;

  &.open {
    transform: translateY(0);
  }
`;

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <Container>
      <NavSectionMob>
        <Menu onClick={() => setToggle(!toggle)}>
          <box-icon name="menu-alt-right"></box-icon>
        </Menu>
        <MenuList className={toggle ? "open" : null}>
          <NavItems
            onClick={() => {
              setToggle(!toggle);
              navigate(ROUTES.HOMEPAGE);
            }}
          >
            Home
          </NavItems>
          <NavItems
            onClick={() => {
              setToggle(!toggle);
              navigate(ROUTES.ABOUTPAGE);
            }}
          >
            About Us
          </NavItems>
          <NavItems
            onClick={() => {
              setToggle(!toggle);
              navigate(ROUTES.OUTLETPAGE);
            }}
          >
            Outlet
          </NavItems>
          <NavItems
            onClick={() => {
              setToggle(!toggle);
              handleScroll();
            }}
          >
            Contact Us
          </NavItems>
        </MenuList>
      </NavSectionMob>
      <NavSectionDesk>
        <div>
          <NavItems onClick={() => navigate(ROUTES.HOMEPAGE)}>Home</NavItems>
        </div>
        <div>
          <NavItems onClick={() => navigate(ROUTES.ABOUTPAGE)}>
            About Us
          </NavItems>
        </div>
        <div>
          <Name src={Logo} />
        </div>
        <div>
          <NavItems onClick={() => navigate(ROUTES.OUTLETPAGE)}>
            Outlet
          </NavItems>
        </div>
        <div>
          <NavItems onClick={handleScroll}>Contact Us</NavItems>
        </div>
      </NavSectionDesk>
    </Container>
  );
};

export default NavBar;
