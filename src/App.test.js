import { render, screen } from "@testing-library/react";
import App from "./App";
import { shallow, mount } from "enzyme";

//shallow only renders the component but not the childeren
//to console log the contents of a shallow wrapper you can use console.log(wrapper.debug())

describe("Playing with Jest", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />); //put any component you want to test in the parameters of shallow
    // if you want to look into children as well then use mount instead of shallow
  });

  test("render the title of counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is Tic Tac Toe"); //toContain checks if it contains

    // render(<App />);
    // const linkElement = screen.getByText("This is Tic Tac Toe"); //gets app component as text
    // expect(linkElement).toBeInTheDocument(); //expects "linkElement" variable to be found in the document
  });

  test("find string by id", () => {
    expect(wrapper.find("#selectID").text()).toBe("This is Tic Tac Toe"); //selects by ID and expect exact value of "This is Tic Tac Toe"
    //all returned outputs are strings so if you expect a number you have to put the number in quotes so it matches with the output
    // to pass variable from wrapper you need to use curly bracket notation so -> {state/variable}
  });

  // describe("check for specific text", () => {
  //   test("render the title of counter", () => {
  //     const wrapper = shallow(<App />);
  //     expect(wrapper.find("#selectID").text()).toBe("This is Tic Tac Toe");//selects by ID and expect exact value of "This is Tic Tac Toe"

  //   });

  test("render click events and state values", () => {
    wrapper.find("#selectedButtonByID").simulate("click");
    expect(wrapper.find("#value").text()).toBe("1"); //saying after a click is detected from the selected ID the it expects a value of "1"
  });
});
