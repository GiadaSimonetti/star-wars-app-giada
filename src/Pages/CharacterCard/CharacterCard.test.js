/* eslint-disable testing-library/prefer-screen-queries */
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import CharacterCard from "./CharacterCard";

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

afterEach(cleanup);

describe("Character Card Component", () => {
  test("should render the page", () => {
    const { getByTestId } = render(<CharacterCard peopleData={peopleData} />, {
      wrapper: MemoryRouter,
    });
    expect(getByTestId("characterCard")).toBeInTheDocument();
  });

  test("show loader when it's fetching data", () => {
    const { getByText } = render(<CharacterCard peopleData={peopleData} />, {
      wrapper: MemoryRouter,
    });
    expect(getByText(/Loading data.../i)).toBeInTheDocument();
  });

  test("landing on a bad page", () => {
    const badRoute = "/some/bad/route";
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <CharacterCard peopleData={peopleData} />
      </MemoryRouter>
    );
    expect(screen.queryByText(/bad route/i)).not.toBeInTheDocument();
  });
});
