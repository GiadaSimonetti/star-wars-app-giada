import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ITEM_PROP_TYPE } from "../models/character";
import { getCharacterFromApi } from "../api";
import Card from "../Card/Card";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacterFromApi()
      .then((data) => setCharacters(data.results))
      .catch((e) => setError(true))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log("characters: ", characters);

  return (
    <div>
      {loading && <div>Loading....</div>}
      {error ? (
        <p>Unable to fetch data</p>
      ) : (
        <ul className="cacca">
          {characters &&
            characters.map((character, i) => (
              <li key={i}>
                <Card character={character} onClick={console.log(character)} />
              </li>
            ))}
        </ul>
      )}
      {/* <Card /> */}
    </div>
  );
};

export default CharacterList;

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(ITEM_PROP_TYPE).isRequired,
};
