import { CategoryCSS } from "./CategoriesCards/CategoryCSS/CategoryCSS";
import { CategoryHTML } from "./CategoriesCards/CategoryHTML/CategoryHTML";
import { CategoryJS } from "./CategoriesCards/CategoryJS/CategoryJS";
import { Link } from "react-router-dom";
import style from "./WelcomeStyle.module.css";
import image from '../../assets/programmer.png';

export function Welcome() {
  return (
    <>
      <header className={style.header}>
        <div className="header_container">
        <h1>Are you fit for Junior Frontend Developer?</h1>
        <h4>Check your knowlage, choose category</h4>
        </div>
        <div>
      <img src={image} alt="Opis obrazka" />
    </div>
      </header>
      <div className={style.categories_cards}>
        <Link to="/questions">
          <CategoryJS />
        </Link>
        <Link to="/questions">
          <CategoryCSS />
        </Link>
        <Link to="/questions">
          <CategoryHTML />
        </Link>
      </div>
    </>
  );
}
