import { render, screen } from "@testing-library/react";
import CharactersList from "./CharactersList";

describe("CharactersList Component", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should render the page", async () => {
    render(<CharactersList />);
    const element = screen.getByText("All Characters");
    expect(element).toBeInTheDocument();
  });
});
