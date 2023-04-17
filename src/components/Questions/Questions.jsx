import { quiz } from "./quiz";
import Quiz from 'react-quiz-component'

export function Questions() {
  return (
    <div>
      <Quiz quiz={quiz} shuffle={true} />
    </div>
  );
}
