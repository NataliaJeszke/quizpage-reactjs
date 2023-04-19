import { Link } from "react-router-dom";
import btnStyle from './ButtonBackStyle.module.css'

export function ButtonBack() {
  return (
    <div>
      <Link to="/welcome">
        <button className={btnStyle.back_btn}>Strona główna</button>
      </Link>
    </div>
  );
}
