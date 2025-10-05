import "./App.css";
import MainPage from "./pages/MainPage";
import StartPage from "./pages/StartPage";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="main" element={<MainPage />} />
    </Routes>
  );
}
