import styled from "styled-components";
import { colors } from "../../Components/Colors";

export const CharacterCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const CharacterCardBox = styled.div`
  background: ${colors.offWhite};
  color: ${colors.black};
  border-radius: 8px;
`;

export const CardHeaderIndividual = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 98px;
  background: ${colors.grey};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 16px;
`;

export const CardInfoHeaderIndividual = styled.div`
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-bottom: 2px solid ${colors.mediumGrey};
  margin-bottom: 16px;
`;

export const CardNameText = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 24px;
  color: ${colors.offWhite};
`;

export const CardBodyIndividual = styled.div`
  padding: 20px 40px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 18px;
`;

export const InfoBoxIndividual = styled.div`
  width: 300px;
  height: 40px;
  align-items: center;
  background: ${colors.lightGrey};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 8px;
`;

export const InfoBoxFilm = styled.div`
  width: 300px;
  align-items: center;
  background: ${colors.lightGrey};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 8px;
`;

export const FilmList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: 120px;
  list-style: none;
  justify-content: flex-end;
`;

export const FilmListItem = styled.li`
  background: ${colors.lightGrey};
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 14px;
  color: ${colors.darkGrey};
  flex: none;
  padding-left: 20px;
  position: relative;
`;

export const InfoHeaderTextIndividual = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 10px;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.grey};
`;

export const InfoValueTextIndividual = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 14px;
  color: ${colors.darkGrey};
`;

export const BackText = styled.h4`
  color: ${colors.bananaYellow};
  margin-top: 40px;
`;

export const LoadingText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 20px;
  color: ${colors.bananaYellow};
`;
