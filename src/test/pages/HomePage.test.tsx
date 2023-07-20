import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from "../../pages/HomePage";
import { MemoryRouter } from "react-router-dom";

describe("HomePgae", () => {
  test("should render HomePage", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const welcometext = screen.getByText(/Welcome To My Page/i);
    expect(welcometext).toBeInTheDocument();
  });

  test("should render name in homepage", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const nameText = screen.getByText(/Nuntapong \(Pat\) Siripanyawong/i);
    expect(nameText).toBeInTheDocument();
  });

  test("should render blink in homepage", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const blink = screen.getByText(/\|/i);
    expect(blink).toBeInTheDocument();
  });

  test("should render button in homepage", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const button = screen.getByText(/My Profile/i);
    expect(button).toBeInTheDocument();
  });
});
