import React from "react";
import { render } from "@testing-library/react";

import App from "./../App";

it("renders expected greeting", () => {
  const { getByText } = render(<App />);

  expect(getByText("Hi from App!")).toBeInTheDocument();
});
