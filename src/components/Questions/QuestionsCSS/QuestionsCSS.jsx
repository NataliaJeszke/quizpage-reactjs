import { quizCSS } from "../../../assets/quizCSS";
import Quiz from "react-quiz-component";
import style from "../../Questions/QuestionsStyle.module.css";
import { ButtonBack } from "../ButtonBack/ButtonBack";

export function QuestionsCSS() {
  return (
    <div>
      <div className={style.question_container}>
        <Quiz quiz={quizCSS} shuffle={true} />
      </div>
        <ButtonBack />
    </div>
  );
}
