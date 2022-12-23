import PropTypes from "prop-types";
import { ITEM_PROP_TYPE } from "../models/character";

const SingleCharacter = ({ character }) => {
  return (
    <div className="singleCharacter" data-testid="singleCharacter">
      <h3 data-testid="singleCharacterTitle">{character.name}</h3>
      <b>NAME: </b>
      <span data-testid="singleCharacterName">{character.name}</span>
      <div>
        <b>GENDER : </b>
        <span data-testid="singleCharacterGender">{character.gender}</span>
        <div>
          <b>HOMEWORLD: </b>
          <span data-testid="singleCharacterHomeworld">
            {character.homeworld}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleCharacter;

SingleCharacter.propTypes = {
  character: ITEM_PROP_TYPE,
  onClick: PropTypes.func,
};
