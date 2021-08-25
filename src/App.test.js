import { render, screen } from "@testing-library/react";
import App from "./App";

import { configure, shallow } from "enzyme"; //// Create for every test file you make
import Adapter from "enzyme-adapter-react-16"; //
configure({ adapter: new Adapter() }); //////////

//shallow only renders the component but not the childeren
//to console log the contents of a shallow wrapper you can use console.log(wrapper.debug())

describe("Playing with Jest", () => {
 let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  test("render the title of counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is Tic Tac Toe");//toContain checks if it contains

    // render(<App />);
    // const linkElement = screen.getByText("This is Tic Tac Toe"); //gets app component as text
    // expect(linkElement).toBeInTheDocument(); //expects "linkElement" variable to be found in the document
  });


 
  test("render the title of counter", () => {
    
    expect(wrapper.find("#selectID").text()).toBe("This is Tic Tac Toe");//selects by ID and expect exact value of "This is Tic Tac Toe"
});
  


// describe("check for specific text", () => {
//   test("render the title of counter", () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find("#selectID").text()).toBe("This is Tic Tac Toe");//selects by ID and expect exact value of "This is Tic Tac Toe"

//   });
// });