import { quizHTML } from "../../../assets/quizHTML";
import Quiz from "react-quiz-component";

export function QuestionsHTML() {
 
  return (
    <div>
      <Quiz quiz={quizHTML} shuffle={true} />
    </div>
  );
}
