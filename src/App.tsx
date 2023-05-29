import { RouterProvider } from "react-router";
import "./App.css";
import { AnagramApp } from "./components/AnagramApp";
import { DashboardApp } from "./components/DashboardApp";
import { router } from "./Router";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
