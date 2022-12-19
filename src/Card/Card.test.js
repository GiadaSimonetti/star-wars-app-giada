import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  it("renders name", () => {
    const character = { name: "R2-D2", gender: "n/a" };

    render(<Card character={character} />);

    expect(screen.getByText("R2-D2")).toBeInTheDocument();
  });

  it('when character clicked, call passed "onClick" function', () => {
    const onClick = jest.fn();
    const character = { name: "R2-D2", gender: "n/a" };
    render(<Card character={character} onClick={onClick} />);

    screen.getByText("R2-D2").click();

    expect(onClick).toHaveBeenCalled();
  });
});
