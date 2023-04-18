import { quizHTML } from "../../../assets/quizHTML";
import Quiz from "react-quiz-component";
import style from "../../Questions/QuestionsStyle.module.css";
import { ButtonBack } from "../ButtonBack/ButtonBack";

export function QuestionsHTML() {
  return (
    <div>
      <div className={style.question_container}>
        <Quiz quiz={quizHTML} shuffle={true} />
      </div>
      <ButtonBack />
    </div>
  );
}
