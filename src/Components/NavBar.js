import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../Constants/routes";
import Logo from "../Images/Logo.png";
import { handleScroll } from "../Helper/Scroll";
import { Completed } from "./../Pages/Completed";

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
  div:nth-of-type(3),
  div:nth-of-type(5),
  div:nth-of-type(6),
  div:nth-of-type(7) {
    flex-basis: 18.75%;
  }
  div:nth-of-type(4) {
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
  z-index: 1;
  width: 100%;

  &.open {
    transform: translateY(0);
  }
`;

const SubNav = styled.div`
  position: relative;
  top: 20%;
  visibility: hidden;
  position: absolute;
  top: 30px;
  left: 0;
  background-color: rgba(255, 85, 56, 0.2);
  transition: all 0.3s;
  text-align: left;
`;

const NavItemsSub = styled.a`
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

  &:hover ${SubNav} {
    visibility: visible;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin: 0 auto;
  }
`;

const RouteDiv = styled.a`
  display: block;
  padding: 15px 10px;
  width: 200px;
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
              navigate(ROUTES.HOMEPAGE);
              setToggle(!toggle);
            }}
          >
            Home
          </NavItems>
          <NavItems
            onClick={() => {
              navigate(ROUTES.ABOUTPAGE);
              setToggle(!toggle);
            }}
          >
            About Us
          </NavItems>
          <NavItems
            onClick={() => {
              navigate(ROUTES.OUTLETPAGE);
              setToggle(!toggle);
            }}
          >
            Outlet
          </NavItems>
          <NavItems
            onClick={() => {
              navigate(ROUTES.ONGOING);
              setToggle(!toggle);
            }}
          >
            Ongoing Projects
          </NavItems>
          <NavItems
            onClick={() => {
              navigate(ROUTES.COMPLETED);
              setToggle(!toggle);
            }}
          >
            Completed Projects
          </NavItems>
          <NavItems href="https://heyzine.com/flip-book/0bdc2bf0e2.html" target="_blank">Brochure</NavItems>
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
          <NavItems onClick={() => navigate(ROUTES.OUTLETPAGE)}>
            Outlet
          </NavItems>
        </div>
        <div>
          <Name src={Logo} />
        </div>
        <div>
          <NavItemsSub>
            Projects
            <SubNav>
              <RouteDiv onClick={() => navigate(ROUTES.ONGOING)}>
                Ongoing Projects
              </RouteDiv>
              <RouteDiv onClick={() => navigate(ROUTES.COMPLETED)}>
                Completed Projects
              </RouteDiv>
            </SubNav>
          </NavItemsSub>
        </div>
        <div>
          <NavItems href="https://heyzine.com/flip-book/0bdc2bf0e2.html" target="_blank">
            Brochure
          </NavItems>
        </div>
        <div>
          <NavItems
            onClick={() => {
              setToggle(!toggle);
              handleScroll();
            }}
          >
            Contact Us
          </NavItems>
        </div>
      </NavSectionDesk>
    </Container>
  );
};

export default NavBar;
