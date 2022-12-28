import React from "react";
import styled from "styled-components";
import { colors } from "./Colors";
import { device } from "./MediaQuieries";

const SubTitleH2 = styled.h2`
  color: ${colors.lightYellow};
  text-align: center;
  font-size: 20px;
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.laptopL} {
    font-size: 40px;
  }
`;

const SubTitle = ({ children }) => {
  return <SubTitleH2>{children}</SubTitleH2>;
};

export default SubTitle;
