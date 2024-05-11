import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../images/Logo.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #212121;
  color: white;
  transition: transform 0.3s;
  width: 1280px;
  height: 40px;
  margin: 0 auto;
`;

const LogoContainer = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 24px;
  display: flex;
  gap: 30px;
  &:hover {
    transform: scale(1.1);
  }
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
  color: white;
  font-size: 25px;
  font-weight: bold;
  transition: color 0.3s, transform 0.3s;
  font-family: "GmarketSansMedium";

  &:hover {
    color: #66e9ee; /* 원하는 색상으로 변경하세요 */
    transform: scale(1.1);
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
        <NavLink to="/Question">문의</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
}

export default Header;
