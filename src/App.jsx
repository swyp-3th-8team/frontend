import "./App.scss";
import { Outlet } from "react-router-dom";
import Header from "./components/Layout/Header";
import PreMainPage from "./pages/PreMainPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
