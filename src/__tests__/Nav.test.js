import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "../components/Nav/Nav";

test("renders navbar", () => {
  const navbar = render(<Nav />);
  const navElement = navbar.getByTestId("navbar");
  expect(navElement).toBeInTheDocument();
});

test("navbar has main class", () => {
  const navbar = render(<Nav />);
  const navElement = navbar.getByTestId("navbar");
  expect(navElement).toHaveClass("nav-container");
});

test("navbar has children", () => {
  const navbar = render(<Nav />);
  const navElement = navbar.getByTestId("navbar");
});
