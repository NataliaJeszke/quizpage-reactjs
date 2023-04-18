import { Welcome } from "./components/Welcome/Welcome";
import { QuestionsJS } from "./components/Questions/QuestionsJS/QuestionsJS";
import { QuestionsHTML } from "./components/Questions/QuestionsHTML/QuestionsHTML";
import { QuestionsCSS } from "./components/Questions/QuestionsCSS/QuestionsCSS";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoPage } from "./components/NoPage/NoPage";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/questionsjs" element={<QuestionsJS />} />
          <Route path="/questionscss" element={<QuestionsCSS />} />
          <Route path="/questionshtml" element={<QuestionsHTML />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
