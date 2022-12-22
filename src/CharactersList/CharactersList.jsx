import PropTypes from "prop-types";
import { ITEM_PROP_TYPE } from "../models/character";
// import { Link } from "react-router-dom";

const CharactersList = ({ peopleData }) => {
  console.log("peopleData: ", peopleData);

  return (
    <div>
      <h1>All Characters</h1>

      <div>
        {peopleData && peopleData.length > 0 ? (
          peopleData.map((person) => (
            <li
              key={person.name}
              style={{ listStyleType: "none" }}
              data-testid="charactersList"
            >
              <div>
                {/* <Link to={`/${person.name}`}></Link> */}
                <b>NAME: </b>
                <span>{person.name}</span>
                <div>
                  <b>GENDER : </b>
                  <span>{person.gender}</span>
                  <div>
                    <b>HOMEWORLD: </b>
                    <span>{person.homeworld}</span>
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>
            Loading data...
            <br />
            <br />
            Or, info is not available.
          </p>
        )}
      </div>
    </div>
  );
};

export default CharactersList;

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(ITEM_PROP_TYPE),
};
