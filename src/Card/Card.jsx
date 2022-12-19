import PropTypes from "prop-types";
import { ITEM_PROP_TYPE } from "../models/character";

const Card = ({ character, onClick }) => {
  return (
    <div className="Card" data-testid="card">
      <div className={character.name} onClick={onClick}>
        <h2>{character.name}</h2>
        <p>{character.gender}</p>
        <p>{character.homeworld}</p>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  character: ITEM_PROP_TYPE,
  onClick: PropTypes.func,
};
