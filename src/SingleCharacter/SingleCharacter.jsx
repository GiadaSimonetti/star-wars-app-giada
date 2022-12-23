import PropTypes from "prop-types";
import { ITEM_PROP_TYPE } from "../models/character";

const SingleCharacter = ({ character }) => {
  return (
    <div className="singleCharacter" data-testid="singleCharacter">
      <h3>{character.name}</h3>
      <b>NAME: </b>
      <span>{character.name}</span>
      <div>
        <b>GENDER : </b>
        <span>{character.gender}</span>
        <div>
          <b>HOMEWORLD: </b>
          <span>{character.homeworld}</span>
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
