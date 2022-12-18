import { useState, useEffect } from "react";
import { getCharacterFromApi } from "../api";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCharacterFromApi()
      .then((data) => setCharacters(data.results))
      .catch((e) => setError(true));
  }, []);

  console.log("characters: ", characters);

  return error ? (
    <p>Unable to fetch data</p>
  ) : (
    <table>
      <tbody>
        {characters.map((character) => (
          <tr key={character.name}>
            <td>{character.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CharacterList;
