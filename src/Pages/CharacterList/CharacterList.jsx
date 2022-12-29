import PropTypes from "prop-types";
import { ITEM_PROP_TYPE } from "../../models/character";
import { Link } from "react-router-dom";
import SingleCharacter from "../SingleCharacter/SingleCharacter";
import SubTitle from "../../Components/SubTitle";
import { MainCardBox, LoadingBox, LoadingText } from "./Styles";

const CharacterList = ({ peopleData }) => {
  return (
    <div className="characterList" data-testid="characterList">
      <SubTitle>All Characters</SubTitle>

      <MainCardBox>
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
          <LoadingBox>
            <LoadingText>Loading data...</LoadingText>
          </LoadingBox>
        )}
      </MainCardBox>
    </div>
  );
};

export default CharacterList;

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(ITEM_PROP_TYPE),
};
