import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";

const route = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/profile",
    element: <Profile />,
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
