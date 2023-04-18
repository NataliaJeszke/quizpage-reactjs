import { quizCSS } from "../../../assets/quizCSS";
import Quiz from "react-quiz-component";

export function QuestionsCSS() {
 
  return (
    <div>
      <Quiz quiz={quizCSS} shuffle={true} />
    </div>
  );
}
