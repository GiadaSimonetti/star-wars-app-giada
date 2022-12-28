/* eslint-disable testing-library/prefer-screen-queries */
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import CharacterList from "./CharacterList";

const peopleData = [{ name: "Luke Skywalker" }, { name: "Leia Organa" }];

describe("CharacterList Component", () => {
  beforeEach(() => jest.clearAllMocks());

  test("should render the page", () => {
    render(<CharacterList />);
    const element = screen.getByText("All Characters");
    expect(element).toBeInTheDocument();
  });

  test("should render character names when api responds", async () => {
    const { getByText } = render(<CharacterList peopleData={peopleData} />, {
      wrapper: MemoryRouter,
    });
    await waitFor(() => {
      screen.getByText(["Luke Skywalker"]);
    });
    expect(getByText("Luke Skywalker")).toBeInTheDocument();
    expect(getByText("Leia Organa")).toBeInTheDocument();
  });
});
