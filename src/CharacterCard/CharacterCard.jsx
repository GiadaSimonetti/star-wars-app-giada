import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ITEM_PROP_TYPE } from "../models/character";
import { Link, useLocation } from "react-router-dom";

const CharacterCard = ({ peopleData }) => {
  const [films, setFilms] = useState([]);

  console.log("🧶 peopleData in Card:", peopleData);

  const cardId = useLocation().pathname.slice(1);
  const specificCard = peopleData.find(
    (person) => person.name === decodeURI(cardId)
  );

  const getFilms = useCallback(async () => {
    let promises = [];
    let films = [];
    if (specificCard) {
      for (let film of specificCard.films) {
        promises.push(
          await axios.get(film).then((response) => {
            films.push(response.data.title);
          })
        );
      }
      Promise.all(promises).then(() => setFilms(films));
    }
  }, [specificCard]);

  useEffect(() => {
    getFilms();
  }, [peopleData, getFilms]);

  return (
    <div className="characterCard" data-testid="characterCard">
      {specificCard ? (
        <>
          <h1>{specificCard.name}</h1>
          <h2>Details:</h2>

          <div>
            <div>
              <p>
                NAME:
                <span>{specificCard.name}</span>
              </p>
            </div>
            <div>
              <div>
                <p>
                  HAIR COLOR:
                  <span>{specificCard.hair_color}</span>
                </p>
                <p>
                  EYE COLOR:
                  <span>{specificCard.eye_color}</span>
                </p>
                <p>
                  GENDER:
                  <span>{specificCard.gender}</span>
                </p>
              </div>

              <div>
                <div>
                  <p>
                    HOMEWORLD:
                    <span>{specificCard.homeworld}</span>
                  </p>
                </div>
                <p>FILMS: </p>
                {specificCard.films.length > 0 ? (
                  films.map((film) => (
                    <ul key={film}>
                      <li>
                        <p>{film}</p>
                      </li>
                    </ul>
                  ))
                ) : (
                  <div>
                    <p>Film</p>
                    <p>None</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <h4>
            <Link to="/" style={{ textDecoration: "none" }}>
              All Cards
            </Link>
          </h4>
        </>
      ) : (
        <p>
          Loading data...
          <br />
          <br />
          Or, info is not available.
        </p>
      )}
    </div>
  );
};

export default CharacterCard;

CharacterCard.propTypes = {
  characters: PropTypes.arrayOf(ITEM_PROP_TYPE),
};
