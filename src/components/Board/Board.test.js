import { shallow } from "enzyme";
import Board from "./Board";
import BoardSquares from "../BoardSquares/BoardSquares";

const props = {
  squares: Array(9).fill({ value: null, disabled: false }),
  onClick: jest.fn(),
};

describe("Board Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Board {...props} />);
  });

  it("renders component", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("shows the amount of squares needed make a tic tac toe board", () => {
    expect(wrapper.find(BoardSquares).length).toEqual(props.squares.length);
  });
});
