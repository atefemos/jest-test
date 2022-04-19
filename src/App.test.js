import React from "react";
import { ReactDOM } from "react";
import App from "./App";
import renderer from "react-test-renderer";

test("snapshot test", () => {
  const tree = renderer.create(<App />).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
