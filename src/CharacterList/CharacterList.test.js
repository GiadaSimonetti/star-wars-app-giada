import { render, screen, waitFor } from "@testing-library/react";
import CharacterList from "./CharacterList";
import * as api from "../api";

jest.mock("../api");

describe("CharacterList Component", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should render character names when api responds", async () => {
    api.getCharacterFromApi.mockResolvedValue({
      results: [{ name: "C-3PO" }],
    });
    render(<CharacterList />);
    await waitFor(() => {
      screen.getByText("C-3PO");
    });
  });
});
