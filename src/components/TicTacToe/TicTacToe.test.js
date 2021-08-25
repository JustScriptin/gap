import { shallow } from "enzyme";
import TicTacToe from "./TicTacToe";

describe("TicTacToe Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TicTacToe />);
  });

  it("Board component Exists", () => {
    expect(wrapper.find("Board").length).toEqual(1);
  });
});
