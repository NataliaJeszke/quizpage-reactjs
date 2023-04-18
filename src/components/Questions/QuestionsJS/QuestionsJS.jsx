import { quizJS } from "../../../assets/quizJS";
import Quiz from "react-quiz-component";

export function QuestionsJS() {
 
  return (
    <div>
      <Quiz quiz={quizJS} shuffle={true} />
    </div>
  );
}
