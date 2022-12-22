import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
// import { getCharactersFromApi } from "./api";
import CharactersList from "./CharactersList/CharactersList";
import "./App.css";

export const url = "https://swapi.dev/api/people";

function App() {
  const [peopleData, setPeopleData] = useState([]);

  const loadAllPeople = async () => {
    await axios
      .get(url)
      .then((response) => {
        var peopleCopy = response.data.results;
        let promises = [];
        for (let person of peopleCopy) {
          promises.push(
            axios.get(person.homeworld).then((response) => {
              person.homeworld = response.data.name;
            })
          );
        }
        Promise.all(promises).then(() => {
          setPeopleData(peopleCopy);
        });
      })
      .catch((error) => {
        alert("error loading data");
      });
  };

  useEffect(() => {
    loadAllPeople();
  }, []);

  console.log("peopleData", peopleData);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={<CharactersList peopleData={peopleData} />}
          />
          {/* <Route path="/:id" element={<CardPage peopleData={peopleData}/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
