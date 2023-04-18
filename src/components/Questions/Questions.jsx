import { quizJS } from "../../assets/quizJS";
import Quiz from "react-quiz-component";

export function Questions() {
  return (
    <div>
      <Quiz quiz={quizJS} shuffle={true} />
    </div>
  );
}
