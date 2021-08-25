import { shallow } from "enzyme";
import BoardSquares from "./BoardSquares";

const props = {
  value: null,
  onClick: jest.fn(),
};

describe("TicTacToe Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BoardSquares {...props} />);
  });

  it("Recieved Click Event", () => {
    const component = wrapper.find(".boardSquaresButton");
    component.simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });
});
