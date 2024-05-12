import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 420px;
  margin-top: 300px;
  transform: translate(-50%, -50%);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledLabel = styled.div`
  color: #ffffff;
  font-family: "Inter-Bold", Helvetica;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  padding: 30px;
`;

const StyledBox = styled.div`
  height: 108px;
  width: 408px;
  position: relative;
  transition: all 0.3s ease;

  & .rectangle {
    background: linear-gradient(
      180deg,
      rgb(37, 244, 238) 0%,
      rgb(254, 44, 85) 100%
    );
    border-radius: 20px;
    height: 108px;
    width: 408px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover .rectangle {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    transform: scale(1.05);
  }
`;

export const StyleBox2_3 = () => {
  return (
    <CenterContainer>
      <StyledLink to="/Submit">
        <StyledBox>
          <div className="rectangle">
            <StyledLabel>참가신청하기</StyledLabel>
          </div>
        </StyledBox>
      </StyledLink>
    </CenterContainer>
  );
};

export default StyleBox2_3;
