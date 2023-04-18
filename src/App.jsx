import { Welcome } from "./components/Welcome/Welcome";
import { Questions } from "./components/Questions/Questions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoPage } from "./components/NoPage/NoPage";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/questions" element={<Questions/>} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
