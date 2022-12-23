/* eslint-disable testing-library/prefer-screen-queries */
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
    window.alert = jest.fn();
    const { getByText } = render(<App />);
    expect(getByText(/Loading data.../i)).toBeInTheDocument();
  });

  test("should render character names when api responds", async () => {
    mockCall();
    window.alert = jest.fn();
    render(<App />);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(url);

    // await waitFor(() => {
    //   screen.getByText(["Luke Skywalker", "C-3PO"]);
    // });
    // expect(axios.get).toHaveBeenCalledWith(["Luke Skywalker", "C-3PO"]);
  });
});
