import React from "react";
import { render } from "@testing-library/react";

import App from "./../App";

it("renders expected content", () => {
  const { getByTestId, getByText } = render(<App />);

  expect(getByTestId("header")).toHaveTextContent("David Montesdeoca");
  expect(getByText("my LinkedIn profile").closest("a")).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/backpackerhh"
  );
});
