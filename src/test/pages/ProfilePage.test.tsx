import { render, screen } from "@testing-library/react";
import Profile from "../../pages/ProfilePage";
import { MemoryRouter } from "react-router-dom";

describe("Profile", () => {
  test("user should see text hello world", () => {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );
    const textGreeting = screen.getByText(/Hello World/i);
    expect(textGreeting).toBeInTheDocument();
  });

  test("user should see text welcome to my profile", () => {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );
    const textWelcome = screen.getByText(/Welcome To My Profile/);
    expect(textWelcome).toBeInTheDocument();
  });
});
