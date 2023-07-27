import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from "../../pages/HomePage";
import { MemoryRouter } from "react-router-dom";

describe("HomePgae", () => {
  test("user should see text welcome to my page", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const welcometext = screen.getByText(/Welcome To My Page/i);
    expect(welcometext).toBeInTheDocument();
  });

  test("user should see text my name", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const nameText = screen.getByText(/Nuntapong \(Pat\) Siripanyawong/i);
    expect(nameText).toBeInTheDocument();
  });

  test("user should see blink after my name text", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const blink = screen.getByText(/\|/i);
    expect(blink).toBeInTheDocument();
  });

  test("user should see button have text my profile", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const button = screen.getByText(/My Profile/i);
    expect(button).toBeInTheDocument();
  });
});
