import { render, screen, waitFor } from "@testing-library/react";
import CharacterList from "./CharacterList";
// import axios from "axios";

// jest.mock("axios");

// afterEach(() => {
//   axios.get.mockClear();
// });

// const mockCall = () => {
//   axios.get.mockResolvedValueOnce({
//     data: {
//       results: [
//         {
//           name: "Luke Skywalker",
//         },
//         {
//           name: "C-3PO",
//         },
//       ],
//     },
//   });
// };

describe("CharacterList Component", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should render the page", async () => {
    render(<CharacterList />);
    const element = screen.getByText("All Characters");
    expect(element).toBeInTheDocument();
  });

  xit("should render character names when api responds", async () => {
    // mockCall();
    render(<CharacterList />);
    await waitFor(() => {
      screen.getByText("C-3PO");
    });
  });
});
