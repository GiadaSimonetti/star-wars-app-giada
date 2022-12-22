import { render } from "@testing-library/react";
import axios from "axios";
import App, { url } from "./App";

jest.mock("axios");

afterEach(() => {
  axios.get.mockClear();
});

const mockCall = () => {
  axios.get.mockResolvedValueOnce({
    data: {
      results: [
        {
          name: "Luke Skywalker",
        },
        {
          name: "C-3PO",
        },
      ],
    },
  });
};
describe("App Component", () => {
  test("show loader when it's fetching data", () => {
    mockCall();
    const { getByText } = render(<App />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(/Loading data..../i)).toBeInTheDocument();
  });

  test("should render character names when api responds", async () => {
    mockCall();
    render(<App />);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(url);
  });
});
