import style from "../../CategoriesCards/CategoriesCardsStyle.module.css";
import { useState } from "react";

export function CategoryJS() {
//   const [selectedQuiz, setSelectedQuiz] = useState("");
  return (
    <div
      className={style.card_one}
    >
      <h3>JavaScript</h3>
      <p>Check your basic knowlage of Pure JS</p>
    </div>
  );
}
