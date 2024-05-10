import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../images/Logo.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: white;
  color: white;
  transition: transform 0.3s;
  width: 1280px;
  margin: 0 auto;
`;

const LogoContainer = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 24px;
  display: flex;
  gap: 30px;
`;

const LogoImage = styled.img`
  width: 100px;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 70px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 25px;
  font-weight: bold;
  transition: color 0.3s;
  font-family: "GmarketSansMedium";

  &:hover {
    transform: scale(1.3);
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer to={"/"}>
        <LogoImage src={Logo} alt="Logo" />
      </LogoContainer>
      <NavLinks>
        <NavLink to="/Intord">소개</NavLink>
        <NavLink to="/Submit">지원</NavLink>
        <NavLink to="/Qusetion">문의</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
}

export default Header;
