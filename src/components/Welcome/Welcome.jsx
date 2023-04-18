import { CategoryCSS } from "./CategoriesCards/CategoryCSS/CategoryCSS";
import { CategoryHTML } from "./CategoriesCards/CategoryHTML/CategoryHTML";
import { CategoryJS } from "./CategoriesCards/CategoryJS/CategoryJS";
import { Link } from "react-router-dom";
import style from "./WelcomeStyle.module.css";
import image from "../../assets/programmer.png";

export function Welcome() {
  return (
    <>
      <header className={style.header}>
        <div className="header_container">
          <h1>Junior Frontend Developer?</h1>
          <h2>Sprawdź swoją wiedzę</h2>
        </div>
        <div>
          <img src={image} alt="developer at work" />
        </div>
      </header>
      <div className={style.categories_cards}>
        <Link to="/questionsjs">
          <CategoryJS />
        </Link>
        <Link to="/questionscss">
          <CategoryCSS />
        </Link>
        <Link to="/questionshtml">
          <CategoryHTML />
        </Link>
      </div>
    </>
  );
}
