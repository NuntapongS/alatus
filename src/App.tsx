import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";

const route = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/about-me",
    element: <AboutMe />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
