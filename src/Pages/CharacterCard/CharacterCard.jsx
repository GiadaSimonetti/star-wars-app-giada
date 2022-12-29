import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ITEM_PROP_TYPE } from "../../models/character";
import { Link, useLocation } from "react-router-dom";
import SubTitle from "../../Components/SubTitle";
import {
  CharacterCardWrapper,
  CharacterCardBox,
  CardHeaderIndividual,
  CardInfoHeaderIndividual,
  CardNameText,
  CardBodyIndividual,
  InfoBoxIndividual,
  InfoBoxFilm,
  FilmList,
  FilmListItem,
  InfoHeaderTextIndividual,
  InfoValueTextIndividual,
  BackText,
  LoadingText,
} from "./Styles";

const CharacterCard = ({ peopleData }) => {
  const [films, setFilms] = useState([]);

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
    <CharacterCardWrapper className="characterCard" data-testid="characterCard">
      {specificCard ? (
        <>
          <SubTitle>{specificCard.name}</SubTitle>
          <CharacterCardBox>
            <CardHeaderIndividual>
              <CardNameText data-testid="characterCardName">
                {specificCard.name}
              </CardNameText>
            </CardHeaderIndividual>
            <CardBodyIndividual>
              <InfoBoxIndividual>
                <InfoHeaderTextIndividual>HAIR COLOR</InfoHeaderTextIndividual>
                <InfoValueTextIndividual data-testid="characterCardHairColor">
                  {specificCard.hair_color}
                </InfoValueTextIndividual>
              </InfoBoxIndividual>
              <InfoBoxIndividual>
                <InfoHeaderTextIndividual>EYE COLOR</InfoHeaderTextIndividual>
                <InfoValueTextIndividual data-testid="characterCardEyeColor">
                  {specificCard.eye_color}
                </InfoValueTextIndividual>
              </InfoBoxIndividual>
              <InfoBoxIndividual>
                <InfoHeaderTextIndividual>GENDER</InfoHeaderTextIndividual>
                <InfoValueTextIndividual data-testid="characterCardGender">
                  {specificCard.gender}
                </InfoValueTextIndividual>
              </InfoBoxIndividual>
              <InfoBoxIndividual>
                <InfoHeaderTextIndividual>HOMEWORLD</InfoHeaderTextIndividual>
                <InfoValueTextIndividual data-testid="characterCardHomeWorld">
                  {specificCard.homeworld}
                </InfoValueTextIndividual>
              </InfoBoxIndividual>

              <CardInfoHeaderIndividual>
                <InfoBoxIndividual>
                  <InfoHeaderTextIndividual>FILMS</InfoHeaderTextIndividual>
                </InfoBoxIndividual>
                <InfoBoxFilm>
                  {specificCard.films.length > 0 ? (
                    films.map((film) => (
                      <FilmList
                        key={film}
                        data-testid="characterCardFilmList"
                        style={{ listStyleType: "none" }}
                      >
                        <FilmListItem data-testid="characterCardFilm">
                          {film}
                        </FilmListItem>
                      </FilmList>
                    ))
                  ) : (
                    <div>
                      <p>Film</p>
                      <p>None</p>
                    </div>
                  )}
                </InfoBoxFilm>
              </CardInfoHeaderIndividual>
            </CardBodyIndividual>
          </CharacterCardBox>

          <Link to="/">
            <BackText data-testid="backAllCards"> {"< "} All Cards</BackText>
          </Link>
        </>
      ) : (
        <LoadingText>Loading data...</LoadingText>
      )}
    </CharacterCardWrapper>
  );
};

export default CharacterCard;

CharacterCard.propTypes = {
  characters: PropTypes.arrayOf(ITEM_PROP_TYPE),
};
