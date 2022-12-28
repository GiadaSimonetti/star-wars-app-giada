import styled from "styled-components";
import { colors } from "../../Components/Colors";
import { device } from "../../Components/MediaQuieries";

export const MainCardBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 15px;
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    row-gap: 18px;
    margin-top: 18px;
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    row-gap: 24px;
    margin-top: 24px;
  }
  @media ${device.laptopL} {
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;
    row-gap: 24px;
    margin-top: 24px;
  }
`;

export const LoadingBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const LoadingText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 20px;
  color: ${colors.bananaYellow};
`;
