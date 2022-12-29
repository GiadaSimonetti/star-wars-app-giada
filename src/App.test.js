/* eslint-disable testing-library/prefer-screen-queries */
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import App, { url } from "./App";

jest.mock("axios");

beforeEach(() => {
  window.alert = jest.fn();
});

afterEach(() => {
  axios.get.mockClear();
  cleanup();
});

const mockCall = () => {
  axios.get.mockResolvedValue({
    data: {
      results: [
        {
          name: "Luke Skywalker",
          gender: "male",
        },
        {
          name: "C-3PO",
          gender: "n/a",
        },
      ],
    },
  });
};

describe("App Component", () => {
  test("should render", () => {
    mockCall();
    render(<App />);
    const app = screen.getByTestId("app");
    expect(app).toHaveTextContent("Star Wars App");
  });

  test("show loader when it's fetching data", () => {
    mockCall();
    const { getByText } = render(<App />);
    expect(getByText(/Loading data.../i)).toBeInTheDocument();
  });

  test("axios should have been called with the right url", () => {
    mockCall();
    render(<App />);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(url);
  });

  test("should render character names when api responds", async () => {
    mockCall();
    const { getByText } = render(<App />);
    await waitFor(() => {
      screen.getByText("Luke Skywalker");
    });
    expect(getByText("Luke Skywalker")).toBeInTheDocument();
    expect(getByText("C-3PO")).toBeInTheDocument();
    expect(getByText("n/a")).toBeInTheDocument();
  });

  it("should display an error message when data cannot be loaded", async () => {
    axios.get.mockRejectedValue(new Error("error loading data"));
    render(<App />);
    await waitFor(() =>
      expect(window.alert).toHaveBeenCalledWith("error loading data")
    );
  });
});
