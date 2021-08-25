import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Playing with Jest", () => {
  test("render the title of counter", () => {
    render(<App />);
    const linkElement = screen.getByText("This is Tic Tac Toe"); //gets app component as text
    expect(linkElement).toBeInTheDocument(); //expects "linkElement" variable to be found in the document
  });
});
