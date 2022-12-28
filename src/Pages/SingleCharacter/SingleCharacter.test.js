import React from "react";
import { render, screen } from "@testing-library/react";
import SingleCharacter from "./SingleCharacter";

const character = { name: "R2-D2", gender: "n/a", homeworld: "Naboo" };

describe("SingleCharacter component", () => {
  test("should render the page", () => {
    render(<SingleCharacter character={character} />);
    const singleCharacter = screen.getByTestId("singleCharacter");
    expect(singleCharacter).toHaveTextContent("GENDER");
  });

  test("renders name", () => {
    render(<SingleCharacter character={character} />);
    const singleCharacterName = screen.getByTestId("singleCharacterName");
    expect(singleCharacterName).toHaveTextContent("R2-D2");
  });

  test("renders gender", () => {
    render(<SingleCharacter character={character} />);
    const singleCharacterGender = screen.getByTestId("singleCharacterGender");
    expect(singleCharacterGender).toHaveTextContent("n/a");
  });

  test("renders home planet", () => {
    render(<SingleCharacter character={character} />);
    const singleCharacterHomeworld = screen.getByTestId(
      "singleCharacterHomeworld"
    );
    expect(singleCharacterHomeworld).toHaveTextContent("Naboo");
  });
});
