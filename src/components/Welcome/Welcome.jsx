import { CategoryCSS } from "./CategoriesCards/CategoryCSS/CategoryCSS";
import { CategoryHTML } from "./CategoriesCards/CategoryHTML/CategoryHTML";
import { CategoryJS } from "./CategoriesCards/CategoryJS/CategoryJS";
import style from "./WelcomeStyle.module.css";
import {Routes, Route} from 'react-router-dom';
import { Questions } from "../Questions/Questions";

export function Welcome() {
  return (
    <>
      <header className={style.header}>
        <h1>Are you fit for Junior Frontend Developer?</h1>
        <h4>Check your knowlage, choose category</h4>
      </header>
      <div className={style.categories_cards}>
      <Routes>
        <Route path='/' element={<Questions/>}/>
        </Routes>
        <CategoryJS />
        <CategoryCSS />
        <CategoryHTML />
      </div>
    </>
  );
}
