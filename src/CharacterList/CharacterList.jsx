import PropTypes from "prop-types";
import { ITEM_PROP_TYPE } from "../models/character";
import { Link } from "react-router-dom";
import SingleCharacter from "../SingleCharacter/SingleCharacter";

const CharacterList = ({ peopleData }) => {
  console.log("peopleData: ", peopleData);

  return (
    <div className="characterList" data-testid="characterList">
      <h1>All Characters</h1>

      <div>
        {peopleData && peopleData.length > 0 ? (
          peopleData.map((character) => (
            <li
              key={character.name}
              style={{ listStyleType: "none" }}
              data-testid="CharacterList"
            >
              <Link to={`/${character.name}`}>
                <SingleCharacter character={character} />
              </Link>
            </li>
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default CharacterList;

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(ITEM_PROP_TYPE),
};
