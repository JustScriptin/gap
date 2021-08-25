import { shallow } from "enzyme";
import App from "./App";
import TicTacToe from "./components/TicTacToe/TicTacToe";

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("rendered tic tac toe component", () => {
    expect(wrapper.containsMatchingElement(<TicTacToe />)).toEqual(true);
  });
});
