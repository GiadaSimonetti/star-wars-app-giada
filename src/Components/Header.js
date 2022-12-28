import React from "react";
import styled from "styled-components";
import { colors } from "./Colors";
import { device } from "./MediaQuieries";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${colors.bananaYellow};
  text-align: center;
  font-weight: bold;
  font-size: 60px;
  padding: 40px;
  @media ${device.tablet} {
    font-size: 60px;
  }
  @media ${device.laptopL} {
    font-size: 70px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Star Wars App</Title>
    </HeaderContainer>
  );
};

export default Header;
