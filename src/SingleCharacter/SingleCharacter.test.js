import React from "react";
import { render, screen } from "@testing-library/react";
import SingleCharacter from "./SingleCharacter";

describe("SingleCharacter component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("renders name", () => {
    const character = { name: "R2-D2", gender: "n/a" };

    render(<SingleCharacter character={character} />);

    expect(screen.getByText("R2-D2")).toBeInTheDocument();
  });

  it('when character clicked, call passed "onClick" function', () => {
    const onClick = jest.fn();
    const character = { name: "R2-D2", gender: "n/a" };
    render(<SingleCharacter character={character} onClick={onClick} />);

    screen.getByText("R2-D2").click();

    expect(onClick).toHaveBeenCalled();
  });
});
