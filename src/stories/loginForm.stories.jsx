import React from "react";
import LoginForm from "../components/authForm";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Login form",
  component: LoginForm,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <LoginForm title="Login" buttonText={"LOG IN"} />;

Basic.storyName = "Default";
