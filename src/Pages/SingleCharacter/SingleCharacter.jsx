import PropTypes from "prop-types";
import { ITEM_PROP_TYPE } from "../../models/character";
import {
  CardBox,
  CardHeader,
  CardNameText,
  CardInfo,
  InfoBox,
  InfoHeaderText,
  InfoValueText,
} from "./Styles";

const SingleCharacter = ({ character }) => {
  return (
    <CardBox className="singleCharacter" data-testid="singleCharacter">
      <CardHeader data-testid="singleCharacterTitle">
        <CardNameText data-testid="singleCharacterName">
          {character.name}
        </CardNameText>
      </CardHeader>
      <CardInfo>
        <InfoBox>
          <InfoHeaderText>GENDER</InfoHeaderText>
          <InfoValueText data-testid="singleCharacterGender">
            {character.gender}
          </InfoValueText>
        </InfoBox>
        <InfoBox>
          <InfoHeaderText>HOMEWORLD</InfoHeaderText>
          <InfoValueText data-testid="singleCharacterHomeworld">
            {character.homeworld}
          </InfoValueText>
        </InfoBox>
      </CardInfo>
    </CardBox>
  );
};

export default SingleCharacter;

SingleCharacter.propTypes = {
  character: ITEM_PROP_TYPE,
  onClick: PropTypes.func,
};
