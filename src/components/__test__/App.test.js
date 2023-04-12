import React from "react";
import { I18nextProvider } from "react-i18next";
import { render, screen } from "@testing-library/react";

import App from "./../App";
import i18n from "../../utils/i18n-test";

it("renders expected content", () => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );

  expect(screen.getByRole("navigation")).toHaveTextContent("English");
  expect(screen.getByRole("navigation")).toHaveTextContent("Español");

  expect(screen.getByRole("heading")).toHaveTextContent("about:greeting");
  expect(screen.getByRole("main")).toHaveTextContent("about:about_me");

  expect(screen.getByRole("img")).toHaveAttribute("alt", "David Montesdeoca");

  const links = screen.getAllByRole("link");

  expect(links[0]).toHaveTextContent("Blog");
  expect(links[0]).toHaveAttribute("href", "https://blog.davidmontesdeoca.es");

  expect(links[1]).toHaveTextContent("LinkedIn");
  expect(links[1]).toHaveAttribute("href", "https://linkedin.com/in/backpackerhh");

  expect(links[2]).toHaveTextContent("GitHub");
  expect(links[2]).toHaveAttribute("href", "https://github.com/backpackerhh");

  expect(links[3]).toHaveTextContent("Stack Overflow");
  expect(links[3]).toHaveAttribute("href", "http://stackoverflow.com/users/1477964/backpackerhh");

  expect(links[4]).toHaveTextContent("Email");
  expect(links[4]).toHaveAttribute("href", "mailto:backpackerhh@davidmontesdeoca.es");
});
