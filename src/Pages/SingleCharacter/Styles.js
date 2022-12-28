import styled from "styled-components";
import { colors } from "../../Components/Colors";

export const CardBox = styled.div`
  width: 216px;
  height: 282px;
  background: ${colors.offWhite};
  color: ${colors.black};
  border-radius: 8px;
  padding-bottom: 16px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 98px;
  background: ${colors.grey};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 16px;
`;

export const CardNameText = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: ${colors.offWhite};
`;

export const CardInfo = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 18px;
`;

export const InfoBox = styled.div`
  width: 170px;
  height: 32px;
  align-items: center;
  background: ${colors.lightGrey};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 8px;
`;

export const InfoHeaderText = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 10px;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.grey};
`;

export const InfoValueText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 14px;
  text-align: right;
  color: ${colors.darkGrey};
`;
