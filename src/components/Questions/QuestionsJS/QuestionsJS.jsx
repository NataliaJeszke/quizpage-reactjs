import { quizJS } from "../../../assets/quizJS";
import Quiz from "react-quiz-component";
import style from "../../Questions/QuestionsStyle.module.css";
import { ButtonBack } from "../ButtonBack/ButtonBack";

export function QuestionsJS() {
  return (
    <div className={style.container}>
      <div className={style.question_container}>
        <Quiz quiz={quizJS} shuffle={true} className={style.quiz_container} />
      </div>
      <ButtonBack />
    </div>
  );
}
