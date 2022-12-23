import React from "react";
import { render, screen } from "@testing-library/react";
import SingleCharacter from "./SingleCharacter";

const character = { name: "R2-D2", gender: "n/a", homeworld: "Naboo" };

describe("SingleCharacter component", () => {
  it("renders name", () => {
    render(<SingleCharacter character={character} />);
    const singleCharacterName = screen.getByTestId("singleCharacterName");
    expect(singleCharacterName).toHaveTextContent("R2-D2");
  });

  it("renders gender", () => {
    render(<SingleCharacter character={character} />);
    const singleCharacterGender = screen.getByTestId("singleCharacterGender");
    expect(singleCharacterGender).toHaveTextContent("n/a");
  });

  it("renders home planet", () => {
    render(<SingleCharacter character={character} />);
    const singleCharacterHomeworld = screen.getByTestId(
      "singleCharacterHomeworld"
    );
    expect(singleCharacterHomeworld).toHaveTextContent("Naboo");
  });
});
