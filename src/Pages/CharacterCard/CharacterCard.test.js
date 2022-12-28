/* eslint-disable testing-library/prefer-screen-queries */
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
// import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import CharacterCard from "./CharacterCard";

// jest.mock("axios");

// const peopleData = [
//   {
//     name: "Darth Vader",
//     hair_color: "none",
//     eye_color: "yellow",
//     gender: "male",
//     homeworld: "Tatooine",
//     films: [
//       "A New Hope",
//       "The Empire Strikes Back",
//       "Return of the Jedi",
//       "Revenge of the Sith",
//     ],
//   },
// ];

const peopleData = [
  {
    name: "Darth Vader",
    hair_color: "none",
    eye_color: "red",
    gender: "male",
    homeworld: "Tatooine",
    films: ["http://swapi.dev/api/films/4/"],
  },
];

const specificCard = peopleData.find(
  (person) => person.name === decodeURI("Darth Vader")
);

console.log("🍁 specificCard: ", specificCard);

// beforeEach(() => {
//   // window.alert = jest.fn();
// });

// afterEach(() => {
//   axios.get.mockClear();
//   cleanup();
// });

// const mockCall = () => {
//   axios.get.mockResolvedValue({
//     data: {
//       results: [
//         {
//           name: "Darth Vader",
//           hair_color: "none",
//           eye_color: "yellow",
//           gender: "male",
//           homeworld: "Tatooine",
//           films: [
//             "A New Hope",
//             "The Empire Strikes Back",
//             "Return of the Jedi",
//             "Revenge of the Sith",
//           ],
//         },
//       ],
//     },
//   });
// };

describe("Character Card Component", () => {
  test("should render the page", () => {
    const { getByTestId } = render(<CharacterCard peopleData={peopleData} />, {
      wrapper: MemoryRouter,
    });
    expect(getByTestId("characterCard")).toBeInTheDocument();
  });

  xtest("should display 'back' button", async () => {
    const { getByTestId } = render(<CharacterCard peopleData={peopleData} />, {
      wrapper: MemoryRouter,
    });
    await waitFor(() => {
      expect(getByTestId("backAllCards")).toBeInTheDocument();
    });
  });

  test("show loader when it's fetching data", () => {
    const { getByText } = render(<CharacterCard peopleData={peopleData} />, {
      wrapper: MemoryRouter,
    });
    expect(getByText(/Loading data.../i)).toBeInTheDocument();
  });

  xtest("should render character name and information", async () => {
    jest.setTimeout(60000);
    const { getByText } = render(<CharacterCard peopleData={peopleData} />, {
      wrapper: MemoryRouter,
    });
    await waitFor(() => {
      screen.getByText(["Darth Vader"]);
    });
    expect(getByText("Darth Vader")).toBeInTheDocument();
    expect(getByText("yellow")).toBeInTheDocument();
  });

  xtest("specificCard should be the correct character object", async () => {
    jest.fn(() => {
      return {
        specificCard: {
          name: "Darth Vader",
          hair_color: "none",
          eye_color: "yellow",
          gender: "male",
          homeworld: "Tatooine",
          films: ["http://swapi.dev/api/films/4/"],
        },
      };
    });
    const { getByTestId } = render(<CharacterCard peopleData={[]} />, {
      wrapper: MemoryRouter,
    });
    await waitFor(() => {
      expect(getByTestId("characterCardName").textContent).toBe("Darth Vader");
    });
  });
});
