import { CategoryCSS } from "./CategoriesCards/CategoryCSS/CategoryCSS";
import { CategoryHTML } from "./CategoriesCards/CategoryHTML/CategoryHTML";
import { CategoryJS } from "./CategoriesCards/CategoryJS/CategoryJS";
import style from "./WelcomeStyle.module.css";

export function Welcome() {
  return (
    <>
      <header className={style.header}>
        <h1>Are you fit for Junior Frontend Developer?</h1>
        <h4>Check your knowlage, choose category</h4>
      </header>
      <div className={style.categories_cards}>
        <CategoryJS />
        <CategoryCSS />
        <CategoryHTML />
      </div>
    </>
  );
}
